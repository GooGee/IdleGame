<template>
  <div class="reincarnation">
    <!-- <a class="github" target="_blank" @click="navToGithub" title="源码" src="https://github.com/Couy69/vue-idle-game"></a> -->
    <div class="title">
      <p>现在转生可以获得{{willGetreincarnationPoint}}转生点数</p>
      <p style="color:#f00">转生后会失去所有物品和金币</p>
      <div class='btn-div'>
        <div class="button" @click="reincarnationConfirm">确认转生</div>
      </div>
    </div>
    <div class="content">
      <div class="info">
        <p>当前转生次数：{{reincarnationData.count}}次</p>
        <p>剩余转生点数：{{reincarnationData.point}}</p>
      </div>
      <div class="panel">
        <div class="item" v-for="(v,k) in attr" :key="k">
          <p>
            <img :src="v.img"><span>{{v.showName}}：+{{v.currentValue.toFixed(2)}}{{v.unity}}</span>
          </p>
          <div class="group">
            <div class="button" @click="subtract(v,$event)" @mousedown="subtractDown(v,$event)" @mouseup="subtractUp(v,$event)">-</div>
            <input type="number" min="0" disabled v-model="v.point">
            <div class="button" v-on:click="add(v,$event)" @mousedown="addDown(v,$event)" @mouseup="addUp(v,$event)">+</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { assist } from '@/service/assist';
