 <template>
  <div class="mapbox">
    <baidu-map class="bmap" :center="center" :zoom="zoom" @ready="handler" @click="getClickInfo">
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      />
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      />
      <bm-marker :position="center"></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 16
    };
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map);
      this.center.lng = 113.431866;
      this.center.lat = 22.51397;
      this.zoom = this.zoom;

    },
    getClickInfo(e) {
      // console.log(e.point.lng);
      // console.log(e.point.lat);
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>

<style lang="less" scoped>
.bmap {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 0 1%;
  border: 1px solid #f5f5f5;
}
</style> 




 