<template>
  <div class="home">
    <!-- logo导航栏 -->
    <van-nav-bar fixed :z-index="999">
      <div slot="left">
        <img
          src="http://m.zsjaxf.com/Content/File_Img/zsjaxf.com/logo10507.png"
          :style="{width:'158px'}"
        />
      </div>
      <div class="right" slot="right">
        <MenuList :links="links">
          <van-icon slot="icon" name="wap-nav" size="18px" color="#666" />
        </MenuList>
      </div>
    </van-nav-bar>

    <form action="/">
      <van-search @search="onSearch" v-model="value" placeholder="请输入搜索关键词" />
    </form>
    <!-- 轮播 -->
    <Swiper :banners="images" />
    <!-- 标签页 -->
    <Tabs />
    <!-- 通知内容 -->
    <van-notice-bar
      text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
      left-icon="bullhorn-o"
      color="#c60"
    />
    <!-- 产品 -->
    <List />
    <!-- Company -->
    <Company />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import MenuList from "common/menuList/MenuList";
import Swiper from "common/swiper/Swiper";
import Footer from "common/footer/Footer";

import List from "components/content/list/List";
import Tabs from "components/content/tabs/Tabs";
import Company from "components/content/company/Company";

import {
  Icon,
  NavBar,
  NoticeBar,
  Search,
  Sticky,
  Popup,
  Divider,
  Cell
} from "vant";

export default {
  name: "home",
  components: {
    MenuList,

    Swiper,
    Tabs,
    List,
    Company,
    Footer,

    [NavBar.name]: NavBar,
    [NoticeBar.name]: NoticeBar,
    [Search.name]: Search,
    [Sticky.name]: Sticky,
    [Divider.name]: Divider,
    [Icon.name]: Icon
  },
  data() {
    return {
      isShow: false,
      value: "",
      images: [
        "http://www.zsjaxf.com/Content/File_Img/zsjaxf.com/ImgScroll/201711281434240332039.jpg?rnd=795",
        "http://www.zsjaxf.com/Content/File_Img/zsjaxf.com/ImgScroll/201711281439297325365.jpg?rnd=795",
        "http://www.zsjaxf.com/Content/File_Img/zsjaxf.com/ImgScroll/201711281519393033525.jpg?rnd=795"
      ],
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
  },
  mounted() {},
  methods: {
    onSearch() {
      console.log("search");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  position: relative;
  padding-top: 46px;
}
</style>
