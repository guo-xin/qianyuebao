<template>
  <div>
    <div id="container" class="map-wrapper"></div>
  </div>
</template>

<script>
  /* eslint-disable */
  import util from '../../methods/util'

  export default {
    data () {
      let params = util.getRequestParams()
      return {
        curLat: params.cur_lat,
        curLng: params.cur_lng,
        desLat: params.des_lat,
        desLng: params.des_lng
      }
    },
    ready () {
      let _this = this
      var map = new AMap.Map('container',{
        resizeEnable: true,
        zoom: 20
      });
      AMap.plugin('AMap.Driving',function(){
        var drving = new AMap.Driving({
            map: map
        })
        drving.search([_this.curLng, _this.curLat], [_this.desLng, _this.desLat]);
      })
    }
  }
</script>

<style scoped>

  .map-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