import { calculateGainingPoint } from '@/service/helper';
export default {
  name: "reincarnation",
  mixins: [assist],
  data() {
    return {
      reincarnationPoint: 100,
      reinCount: 0,
      willGetreincarnationPoint: 0,
      subtractTimer1: {},
      subtractTimer2: {},
      addTimer1: {},
      addTimer2: {},
      attr: [
        {
          name: 'HP',
          showName: '生命值',
          img: require('../../assets/icons/S_Holy01.png'),
          oldValue: 0,
          point: 0,
          unity: '',
          currentValue: 0,
          maxPoint: null,
        }, {
          name: 'ATK',
          showName: '攻击力',
          img: require('../../assets/icons/ATK.png'),
          oldValue: 0,
          point: 0,
          unity: '',
          currentValue: 0,
          maxPoint: null,
        }, {
          name: 'CRIT',
          showName: '暴击率',
          img: require('../../assets/icons/CRIT.png'),
          oldValue: 0,
          point: 0,
          unity: '%',
          currentValue: 0,
          maxPoint: 500,
        }, {
          name: 'CRITDMG',
          showName: '暴击伤害',
          img: require('../../assets/icons/CRITDMG.png'),
          oldValue: 0,
          point: 0,
          unity: '%',
          currentValue: 0,
          maxPoint: null,
        }, {
          name: 'DEF',
          showName: '护甲',
          img: require('../../assets/icons/icon_11.png'),
          oldValue: 0,
          point: 0,
          unity: '',
          currentValue: 0,
          maxPoint: null,
        }, {
          name: 'BLOC',
          showName: '格挡',
          img: require('../../assets/icons/S_BLOC.png'),
          oldValue: 0,
          point: 0, unity: '',
          currentValue: 0,
          maxPoint: null,
        },
        // {
        //   name: 'GOLD',
        //   showName: '金币获取倍率',
        //   img: require('../../assets/icons/S_BLOC.png'),
        //   oldValue: 0,
        //   point: 0, unity: '',
        //   currentValue: 0,
        //   maxPoint: null,
        // },
        // {
        //     name: 'MOVESPEED',
        //     showName: '副本行进速度',
        //     img: require('../../assets/icons/S_EVA.png'),
        //     oldValue: 0,
        //     point: 0, unity: 'X',
        //     currentValue: 0,
        //     maxPoint: 500,
        // },
        // {
        //     name: 'BATTLESPEED',
        //     showName: '副本战斗速度',
        //     img: require('../../assets/icons/S_EVA.png'),
        //     oldValue: 0,
        //     point: 0, unity: 'X',
        //     currentValue: 0,
        //     maxPoint: 500,
        // },
      ]
    };
  },
  mounted() {
    this.willGetreincarnationPoint = calculateGainingPoint(this.$store.state.playerAttribute)

    for (let i in this.reincarnationAttribute) {
      let item = this.reincarnationAttribute[i]
      switch (i) {
        case 'HP':
          var p = this.attr.filter(({ name }) => name == 'HP')[0];
          p.oldValue = p.currentValue = item
          p.hasPoint = item / 10
          break;
        case 'ATK':
          var p = this.attr.filter(({ name }) => name == 'ATK')[0];
          p.oldValue = p.currentValue = item
          p.hasPoint = item / 3
          break;
        case 'CRIT':
          var p = this.attr.filter(({ name }) => name == 'CRIT')[0];
          p.oldValue = p.currentValue = item
          p.hasPoint = item / 0.1
          break;
        case 'CRITDMG':
          var p = this.attr.filter(({ name }) => name == 'CRITDMG')[0];
          p.oldValue = p.currentValue = item
          p.hasPoint = item / 1
          break;
        case 'DEF':
          var p = this.attr.filter(({ name }) => name == 'DEF')[0];
          p.oldValue = p.currentValue = item
          p.hasPoint = item / 2
          break;
        default:
          break;
      }
    }
    this.reincarnationPoint = this.reincarnationData.point
    this.reinCount = this.reincarnationData.count
  },
  computed: {
    reincarnationData() { return this.$store.state.reincarnation },
    reincarnationAttribute() { return this.$store.state.reincarnationAttribute },
  },
  methods: {
    reincarnationConfirm() {
      if (this.$store.state.playerAttribute.lv < 30) {
        this.$store.commit("set_sys_info", {
          msg: `
              等级超过lv:30才能转生
            `,
          type: 'warning'
        });
        return
      }
      this.$message({
        message: `你将获得${this.willGetreincarnationPoint}转生点数，但你现有的金币和物品都会消失！`,
        title: '提示',
        closeBtnText: '算了',
        confirmBtnText: '转了转了',
        onClose: () => {
          this.clearPlayerInfo()
          this.$store.commit('set_player_rein', {
            count: this.reinCount + 1,
            point: this.willGetreincarnationPoint + this.reincarnationPoint
          })
          this.willGetreincarnationPoint = 0
          this.reinCount = this.reincarnationData.count
          this.reincarnationPoint = this.reincarnationData.point
        }
      })
    },
    clearPlayerInfo() {
      this.$store.commit('reset_player_gold', 0)
      this.$store.commit('reset_player_equi', {})
      var backpackPanel = this.findBrothersComponents(this, 'backpackPanel', false)[0]
      backpackPanel.clear()
      var p = this.findComponentUpward(this, 'index')
      p.createdDungeons(true)
    },
    subtract(v, e) {
      let num = 1
      if (e.shiftKey) {
        num = 10
      }
      if (v.point >= num) {
        v.point = v.point - num
        this.reincarnationPoint = this.reincarnationPoint + num
      }
      this.$store.commit('set_player_rein', {
        count: this.reinCount,
        point: this.reincarnationPoint
      })
      this.caculateAttr()
    },
    subtractDown(v,e) {
      var flag = false;
      var stop;
      this.subtractTimer1 = setTimeout(()=> {
        flag = true;
        this.subtractTimer2 = setInterval(()=>{
          this.subtract(v,e)
        },50)
      }, 500);
    },
    subtractUp(v) {
      clearTimeout(this.subtractTimer1)
      clearInterval(this.subtractTimer2)
    },
    addDown(v,e) {
      var flag = false;
      var stop;
      this.addTimer1 = setTimeout(()=> {
        flag = true;
        this.addTimer2 = setInterval(()=>{
          this.add(v,e)
        },50)
      }, 500);
    },
    addUp(v) {
      clearTimeout(this.addTimer1)
      clearInterval(this.addTimer2)
    },
    add(v, e) {
      console.log(v)
      let num = 1
      if (e.shiftKey) {
        num = 10
      }

      if(v.maxPoint && v.point + num > v.maxPoint){
        this.$store.commit("set_sys_info", {
          msg: `
              该项最多加点至${v.maxPoint}
            `,
          type: 'warning'
        });
        return
      }
      if (this.reincarnationPoint >= num) {
        v.point = v.point + num
        this.reincarnationPoint = this.reincarnationPoint - num
      }
      this.$store.commit('set_player_rein', {
        count: this.reinCount,
        point: this.reincarnationPoint
      })
      this.caculateAttr()
    },
    caculateAttr() {
      var data = {
        'HP': 0,
        'ATK': 0,
        'CRIT': 0,
        'CRITDMG': 0,
        'DEF': 0,
        'BLOC': 0,
        'MOVESPEED': 0,
        'BATTLESPEED': 0,
      }
      this.attr.map(item => {
        switch (item.name) {
          case 'HP':
            item.currentValue = item.point * 10 + item.oldValue
            data.HP = item.currentValue
            break;
          case 'ATK':
            item.currentValue = item.point * 3 + item.oldValue
            data.ATK = item.currentValue
            break;
          case 'CRIT':
            item.currentValue = Number((item.point * 0.5).toFixed(1)) + item.oldValue
            data.CRIT = item.currentValue
            break;
          case 'CRITDMG':
            item.currentValue = item.point * 1 + item.oldValue
            data.CRITDMG = item.currentValue
            break;
          case 'DEF':
            item.currentValue = item.point * 2 + item.oldValue
            data.DEF = item.currentValue
            break;
          case 'BLOC':
            item.currentValue = item.point * 2 + item.oldValue
            data.BLOC = item.currentValue
            break;
          case 'MOVESPEED':
            item.currentValue = Number((item.point * 0.01).toFixed(2)) + item.oldValue
            data.MOVESPEED = -((item.point + item.hasPoint) * 0.06)
            break;
          case 'BATTLESPEED':
            item.currentValue = Number((item.point * 0.01).toFixed(2)) + item.oldValue
            data.BATTLESPEED = -((item.point + item.hasPoint) * 3)
            break;
          default:
            break;
        }
      })
      this.$store.commit('set_player_rein_attribute', data)
    },

  }
};


