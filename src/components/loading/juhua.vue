<template>
  <div class="c-toast" v-show="visible">
    <div class="c-loading">
      <div class="c-loading_leaf c-loading_leaf_0"></div>
      <div class="c-loading_leaf c-loading_leaf_1"></div>
      <div class="c-loading_leaf c-loading_leaf_2"></div>
      <div class="c-loading_leaf c-loading_leaf_3"></div>
      <div class="c-loading_leaf c-loading_leaf_4"></div>
      <div class="c-loading_leaf c-loading_leaf_5"></div>
      <div class="c-loading_leaf c-loading_leaf_6"></div>
      <div class="c-loading_leaf c-loading_leaf_7"></div>
      <div class="c-loading_leaf c-loading_leaf_8"></div>
      <div class="c-loading_leaf c-loading_leaf_9"></div>
      <div class="c-loading_leaf c-loading_leaf_10"></div>
      <div class="c-loading_leaf c-loading_leaf_11"></div>
    </div>
    <p class="c-toast_content">数据加载中</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.c-toast {
    position: fixed;
    z-index: 3;
    width: 240px;
    min-height: 240px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(40, 40, 40, 0.75);
    text-align: center;
    border-radius: 8px; /*px*/
    color: #FFFFFF;
}
 /*loading toast*/
.c-toast_content {
  margin-top:64%;
  font-size:28px; /*px*/
}
.c-loading {
    position: absolute;
    width: 0px;
    z-index: 2000000000;
    left: 50%;
    top: 38%;
}
.c-loading_leaf {
    position: absolute;
    top: -2px;  /*px*/
    opacity: 0.25;

    &:before{
        content:" ";
        position: absolute;
        width: 16px;
        height: 4px;
        background: rgb(209, 209, 213);
        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 2px; /*px*/
        border-radius: 2px; /*px*/
        transform-origin: left 50% 0px;
    }
    &_0{
        animation: opacity-60-25-0-12 1.25s linear infinite;
        &:before{
            transform: rotate(0deg) translate(7.92px, 0px);
        }
    }
    &_1{
        animation: opacity-60-25-1-12 1.25s linear infinite;
        &:before{
            transform: rotate(30deg) translate(7.92px, 0px);
        }
    }
    &_2{
        animation: opacity-60-25-2-12 1.25s linear infinite;
        &:before{
            transform: rotate(60deg) translate(7.92px, 0px);
        }
    }
    &_3{
        animation: opacity-60-25-3-12 1.25s linear infinite;
        &:before{
            transform: rotate(90deg) translate(7.92px, 0px);
        }
    }
    &_4{
        animation: opacity-60-25-4-12 1.25s linear infinite;
        &:before{
            transform: rotate(120deg) translate(7.92px, 0px);
        }
    }
    &_5{
        animation: opacity-60-25-5-12 1.25s linear infinite;
        &:before{
            transform: rotate(150deg) translate(7.92px, 0px);
        }
    }
    &_6{
        animation: opacity-60-25-6-12 1.25s linear infinite;
        &:before{
            transform: rotate(180deg) translate(7.92px, 0px);
        }
    }
    &_7{
        animation: opacity-60-25-7-12 1.25s linear infinite;
        &:before{
            transform: rotate(210deg) translate(7.92px, 0px);
        }
    }
    &_8{
        animation: opacity-60-25-8-12 1.25s linear infinite;
        &:before{
            transform: rotate(240deg) translate(7.92px, 0px);
        }
    }
    &_9{
        animation: opacity-60-25-9-12 1.25s linear infinite;
        &:before{
            transform: rotate(270deg) translate(7.92px, 0px);
        }
    }
    &_10{
        animation: opacity-60-25-10-12 1.25s linear infinite;
        &:before{
            transform: rotate(300deg) translate(7.92px, 0px);
        }
    }
    &_11{
        animation: opacity-60-25-11-12 1.25s linear infinite;
        &:before{
            transform: rotate(330deg) translate(7.92px, 0px);
        }
    }
}
@-webkit-keyframes opacity-60-25-0-12 {
  0% { opacity: 0.25; }
  0.01% { opacity: 0.25; }
  0.02% { opacity: 1; }
  60.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-1-12 {
  0% { opacity: 0.25; }
  8.34333% { opacity: 0.25; }
  8.35333% { opacity: 1; }
  68.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-2-12 {
  0% { opacity: 0.25; }
  16.6767% { opacity: 0.25; }
  16.6867% { opacity: 1; }
  76.6767% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-3-12 {
  0% { opacity: 0.25; }
  25.01% { opacity: 0.25; }
  25.02% { opacity: 1; }
  85.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-4-12 {
  0% { opacity: 0.25; }
  33.3433% { opacity: 0.25; }
  33.3533% { opacity: 1; }
  93.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}@-webkit-keyframes opacity-60-25-5-12 {
  0% { opacity: 0.270958333333333; }
  41.6767% { opacity: 0.25; }
  41.6867% { opacity: 1; }
  1.67667% { opacity: 0.25; }
  100% { opacity: 0.270958333333333; }
}@-webkit-keyframes opacity-60-25-6-12 {
  0% { opacity: 0.375125; }
  50.01% { opacity: 0.25; }
  50.02% { opacity: 1; }
  10.01% { opacity: 0.25; }
  100% { opacity: 0.375125; }
}@-webkit-keyframes opacity-60-25-7-12 {
  0% { opacity: 0.479291666666667; }
  58.3433% { opacity: 0.25; }
  58.3533% { opacity: 1; }
  18.3433% { opacity: 0.25; }
  100% { opacity: 0.479291666666667; }
}@-webkit-keyframes opacity-60-25-8-12 {
  0% { opacity: 0.583458333333333; }
  66.6767% { opacity: 0.25; }
  66.6867% { opacity: 1; }
  26.6767% { opacity: 0.25; }
  100% { opacity: 0.583458333333333; }
}@-webkit-keyframes opacity-60-25-9-12 {
  0% { opacity: 0.687625; }
  75.01% { opacity: 0.25; }
  75.02% { opacity: 1; }
  35.01% { opacity: 0.25; }
  100% { opacity: 0.687625; }
}@-webkit-keyframes opacity-60-25-10-12 {
  0% { opacity: 0.791791666666667; }
  83.3433% { opacity: 0.25; }
  83.3533% { opacity: 1; }
  43.3433% { opacity: 0.25; }
  100% { opacity: 0.791791666666667; }
}@-webkit-keyframes opacity-60-25-11-12 {
  0% { opacity: 0.895958333333333; }
  91.6767% { opacity: 0.25; }
  91.6867% { opacity: 1; }
  51.6767% { opacity: 0.25; }
  100% { opacity: 0.895958333333333; }
}
</style>
