<template>
  <div class="shop">
    <div class="content">
      <div class="grid" v-for="(v, k) in grid" :key="k">
        <div class="title" v-if="v.lv" @contextmenu.prevent="openMenu(k, $event)" @mouseover="showItemInfo($event, v.itemType, v)" @mouseleave="closeItemInfo" @touchstart.stop.prevent="openMenu(k,$event)">
          <div class="icon" :style="{ 'box-shadow': 'inset 0 0 7px 2px ' + v.quality.color }">
            <img :src="v.type.iconSrc" alt="" />
          </div>
          <div class="info" :style="{'font-size':(parseInt(v.gold)>99999?0.18:0.22)+'rem'}">
            <div>{{v.lv}}</div>
            <div>{{v.gold}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="handle">

      <div class="info">
        <span v-show="timeStart" class="timeStart">等待：{{timeo}}s</span>
        <span>免费刷新次数：{{freeAmount}}</span>
      </div>

      <div class="button" @click="goldRefreshShopItems()">付费高级刷新</div>
      <div class="button" @click="refreshShopItems()">免费刷新</div>
    </div>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li @click="showItemInfo($event,currentItem.itemType,currentItem,'touch')" v-if="$store.state.operatorSchemaIsMobile">查看</li>
      <li @click="buyTheEquipment()">购买</li>
    </ul>
  </div>
</template>
<script>
const CD = 5
const MaxFree = 10

import { assist } from "@/service/assist";
import { calculatePrice } from '@/service/helper';
export default {
  name: "shop",
  data() {
    return {
      grid: [],
      left: "",
      top: "",
      visible: false,
      currentItem: {},
      currentItemIndex: "",
      freeAmount: MaxFree,
      timeo: CD,
      timeStart: false,
      timeInterval: '',
      isTouch: false,
      tipsFlag: false,
      tipsFlagComfirm: false,
    };
  },
  mixins: [assist],
  created() {
    this.grid = new Array(5).fill({});
  },
  watch: {
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
    freeAmount(value) {
      if (value < MaxFree) {

        if (this.timeStart) {
          return
        }
        this.timeStart = true
        this.timeInterval = setInterval(() => {
          this.timeo--
          if (this.timeo <= 0) {
            this.freeAmount++
            this.timeo = CD
          }
        }, 1000)
      } else {
        this.timeStart = false
        this.timeo = CD
        clearInterval(this.timeInterval)
      }
    }
  },
  mounted() {
    this.refreshShopItems(true);
  },
  methods: {
    /**
     * 刷新商店
     * constraint 是否跳过神器装备检测强制刷新
     */
    refreshShopItems(constraint) {
      this.tipsFlag = !constraint && this.grid.find(item => {
        return item.quality && item.quality.name == '神器'
      })
      if (this.tipsFlagComfirm) {
        return
      }
      if (this.tipsFlag && !constraint) {
        this.tipsFlagComfirm = true
        this.$message({
          message: '刷到了神器装备哦，不看看嘛？',
          closeBtnText: '看看',
          confirmBtnText: '辣鸡我不要',
          onCancle: () => {
            this.tipsFlagComfirm = false
          },
          onClose: () => {
            this.tipsFlagComfirm = false
            this.refreshShopItems(true)
          }
        })
        return
      }
      if (this.freeAmount > MaxFree) {
        this.freeAmount = MaxFree
      }
      if (this.freeAmount < 1) {
        this.$store.commit("set_sys_info", {
          msg: `
              刷新次数不够了，等等吧。
            `,
          type: "warning",
        });
        return
      }
      this.freeAmount--
      this.grid = new Array(5).fill({});
      var wlv = Number(this.$store.state.playerAttribute.weapon.lv);
      var alv = Number(this.$store.state.playerAttribute.armor.lv);
      var ringlv = Number(this.$store.state.playerAttribute.ring.lv);
      var necklv = Number(this.$store.state.playerAttribute.neck.lv);
      for (let i = 0; i < 5; i++) {
        var lv = Math.floor(this.$store.state.playerAttribute.lv + Math.random() * 5);
        this.createShopItem(lv);
      }
    },
    /**
     * 金币刷新商店
     * constraint 是否跳过神器装备检测强制刷新
     */
    goldRefreshShopItems(constraint) {
      this.tipsFlag = !constraint && this.grid.find(item => {
        return item.quality && item.quality.name == '神器'
      })
      if (this.tipsFlagComfirm) {
        return
      }
      if (this.tipsFlag && !constraint) {
        this.tipsFlagComfirm = true
        this.$message({
          message: '刷到了神器装备哦，不看看嘛？',
          closeBtnText: '看看',
          confirmBtnText: '辣鸡我不要',
          onCancle: () => {
            this.tipsFlagComfirm = false
          },
          onClose: () => {
            this.tipsFlagComfirm = false
            this.goldRefreshShopItems(true)
          }
        })
        return
      }
      var cost = 100 * this.$store.state.playerAttribute.lv
      if (this.$store.state.playerAttribute.GOLD < cost) {
        this.$store.commit("set_sys_info", {
          msg: `
              钱不够啊，想啥呢。
            `,
          type: "warning",
        });
      } else {
        this.$store.commit("set_player_gold", -cost);
        this.grid = new Array(5).fill({});
        var wlv = Number(this.$store.state.playerAttribute.weapon.lv);
        var alv = Number(this.$store.state.playerAttribute.armor.lv);
        var ringlv = Number(this.$store.state.playerAttribute.ring.lv);
        var necklv = Number(this.$store.state.playerAttribute.neck.lv);
        for (let i = 0; i < 5; i++) {
          var lv = Math.floor(this.$store.state.playerAttribute.lv + Math.random() * 5 + 5);
          this.createShopItem(lv, true);
        }
      }
    },
    createShopItem(lv, isPaid = false) {
      var equip = [0.0, 0.6, 0.3, 0.1];
      if (isPaid) {
        equip = [0.0, 0.0, 0.5, 0.5]
      }
      var equipQua = -1;
      var r = Math.random();
      if (r < equip[0]) {
        // 获得普通装备
        equipQua = 1;
      } else if (r < equip[1] + equip[0]) {
        // 获得精良装备
        equipQua = 2;
      } else if (r < equip[2] + equip[1] + equip[0]) {
        // 获得传说装备
        equipQua = 3;
      } else if (r < equip[3] + equip[2] + equip[1] + equip[0]) {
        // 获得神器装备
        equipQua = 4;
      } else {
        // 未获得装备
      }
      if (equipQua != -1) {
        // this.createEquip(equipQua,lv)
        var index = Math.floor(Math.random() * 4);
        if (index == 0) {
          var b = this.findBrothersComponents(this, "weaponPanel", false)[0];
          var item = b.createNewItem(equipQua, lv);
        } else if (index == 1) {
          var b = this.findBrothersComponents(this, "armorPanel", false)[0];
          var item = b.createNewItem(equipQua, lv);
        } else if (index == 2) {
          var b = this.findBrothersComponents(this, "ringPanel", false)[0];
          var item = b.createNewItem(equipQua, lv);
        } else {
          var b = this.findBrothersComponents(this, "neckPanel", false)[0];
          var item = b.createNewItem(equipQua, lv);
        }
        item = JSON.parse(item);
        item.gold = calculatePrice(item)
        for (let i = 0; i < this.grid.length; i++) {
          if (JSON.stringify(this.grid[i]).length < 3) {
            this.$set(this.grid, i, item);
            break;
          }
        }
      }
    },
    openMenu(k, e) {
      this.currentItemIndex = k;
      this.currentItem = this.grid[k];
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left; // container margin left
      const offsetWidth = this.$el.offsetWidth; // container width
      const maxLeft = offsetWidth - menuMinWidth; // left boundary
      if (e.type == 'touchstart') {
        var left = e.changedTouches[0].clientX - offsetLeft + 15; // 15: margin right
      } else {
        var left = e.clientX - offsetLeft + 15; // 15: margin right
      }

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }

      this.top = e.offsetY;
      this.visible = true;
    },
    closeMenu() {
      this.visible = false;
    },
    showItemInfo($event, type, item, SchemaIsMobile) {
      if (SchemaIsMobile != 'touch' && this.$store.state.operatorSchemaIsMobile) {
        return
      }
      var p = this.findComponentUpward(this, "index");
      p.showItemInfo($event, type, item);
    },
    closeItemInfo() {
      var p = this.findComponentUpward(this, "index");
      p.weaponShow = p.armorShow = p.ringShow = p.neckShow = false;
    },
    buyTheEquipment() {
      // var gold =
      //   this.currentItem.lv * this.currentItem.quality.qualityCoefficient * (200+5*this.currentItem.lv);
      // gold = parseInt(gold)
      if (this.$store.state.playerAttribute.GOLD < this.currentItem.gold) {
        this.$store.commit("set_sys_info", {
          msg: `
              钱不够啊，买啥呢。
            `,
          type: "warning",
        });
      } else {
        this.$store.commit("set_player_gold", -parseInt(this.currentItem.gold));

        var backpackPanel = this.findBrothersComponents(
          this,
          "backpackPanel",
          false
        )[0];
        for (let i = 0; i < backpackPanel.grid.length; i++) {
          if (JSON.stringify(backpackPanel.grid[i]).length < 3) {
            this.$set(backpackPanel.grid, i, this.currentItem);
            break;
          }
        }
        this.$set(this.grid, this.currentItemIndex, {});
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.shop {
  width: 5.02rem;
  height: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0.14rem 0.14rem 0.14rem;
  position: relative;
}
.handle {
  padding-top: 0.1rem;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  width: 100%;
  .info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
    margin-left: 0.2rem;
  }
}
.content {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.grid {
  width: 0.6rem;
  height: 0.6rem;
  border: 1px solid #ccc;
  box-shadow: inset 0 0 6px 6px rgba($color: #000000, $alpha: 0.5);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    display: flex;
    width: 100%;
    cursor: pointer;
    .icon {
      width: 0.56rem;
      height: 0.56rem;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.04rem;
    }
  }
  .info {
    position: absolute;
    bottom: -0.6rem;
    font-size: 0.24rem;
  }
}
.contextmenu {
  margin: 0;
  background: #000;
  border: 1px solid #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

  li {
    margin: 0;
    padding: 9px 16px;
    cursor: pointer;
    border-top: 1px solid #ccc;
    margin-top: -1px;
    font-size: 14px;
    letter-spacing: 6px;
    &:hover {
      color: #ccc;
    }
  }
}
</style>
