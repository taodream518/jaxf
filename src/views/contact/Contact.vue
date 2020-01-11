<template>
  <div class="contact">
    <NavBar>
      <div slot="left" @click="$router.go(-1)">
        <van-icon name="arrow-left" />
      </div>
      <div slot="center">aaa</div>
    </NavBar>

    <van-divider>公司地图</van-divider>
    <Bmap />

    <Footer />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import MenuList from "common/menuList/MenuList";

import Footer from "common/footer/Footer";
import Bmap from "common/bmap/Bmap";

import { Divider, Icon, Search} from "vant";

export default {
  name: "contact",
  components: {
    NavBar,
    MenuList,
    Bmap,
    Footer,

    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Search.name]: Search,
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.contact {
  position: relative;
}
</style>