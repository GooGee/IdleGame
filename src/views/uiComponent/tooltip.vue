<template>
  <div class="c-tooltip">
    <div class="c-tooltip-content" @mouseover="showTips($event)" @mouseleave="closeTips">
      <slot name="content"></slot>
    </div>
    <div class="c-tooltip-tip" :class="placement" v-if="tipsShow" :style='tipsStyle'>
      <slot name="tip"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-tooltip",
  props: ['placement'],
  data() {
    return {
      tipsShow: false,
      tipsStyle: {}
    };
  },
  mounted() {

  },
  methods: {
    showTips(e) {
      this.tipsShow = true
    },
    closeTips() {
      this.tipsShow = false
    }
  },

};


</script>
<style lang="scss" scoped>
.c-tooltip,.c-tooltip-content {
  position: relative;
  width: 100%;
  cursor: pointer;
}
.c-tooltip-tip {
  bottom:-.05rem;
  position: absolute;
  left:50%;
  transform: translate(-50%,100%);
  min-width: 2rem;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 0.15rem;
  background: #111111;
  font-size: 0.12rem;
  font-weight: normal;
  z-index: 9999;
  box-shadow: 0 0 3px 3px rgba($color: #000000, $alpha: 1.0);
  .info {
    font-size: 0.12rem;
    font-weight: normal;
    margin-top: 0.05rem;
  }
}
.top{
  top:-0.25rem;
  transform: translate(-50%,-100%);
  bottom: initial;
}
</style>
