<template>
  <div class="neck">
    <!-- <div class="btn" style="position:relative;z-index:999;">
      <button @click="createNewneck">随机生成</button>
    </div> -->
    <div class="neckPanel" v-if="JSON.stringify(neck)!='{}'">
      <div class="title">
        <div class='icon' :class="{'red-flash':neck.enchantlvl>=13,unique:neck.quality.name=='神器'}" :style="{'box-shadow':'inset 0 0 7px 2px '+neck.quality.color}">
          <img :src="neck.type.iconSrc" alt="">
        </div>
        <div class='name' :style="{color:neck.quality.color}">{{neck.type.name}} {{neck.enchantlvl?'(+'+neck.enchantlvl+')':''}}</div>
      </div>
      <div class='type'>
        <div :style="{color:neck.quality.color}">{{neck.quality.name}}</div>
        <div>项链</div>
      </div>
      <div class='lv'>
        <div>lv{{neck.lv}}</div>
      </div>
      <div class="entry">
        <div v-for="v in neck.type.entry" :key="v.id">
          <!-- <div>{{v.name}} : {{v.showVal}}</div> -->
          <div>{{v.name}} : {{v.showVal}} <span style="color:#68d5ed" v-if="neck.enchantlvl">(+{{calculateUpgradeValue(v.value, neck.enchantlvl) - v.value}})</span></div>
        </div>
      </div>
      <div class="extraEntry">
        <div v-for="v in neck.extraEntry" :key="v.id">
          <div>{{v.name}} : {{v.showVal}}</div>
        </div>
      </div>
      <div class="des">
        <div>
          {{neck.type.des}}
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {equiAttributeNeck} from '@/config/equiAttributeNeck'
import { calculateUpgradeValue } from '@/service/helper'
export default {
  name: "neckPanel",
  mixins:[equiAttributeNeck],
  data() {
    return {
      neck: {},
      qualityProbability: [0.25, 0.55, 0.15, 0.05,],
    };
  },
  props: ['item'],
  mounted() {
  },
  watch: {
    item() {
      this.neck = this.$deepCopy(this.item)
    }
  },
  methods: {
    calculateUpgradeValue,
    createNewItem(qualityIndex, lv) {
      var neck = {}
      neck.itemType = 'neck'
      neck.quality = qualityIndex > -1 ? this.qualityNeck[qualityIndex] : this.createQua()
      neck.lv = lv || this.createLv()
      neck.type = this.createType(neck)
      neck.extraEntry = this.createExtraEntry(neck)
      return JSON.stringify(neck)
    },
    createLv(Max) {
      return parseInt(Math.random() * (Max || 39)) + 1
    },
    createType(neck) {
      if (neck.quality.name == '神器') {
        var index = Math.floor((Math.random() * this.uniqueCategoryNeck.length));
        var type = this.uniqueCategoryNeck[index], lv = neck.lv
      } else {
        var index = Math.floor((Math.random() * this.categoryNeck.length));
        var type = this.categoryNeck[index], lv = neck.lv
      }
      type.entry.map(item => {
        switch (item.type) {
          case 'ATK':
            var random = parseInt(lv * item.valCoefficient + (Math.random() * lv / 2 + 1))
            random = parseInt(random * neck.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.showVal = '+' + random
            break;
          case 'DEF':
            var random = parseInt((lv * item.valCoefficient + (Math.random() * lv / 2 + 1)))
            random = parseInt(random * neck.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.showVal = '+' + random
            break;
          case 'HP':
            var random = parseInt((lv * item.valCoefficient * 10 + (Math.random() * lv / 2 + 1)))
            random = parseInt(random * neck.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.showVal = '+' + random
            break;
          case 'CRIT':
            var random = parseInt(Math.random() * 5 + 5)
            random = parseInt(random * neck.quality.qualityCoefficient * item.valCoefficient)
            item.value = random
            item.showVal = '+' + random + '%'
            break;
          case 'CRITDMG':
            var random = lv * item.valCoefficient / 2 + 1
            random = parseInt(random * neck.quality.qualityCoefficient)
            item.value = random
            item.showVal = '+' + random + '%'
            break;
          case 'BLOC':
            var random = parseInt((lv * 0.2 * 2 + (Math.random() * lv / 2 + 1)))
            random = parseInt(random * neck.quality.qualityCoefficient)
            random = random || 1
            item.value = random
            item.showVal = '+' + random
            break;
            break;
          default:
            break;
        }
      })
      return type
    },
    createQua() {
      var index = Math.floor((Math.random() * this.qualityProbability.length));
      var a = this.qualityProbability[index], b = this.qualityProbability, quality
      switch (a) {
        case b[0]:
          quality = this.quality[0]
          break;
        case b[1]:
          quality = this.quality[1]
          break;
        case b[2]:
          quality = this.quality[2]
          break;
        case b[3]:
          quality = this.quality[3]
          break;
        default:
          break;
      }
      return quality
    },
    createExtraEntry(neck) {
      var n = neck.quality.extraEntryNum, extraEntry = [], lv = neck.lv
      for (let i = 0; i < n; i++) {
        var index = Math.floor((Math.random() * this.extraEntryNeck.length));
        extraEntry.push(this.extraEntryNeck[index])
      }
      return this.$deepCopy(extraEntry)
    }
  }
};


</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.neckPanel {
  color: #f1f1f1;
  width: 3rem;
  height: auto;
  background: rgba(0, 0, 0, 0.8);
  border: #393839;
  border-radius: 0.05rem;
  padding: 0.16rem;
  box-sizing: border-box;
  .title {
    display: flex;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #777;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.04rem;
    }
    .name {
      font-size: .16rem;
      text-shadow:  0px 0px 1px (255,255,255,0.3);
      height: 0.46rem;
      margin-left: 0.2rem;
      line-height: 0.46rem;
    }
  }
  .type {
    padding: 0.1rem;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: space-between;
  }
  .lv {
    padding-right: 0.1rem;
    display: flex;
    width: 100%;
    align-content: center;
    justify-content: flex-end;
  }
  .entry {
    width: 100%;
    padding-left: 0.2rem;
    padding-bottom: 0.1rem;
    border-bottom: 1px solid #777;
    div {
      text-align: left;
    }
  }
  .extraEntry {
    width: 100%;
    padding-left: 0.2rem;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
    color: #68d5ed;
    border-bottom: 1px solid #777;
    div {
      text-align: left;
    }
  }
}
.des {
  color: #777;
  font-size: 0.12rem;
  margin-top: 0.1rem;
  text-align: left;
  text-indent: 0.24rem;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem;
  button {
    padding: 0.06rem 0.12rem;
  }
}
</style>
