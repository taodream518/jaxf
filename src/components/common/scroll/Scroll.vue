<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: 'scroll',
  props:{
    probeType:{
      type: Number,
      default: 1
    }
  },
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.bScroll();
  },
  methods: {
    bScroll(){
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        scrollY: true,
        click: true
      });
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper{
  overflow: hidden;
}
</style>