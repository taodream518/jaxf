<template>
  <div class="tabs">
    <!-- 滑动导航 -->
    <van-tabs animated v-model="active" @click="tabClick" :ellipsis="false" :swipe-threshold="3">
      <van-tab v-for="(item, index) in tabTitles" :title="item">
       {{item}}  
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  name: "tabs",
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      active: 0,
      tabTitles: [
        "消防安全演练",
        "消防职业培训",
        "消防安全培训",
        "建构筑物消防员培训"
      ]
    };
  },
  methods: {
    tabClick(a,b){
      console.log(a,b);
    }
  },
};
</script>

<style lang="less" scoped>
</style>