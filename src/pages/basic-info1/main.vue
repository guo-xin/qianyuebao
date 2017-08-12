<template>
  <div class="basic-info">
   <div class="top">
     <div class="wrap">Basic Information</div>

   </div>
    <div class="footer">
      <button>Next</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        item: '22222'
      }
    },
    created () {

    },

    methods: {

    }
  }
</script>

<style lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  body {
    background: #F7F7F7;
    margin: 0;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
  }
  .basic-info {
    margin: 20px auto;

    .top {
      .wrap {
        background: $lw;
        font-size: $f32;
        height: 80px;
        padding: 20px 10px;
        border-radius: 4px;
        color: $lg;
        box-shadow: 0 1px 5px $lg;
      }

      .form-control {
        margin-top: 1px;
        box-shadow: 0 1px 5px $lg;
        .mint-field {
          height: 80px;

          .mint-cell-wrapper {
            height: 100%;
            .mint-cell-title {
              width: 200px;
            }
          }
          .mint-cell-text {
            font-size: $f32;
          }
          .mint-cell-value {
            flex: 1;
            height: 100%;
            text-align: right;

            .mint-field-core {
              font-size: $f32;
              text-align: right;
              height: 100%;
              width: 100%;
            }
          }
          .mint-field-clear {
            display: none;
          }
        }

      }
    }
  }

</style>
