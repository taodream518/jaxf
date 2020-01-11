<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="fire-o" to="/class">消防培训课</van-tabbar-item>
      <van-tabbar-item icon="description" to="/news">消防新闻</van-tabbar-item>
      <van-tabbar-item icon="phone-o" to="contact">联系我们</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/about">关于居安</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data(){
    return {
      active: 0
    }
  }
};
</script>

<style lang="less" scoped>
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  bottom: 0;
}
</style>