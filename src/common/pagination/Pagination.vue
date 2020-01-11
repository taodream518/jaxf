<template>
  <div class="pagination">
    <van-pagination
      v-model="currentPage"
      :total-items="total"
      :show-page-size="pageSize"
      force-ellipses
    />
  </div>
</template>

<script>
import { Pagination } from "vant";

export default {
  name: "pagination",
  components: {
    [Pagination.name]: Pagination
  },
  props: {
    pageSize: {
      type: Number,
      default: 3
    },
    total: {
      type: Number,
      default: 125
    }
  },
  data() {
    return {
      currentPage: 1
    };
  }
};
</script>

<style lang="less">
.pagination {
  border-top: 10px solid #f6f6f6;
  margin: 0 5px;
}
.van-pagination__item--active {
  background-color: #ededed;
}
.van-pagination__item {
  color: #666;
}
</style>