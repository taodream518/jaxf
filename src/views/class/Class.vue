<template>
  <div class="class">
    <div class="top"></div>
    <div class="center"></div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="less" scoped>
body{
  height: 100%;
}
.top, .bottom{
  width: 100%;
  height: 100px;
  background-color: #09c;
  position: fixed;
}
.top{
  top: 0;
}
.center{
  height: 100%;
  background: #f00;
}
.bottom{
  width: 100%;

  bottom: 0;
}
</style>

<script>
export default {
  name: "class"
};
</script>

