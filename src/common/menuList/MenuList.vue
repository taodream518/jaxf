<template>
  <div class="menu-list">
    <van-cell @click="isShow = !isShow">
      <slot name="icon" size="18px"></slot>
    </van-cell>
    <van-popup v-model="isShow" position="right" :style="{ width: '50%', height:'100%' }">
      <van-divider>Link</van-divider>
      <ul class="menu-links">
        <li v-for="(item, index) in links" :key="index">
          <a href="#">{{item}}</a>
        </li>
      </ul>
      <van-divider></van-divider>
    </van-popup>
  </div>
</template>

<script>
import { Popup, Cell, Divider } from "vant";

export default {
  name: "menu-list",
  components: {
    [Popup.name]: Popup,
    [Divider.name]: Divider,
    [Cell.name]: Cell
  },
  data() {
    return {
      isShow: false,
      links: [
        "首页",
        "关于居安",
        "消防培训课程",
        "教师团队",
        "资质荣誉",
        "消防新闻",
        "消防培训动态",
        "联系居安学校",
        "留言板"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.menu-links {
  font-size: 15px;
  li {
    line-height: 40px;
    a {
      color: #666;
    }
  }
}
</style>