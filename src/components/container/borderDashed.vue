<template>
  <div class="c-border-ashed-box">
    <div class="border-line"></div>
    <div class="border-line"></div>
    <div class="border-line"></div>
    <div class="border-line"></div>

    <div class="c-border-ashed-body"><slot></slot></div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  /*线条高度*/
  $line_height: 1px;
  /*线条颜色*/
  $border_colore: #952114;

  .c-border-ashed-box {
    position: relative;
    margin: 0 auto;
    border-radius: 8px; /*px*/
    overflow: hidden;
    padding: 2px; /*px*/
    padding-right: 4px; /*px*/

    & > div.border-line {
      position: absolute;
      content: ' ';
      display: block;
      transform: scale(4);
      [data-dpr="1"] &{
        transform: scale(2);
      }
      [data-dpr="3"] &{
        transform: scale(6);
      }

      /*transform: scale(4);*/

      &:nth-child(1) {
        top: 0;
        left: 0;
        height: 0;
        width: 100%;
        border-top: $line_height dashed $border_colore; /*no*/
      }
      &:nth-child(2) {
        top: 0;
        right: 4px; /*px*/
        height: 100%;
        width: 0;
        border-right: $line_height dashed $border_colore; /*no*/
      }
      &:nth-child(3) {
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        border-bottom: $line_height dashed $border_colore;  /*no*/
      }
      &:nth-child(4) {
        bottom: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-left: $line_height dashed $border_colore;  /*no*/
      }
    }

    .c-border-ashed-body {
      /*padding: 24px;*/
      /*height: 100%;*/
      text-align: center;
      background: #AB3324;
      color: #fff;
      border-radius: 8px; /*px*/
    }
  }
</style>
