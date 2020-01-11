<template>
  <div class="footer">
    <van-divider></van-divider>
    <van-row gutter="20">
      <van-col span="8" align="center" :style="{ padding: '5px'}" v-for="item in footerLinks">
        {{item}}
      </van-col>
    </van-row>
    <van-divider :style="{ color: '#ddd', borderColor: '#1989fa', textAlign: 'center' }">Copyright © 2019 - 2020 广东省居安消防职业培训学校版权所有</van-divider>
  </div>
</template>

<script>
import { Row, Col, Divider } from "vant";

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Divider.name]: Divider
  },
  data() {
    return {
      footerLinks: [
        "首页",
        "关于居安",
        "教师团队",
        "资质荣誉",
        "消防培训课程",
        "消防新闻",
        "消防培训动态",
        "联系居安学校",
        "留言板",
        "站点地图"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.footer{
  background: #5a5a5a;
  font-size: 13px;
  color: #fff;
  border-top: 10px solid #f6f6f6;
  border-bottom: 10px solid #f6f6f6;
}

.footer::after{
  content: '';
  display: block;
  height: 30px;
  width: 100%;
}
</style>