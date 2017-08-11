<style lang="">
/*@import "./style/widget/weui_tips/weui_dialog";*/

.c-dialog {
  margin: 0 auto;
  width: 610px;
  padding: 40px;
  padding-bottom: 30px;
  background-color: #fff;
  text-align: center;
  border-radius: 6px;
  z-index: 101;
  font-size: 34px; /*px*/

  color: #D54837;
}
.c-dialog_bd {
  margin-bottom: 40px;
  padding: 36px 56px;
  border: 2px dashed #D54837;
  border-radius: 6px;
}

.c-dialog_ft {
  display: flex;
}
.c-dialog_ft button {
  /*display: block;*/
  /*width: 100%;*/
  flex: 1;
  height: 76px;
  border-radius: 6px;
  background-color: #D54837;
  color: #fff;
  border: 0;
  outline:none;
  font-size: 30px;
}
</style>

<template>
  <div class="c-dialog" v-show="visible">
    <div>
      <div class="c-dialog_hd">
        <strong class="c-dialog_title">{{title}}</strong>
      </div>
      <div class="c-dialog_bd">
        <slot>请注意，这里可以自定义(支持html)</slot>
      </div>
      <div class="c-dialog_ft">
        <button @click.stop="dispatch($event,  'onOk')">{{okText}}</button>
        <button v-if="type === 'confirm'" @click.stop="dispatch($event,  'onCancel')">{{cancelText}}</button>
        <!-- <a href="javascript:;" class="c-dialog_btn default" v-if="type === 'confirm'" @click="dispatch($event,  'on-' + type + '-cancel')">{{cancelBtn}}</a>
        <a href="javascript:;" class="c-dialog_btn primary" @click="dispatch($event, 'on-' + type + '-confirm')">{{confirmBtn}}</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    // 类型：alert,confirm
    type: {
      type: String,
      required: false,
      default: 'alert'
    },
    // 标题
    title: {
      type: String,
      required: false,
      default: '' // 温馨提示
    },
    cancelText: {
      type: String,
      required: false,
      default: '取消'
    },
    okText: {
      type: String,
      required: false,
      default: '确定'
    }
  },
  methods: {
    // cancel() {
    //     this.show = false;
    // },
    // confirm() {
    //     this.show = false;
    // }，
    dispatch (event, eventStr) {
      this.$dispatch(eventStr)
      // this.show = false;
    }
  }
}
</script>
