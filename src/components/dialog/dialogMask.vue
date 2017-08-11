<template>
  <div class="c-dialog-mask" v-show="visible">
    <mask :visible="visible"></mask>
    <dialog :type="type" :visible="visible" :ok-text="okText" :cancel-text="cancelText" transition="zoomInOut"><slot></slot></dialog>
  </div>
</template>

<script>
import mask from '../mask'
import dialog from './index'

export default {
  components: {
    mask, dialog
  },
  props: ['type', 'visible', 'cancelText', 'okText'],
  // props: {
  //   visible: {
  //     type: Boolean,
  //     default: false
  //   },
  //   cancelText: {
  //     type: String,
  //     required: false,
  //     default: '取消'
  //   },
  //   okText: {
  //     type: String,
  //     required: false,
  //     default: '确定'
  //   }
  // },
  methods: {
    close () {
    }
  }
}
</script>

<style>
.c-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /*position: relative;
  width: 100%;
  min-height: 100vh;*/
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ==================== 放大缩小 ==================== */
.zoomIn, .zoomInOut-enter {
  //animation-name: zoomIn;
  animation: zoomIn .3s;
}

.zoomOut, .zoomInOut-leave {
  //animation-name: zoomOut;
  animation: zoomOut .3s;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  to {
    opacity: 0;
  }
}
</style>
