<template>
  <div class="c-loading" v-show="visible">
    <div class="loading-center-absolute">
      <div class="c-loading-item_one"></div>
      <div class="c-loading-item_two"></div>
      <div class="c-loading-item_three"></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: ['visible'],
    data () {
      return {}
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  .c-loading {
    width: 100%;
    height: 100%;
    //height: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .loading-center-absolute {
    position: absolute;
    left: 50%;
    height: 100%;
    width: 2rem;
    margin-left: -1rem;
    display: flex;
    align-items: center;
  }

  [class*="c-loading-item"] {
    height: 20px;
    border-radius: 50% 50% 50% 50%;
    background-color: #374140;
    flex: 1;
    display: inline-block;
    margin: 0 15px;

  }

  .c-loading-item_one {
    /*background-color: red;*/
    background-color: #FFD047;
    animation: object_one 1.5s infinite;
  }

  .c-loading-item_two {
    /*background-color: green;*/
    background-color: #FE9B20;
    animation: object_two 1.5s infinite;
    animation-delay: 0.25s;
  }

  .c-loading-item_three {
    /*background-color: blue;*/
    background-color: #FD6E27;
    animation: object_three 1.5s infinite;
    animation-delay: 0.5s;
  }

  @keyframes object_one {
    75% {
      transform: scale(0);
    }
  }

  @keyframes object_two {
    75% {
      transform: scale(0);
    }
  }

  @keyframes object_three {
    75% {
      transform: scale(0);
    }
  }
</style>
