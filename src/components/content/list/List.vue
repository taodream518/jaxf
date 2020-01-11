<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="我是有底线的喔~" @load="onLoad">
      <van-grid :gutter="8" :column-num="2">
        <van-grid-item v-for="(img, index) in imgs" :key="index">
          <a href="#">
            <van-image :src="img" v-lazy="img" fit="cover" height="180px" />
            <h5
              class="title van-multi-ellipsis--l2"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magnam vero laboriosam tempora quae quia praesentium. Explicabo quidem dolore totam?</h5>
          </a>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
import { List, Grid, GridItem, Image } from "vant";

export default {
  name: "list",
  // prop:{
  //   imgs:{
  //     type: Array,
  //     default(){
  //       return []
  //     }
  //   }
  // },
  components: {
    [List.name]: List,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image
  },
  data() {
    return {
      loading: false,
      finished: false,
      imgs: [
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
        "https://img.yzcdn.cn/vant/cat.jpeg",
      ]
    };
  },
  mounted() {
    // this.onLoad()
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.imgs.push(this.imgs[0]);
          console.log(this.imgs.length);
          
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.imgs.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  border-top: 10px solid #f6f6f6;
  .title {
    font-size: 14px;
    color: #888;
    font-weight: normal;
  }
}
</style>