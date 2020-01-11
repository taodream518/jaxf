<template>
  <div class="introduction">
    <van-skeleton title avatar :row="6" :loading="loading">
      <div>
        广东省居安消防职业培训学校，是经广东省人力资源和社会保障厅批准、广东省消防总队审核、广东省民政厅核准登记、国家认定的一所省级消防职业培训学校。学校立足中山，面向全省，辐射全国，常年开展消防安全培训。
        学校面积3030平方米，建筑面积2030平方米，总投资400多万元，拥有一流的教学场地、完善的教学设备及生活设施，可同时满足200多名学员培训。
        学校设校长办公室、招生处、教务处，财务室四大部门。现有教职工20人，均具有大专以上学历。校长罗斌先生曾任职于原广东省新世纪消防职业培训学校，消防特有工种鉴定（广东）站，具有丰富的办学经验及业务水平。招生处主任彭振宙，教务处主任董建辉均为原广东省新世纪消防职业培训学校教师，拥有7年以上的消防培训经验，教学水平独树一帜.
        中山学校拥完善的教学设备，可以满足一切消防培训需要。其中，消防控制室为市公安消防局普及消防自动化培训的示范基地，拥有海湾、北大青鸟、深圳赋安、泛海三江等四个品牌的火灾报警控制器。
        学校始终坚持“职业培训系统化、培训教学正规化、教学实训现代化、管理服务人性化”的办学宗旨，开展社会消防安全培训，提高全民消防安全素质，为社会培养能力强、业务精的消防安全管理人才。
      </div>
    </van-skeleton>
  </div>
</template>

<script>
import { Skeleton } from "vant";

export default {
  name: "introduction",
  components: {
    [Skeleton.name]: Skeleton
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>

<style lang="less" scoped>
</style>