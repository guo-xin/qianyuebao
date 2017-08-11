<template>
  <input type="checkbox" v-model="value" @change="changeEvents" v-bind:true-value="1" v-bind:false-value="0">
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    props: ['value'],
    ready () {
    },
    methods: {
      changeEvents (e) {
        this.$dispatch('on-checkbox-change', this.value)
      }
    },
    events: {
    }
  }
</script>

<style lang="scss" type="scss" rel="stylesheet/scss" scoped>
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    width: 70px;
    height: 30px;
    outline: 0;
    border-radius: 22px;
    box-sizing: border-box;
    /*background: #49D321;*/
    vertical-align: text-top;
    &:before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 70px;
      height: 30px;
      border-radius: 22px;
      transition: all .3s;
      background-color: #E5E5E5;
    }
    &:after {
      content: " ";
      position: absolute;
      top: -3px;
      left: 0;
      height: 36px;
      border-radius: 36px;
      transition: all .3s;
      width: 36px;
      background-color: #fff;
      border: 2px solid #E5E5E5;
      box-shadow: 0 1px 3px rgba(0,0,0,.4);
    }
    &:checked {
      border-color: #04be02;
      background-color: #04be02;
      &:before {
        transform: scale(0);
      }
      &:after {
        border: 2px solid #49D321;
        transform: translateX(34px);
      }
    }
  }
</style>
