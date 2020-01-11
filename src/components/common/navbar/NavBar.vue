<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  text-align: center;
  .left,
  .right {
    flex: 0 0 2.6rem;
    align-self: center;
    justify-content: center;
  }
  .center {
    flex: 1;
  }
}
</style>