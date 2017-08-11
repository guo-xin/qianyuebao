<template>
  <div class="content-wrap">
    <textarea placeholder="请输入内容" v-model="inputContent"></textarea>
    <p class="tip">选择回访状态（单选）</p>
    <div class="status">
      <span v-for="(key, value) in tags" @click="setActiveTag(key)" :class="{'active': activeTag === key ? true : false}">{{value}}</span>
    </div>
    <div class="submit" @click="submitRecord"><p>完成</p></div>
  </div>
  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

<script>
  import config from '../../methods/config'
  import util from '../../methods/util'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  // import bridge from '../../methods/bridge'
  import bridge2 from '../../methods/bridge-v2'

  export default {
    components: {
      toast, loading
    },
    data () {
      return {
        loading: false,
        inputContent: '',
        tags: {},
        activeTag: 0,
        userid: util.getRequestParams().userid,
        msg: ''
      }
    },
    ready () {
      this.getVisitTag()
    },
    methods: {
      submitRecord () {
        let _this = this
        if (this.inputContent !== '' && this.activeTag !== 0) {
          this.$http({
            url: config.host + 'sm/mchnt/visit_add',
            method: 'POST',
            emulateJSON: true,
            data: {
              memo: _this.inputContent,
              state: _this.activeTag,
              userid: _this.userid
            }
          })
          .then((res) => {
            let data = res.data
            if (data.respcd === '0000') {
              bridge2.webNotify({
                type: 'post',
                name: 'changerecord'
              }, function () {
                bridge2.close()
              })
            }
          })
        } else {
          _this.msg = '内容和回访状态不能为空'
        }
      },
      getVisitTag () {
        let _this = this
        this.$http({
          url: config.host + 'sm/mchnt/visit_tags',
          method: 'JSONP',
          data: {
            format: 'jsonp'
          }
        })
        .then((res) => {
          let data = res.data
          if (data.respcd === '0000') {
            _this.$set('tags', data.data.tags)
          }
        })
      },
      setActiveTag (key) {
        this.activeTag = key
      }
    }
  }
</script>

<style scoped lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  body {
    background: #F7F7F7;
    margin: 0;
    -webkit-appearance: none;
  }
  .content-wrap {
    margin-top: 30px;
    overflow: hidden;
    background: #ffffff;
    textarea {
      display: block;
      width: 690px;
      max-width: 690px;
      min-height: 280px;
      margin: 30px auto;
      background: #F4F4F4;
      border-radius: 6px;
      outline: none;
      border: none;
      resize: none;
      font-size: $f30;
      padding: 22px 32px;
    }
    .tip {
      color: $g;
      font-size: $f30;
      padding-left: 30px;
    }
    .status {
      padding:30px;
      span {
        display: inline-block;
        width: 120px;
        height: 54px;
        border-radius: 30px;
        border: 0.03rem solid #A7A9AE;
        margin-right: 8px;
        color: $lg;
        font-size: $f28;
        line-height: 54px;
        text-align: center;
        &.active {
          border: 0.03rem solid $o;
          color: $o;
        }
      }
    }
    .submit {
      width: 100%;
      height: 88px;
      line-height: 88px;
      background: $o;
      text-align: center;
      color: #ffffff;
      font-size: $f34;
      margin-top: 30px;
    }
  }
</style>
