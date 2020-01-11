<template>
  <div class="company">
    <van-divider>广东省居安消防职业培训学校</van-divider>
    <van-cell title="手机：13924924119" icon="phone-o" />
    <van-cell title="邮箱：service@jaxfpx.com" icon="free-postage" />
    <van-cell title="网址：http://m.zsjaxf.com/" icon="location-o" />
    <van-cell title="地址：中山市博爱六路大鳌溪商业楼第3栋第2层" icon="location-o" />
  </div>
</template>

<script>
import { Divider, Cell } from "vant";

export default {
  name: 'company',
  data() {
    return {
      companyLinks: [
        "首页",
        "关于",
        "居安 ",
        "教师团队",
        "资质荣誉 ",
        "消防培训课程",
        "消防新闻 ",
        "消防培训动态",
        "联系居安学校",
        "留言板 ",
        "站点地图"
      ]
    };
  },

  components: {
    [Divider.name]: Divider,
    [Cell.name]: Cell
  }
};
</script>

<style lang="less" scoped>
.company {
  border-top: 10px solid #f6f6f6;
}
</style>