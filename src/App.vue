<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>
<script>

import TabBar from "common/tabbar/TabBar";

export default {
  components:{
    TabBar  
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
