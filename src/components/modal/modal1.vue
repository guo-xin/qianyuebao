<template>
  <div class="c-modal1">
    <div class="l-r-lr">
      <h2>{{ title }}</h2>
      <img class="c-modal1_close" src="close.png" @click.stop="dispatch($event,  onClose)">
    </div>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    onClose: {
      type: String,
      required: false,
      default: 'onModal1Close'
    }
  },
  data () {
    return {
      title: '推荐案例'
    }
  },
  methods: {
    dispatch (event, eventStr) {
      this.$dispatch(eventStr)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.c-modal1 {
  padding: 28px;
  background-color: #fff;
  width: 100%;
  /*border-top-left-radius: 6px;  !*px*!*/
  /*border-top-right-radius: 6px; !*px*!*/
  border-radius: 6px; /*px*/
}
.c-modal1_close {
  width: 50px;
  height: 50px;
}
h2 {
  display: inline-block;
  padding: 12px 66px;
  margin: 0;
  transform: translateX(-38px);
  font-size: 32px; /*px*/
  background-color: #FFF467;
  color: #D54837;
  /*height: 60px;*/

  position: relative;
  overflow: hidden;

  &:after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    background: red;
    background-color: #fff;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    transform: translate(90%, -50%);
  }
}
</style>
