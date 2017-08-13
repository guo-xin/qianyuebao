<template>
  <div class="form-control">
    <div class="container">
      <img  v-if="status1" src="../../assets/upload1.png" alt="upload">
      <img v-else="!status1" src="../../assets/shopHeader.png" alt="upload">
      <div class="upload">
        <span>Upload</span>
        <input type="file" class="upload-input" accept="jpg,jpeg,png,gif;capture=camera"
               @change="chooseFile1">
      </div>

      <img  v-if="status2" src="../../assets/upload2.png" alt="upload">
      <img v-else="!status2" src="../../assets/shop_detail.png" alt="upload">

      <div class="upload">
        <span>Upload</span>
        <input type="file" class="upload-input" accept="jpg,jpeg,png,gif;capture=camera"
               @change="chooseFile2">
      </div>
    </div>
    <div class="next_btn" @click="complete">Complete</div>
  </div>
</template>
  <script type="text/ecmascript-6">
  export default {

    data () {
      return {
          status1: false,
          status2: false
      }
    },

    methods: {
      handleUploadSuccess(info) {
        if(info === 1) {
          this.status1 = true;
        }else {
          this.status2 = true;
        }

      },

      chooseFile1(event) {
        const {files} = event.target;
        if (files.length > 0) {
          // let img = files[0];
          this.handleUploadSuccess(1);
        }
      },

      chooseFile2(event) {
        const {files} = event.target;
        if (files.length > 0) {
          // let img = files[0];
          this.handleUploadSuccess(2);
        }
      },

      complete() {
        window.history.back();
      }
    }
  }
</script>

<style scoped lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  .form-control {
    width: 100%;
    overflow: auto;
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
   position: relative;

   span {

   }
   .upload-input {
     position: absolute;
     left: 0;
     top: 0;
     height: 100%;
     width: 100%;
     opacity: 0;
   }
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