</script>
<style lang="scss" scoped>
.reincarnation {
  padding: 0.1rem;
  width: 5rem;
  .title {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    .info {
      padding-left: 0.2rem;
      p {
        color: #999;
        font-size: 0.12rem;
        margin: 0rem;
      }
    }
    p {
      margin: 0.1rem;
      font-size: 0.16rem;
    }
    .btn-div {
      padding: 0.1rem;
      display: flex;
      justify-content: flex-end;
      padding-right: 0.3rem;
    }
  }
  .content {
    padding: 0.1rem;
    .info {
      padding: 0.04rem;
      display: flex;
      justify-content: space-between;
    }
    .panel {
      padding: 0.05rem 0;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.06rem;
        p {
          display: flex;
          align-items: center;
          img {
            width: 0.25rem;
            height: 0.25rem;
          }
          span {
            margin-left: 0.06rem;
          }
        }
        .group {
          display: flex;
          justify-content: space-between;
          input {
            width: 0.8rem;
          }
          .button {
          }
        }
      }
    }
  }
}

.fb {
  width: 54px;
  height: 50px;
  line-height: 100px;
  border-radius: 10%;
  overflow: hidden;
  position: relative;
  // background: rgba(0, 0, 0, 0.1);
  z-index: 10;
  i {
    color: #ccc;
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fb-content {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    position: absolute;
    top: 2px;
    left: 2px;
    background: #061b21;
    border-radius: 8%;
    display: flex;
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    background-color: #3e94ce;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    animation: bgmove 2s linear infinite;
    @keyframes bgmove {
      0% {
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
      }
      25% {
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
      }
      50% {
        top: calc(100% - 5px);
        left: 0;
        width: 100%;
        height: 5px;
      }
      75% {
        top: 0px;
        left: calc(100% - 5px);
        width: 5px;
        height: 100%;
      }
      100% {
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
      }
    }
  }
  &::before {
    content: "";
    padding: 50%;
    position: absolute;
    top: -25%;
    left: -25%;
    bottom: -25%;
    right: -25%;
    transform-origin: center center;
    transform: rotate(30deg) scale(2);
    background: conic-gradient(
      #3e94ce,
      #3e94ce8a,
      rgba(0, 0, 0, 0.06),
      rgba(0, 0, 0, 0.06)
    );
    animation: rotate 2s linear infinite;
    @keyframes rotate {
      100% {
        transform: rotate(-330deg) scale(2);
      }
    }
  }
}
</style>
