<template>
  <div class="form-control">
    <div class="space"></div>
    <div class="container">
      <img src="../../assets/shopHeader.png" alt="">
      <div class="upload">Upload</div>
      <img src="../../assets/shop_detail.png" alt="">
      <div class="upload">Upload</div>
    </div>
    <div class="complete_btn">Complete</div>
  </div>
</template>
  <script type="text/ecmascript-6">
  export default {

    data () {
      return {

      }
    },
    created () {

    },

    methods: {

    }
  }
</script>

<style scoped lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  .form-control {
    width: 100%;
    position: relative;
  }
  .space {
    width: 100%;
    height: 140px;
    background: #efefef;
  }
  img {
    width: 100%;
    height: 460px;
  }
  .container {
    width: 100%;
    padding: 0 40px;
    margin: 100px 0;
    div:first-of-type {
      margin-bottom: 100px;
    }
  }
 .upload {
   width: 100%;
   height: 80px;
   border: 2px solid #FE9B20;
   font-size: 32px;
   color: #FE9B20;
   line-height: 80px;
   text-align: center;
   border-radius: 6px;
   margin: 20px 0;
 }
 .complete_btn {
   width: 100%;
   height: 80px;
   background: #FE9B20;
   text-align: center;
   color: #fff;
   font-size: 30px;
   line-height: 80px;
   position: fixed;
   bottom: 0;
 }
</style>
