<template>
  <div class="c-mask" :class="{weui_fade_toggle:isShow}" v-show="visible" @click.stop="dispatch($event,  'onClickMask')"></div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    dispatch (event, eventStr) {
      this.$dispatch(eventStr)
    }
  }
}
</script>

<style lang="">
.c-mask {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    z-index: 99;
}

/*.weui_mask_transparent {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}*/

/*.weui_mask_transition{
    display: none;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
    transition:background .3s;
}
.weui_fade_toggle{
    background: rgba(0,0,0,.6);
}*/
</style>
