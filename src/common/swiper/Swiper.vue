<template>
  <div class="swiper">
    <van-swipe :autoplay="times">
      <van-swipe-item v-for="(image, index) in banners" :key="index" @change="onChange(index)">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "swiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  props: {
    times: {
      type: Number,
      default: 3000
    },
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    onChange(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.swiper{
  img{
    width: 100%;
    height: 100%
  }
}
</style>