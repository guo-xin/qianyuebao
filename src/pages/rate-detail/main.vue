<template>
  <ul class="list-wrap">
    <li v-for="item in rateList">
      <div>
        <p class="name"><img :src="item.url">{{item.name}}</p>
        <p class="number">{{item.ratio}}</p>
      </div>
    </li>
  </ul>
  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

<script>
  import config from '../../methods/config'
  import util from '../../methods/util'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  export default {
    components: {
      toast, loading
    },
    data () {
      return {
        loading: true,
        rateList: []
      }
    },
    created () {
      let data;
      if(util.getRequestParams().userid) {
        data = {
          format: 'jsonp',
          userid: util.getRequestParams().userid
        }
      }else {
        data = {
          format: 'jsonp',
          usertype: util.getRequestParams().usertype
        }
      }
      this.$http({
        url: config.host + 'sm/mchnt/ratio',
        method: 'JSONP',
        data: data
      })
      .then((res) => {
        this.$set('rateList', res.data.data.ratios)
        this.loading = false
      })
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
  .arrow {
    width: 14px;
    height: 26px;
    position: absolute;
    background: url("../../assets/arrow.svg") no-repeat center center;
    background-size: 100% 100%;
    right: 10px;
    top: 0;
    transform: rotate(-90deg) ;
  }
  .list-wrap {
    background: #ffffff;
    padding: 0 0 0 30px;
    border-bottom: 0.03rem solid #E5E5E5;
    border-top: 0.03rem solid #E5E5E5;
    margin-top: 30px;
    li {
      list-style: none;
      border-bottom: 0.03rem solid #E5E5E5;
      &:last-child {
        border: none;
      }
      >div {
        display: flex;
        height: 80px;
        border-top:0.03rem solid #E5E5E5;
        padding-right: 30px;
        line-height: 80px;
        &:first-child {
          border: none;
        }
        p {
          flex: auto;
        }
        .name {
          color: $b;
          font-size: $f30;
          display: flex;
          align-items: center;
          img {
            width: 46px;
            height: 46px;
            margin-right: 16px;
          }
        }
        .number {
          font-size: $f30;
          color: $b;
          text-align: right;
        }
      }
    }
  }
</style>
