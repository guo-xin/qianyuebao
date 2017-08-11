<template>
  <ul class="list-wrap" v-if="transactionList.length !== 0">
    <li v-for="(index, item) in transactionList" @click="toggleClass(index)" :class="{'active': classItem[index]}">
      <div class="list-info">
        <p class="list-date">{{item.date}}</p>
        <p class="list-number"><span class="margin-right">共计{{item.tx_cnt}}笔 金额{{item.amt | formatCurrency}}元</span><i class="arrow"></i></p>
      </div>
      <div class="list-detail">
        <div v-for="(key, value) in item.detail">
          <div class="detail" v-if="value !== 0">
            <p v-if="key === 'wx_cnt'" class="name"><img src="../../assets/ic_wechat.svg">微信支付</p>
            <p v-if="key === 'zfb_cnt'" class="name"><img src="../../assets/ic_zfb.svg">支付宝</p>
            <p v-if="key === 'jd_cnt'" class="name"><img src="../../assets/ic_jingdong.svg">京东钱包</p>
            <p v-if="key === 'qq_cnt'" class="name"><img src="../../assets/ic_qq.svg">QQ钱包</p>
            <p class="number">{{value}}笔</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div class="no-data-wrap" v-else>
    <img src="../../assets/no_data.png" alt="">
  </div>
  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

<script type="text/ecmascript-6">
  import config from '../../methods/config'
  import util from '../../methods/util'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  // import bridge from '../../methods/bridge'
  export default {
    components: {
      toast, loading
    },
    data () {
      return {
        loading: false,
        date: util.getRequestParams().date,
        transactionList: [],
        classItem: {}
      }
    },
    ready () {
      let data;
      if(util.getRequestParams().userid) {
        data = {
          format: 'jsonp',
          userid: util.getRequestParams().userid,
          date: this.date,
          mode: 'detail'
        }
      }else {
        data = {
          format: 'jsonp',
          usertype: util.getRequestParams().usertype,
          date: this.date,
          mode: 'detail'
        }
      }

      this.$http({
        url: config.host + 'sm/mchnt/trade_list',
        method: 'JSONP',
        data: data
      })
      .then((res) => {
        this.$set('transactionList', res.data.data.trades)
        this.loading = false
      })
    },
    methods: {
      toggleClass (index) {
        if (this.classItem[index] === true) {
          this.$set('classItem[' + index + ']', false)
        } else {
          this.$set('classItem[' + index + ']', true)
        }
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
  .arrow {
    width: 14px;
    height: 26px;
    position: absolute;
    background: url("../../assets/arrow.svg") no-repeat center center;
    background-size: 100% 100%;
    right: 10px;
    top: 10px;
    transform: rotate(90deg) ;
    transition: all 0.15s ease-in-out;
  }
  .list-wrap {
    background: #ffffff;
    border-bottom: 0.03rem solid #E5E5E5;
    border-top: 0.03rem solid #E5E5E5;
    margin-top: 30px;
    li {
      list-style: none;
      border-bottom: 0.03rem solid #E5E5E5;
      padding: 30px 30px 0 30px;
      overflow: hidden;
      .list-info {
        position: relative;
        display: flex;
        padding-bottom: 26px;
        .list-date {
          flex: 1;
          font-size: $f30;
          color: $dg;
        }
        .list-number {
          flex: 2;
          font-size: $f32;
          color: $dg;
          text-align: right;
        }
      }
      &:last-child {
        border: none;
      }
      .margin-right {
        margin-right: 50px;
      }
      .list-detail {
        height: 0;
        max-height: 0;
        transition: all 0.3s ease-in-out;
        .detail {
          display: flex;
          height: 80px;
          border-top:0.03rem solid #E5E5E5;
          line-height: 80px;
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
      &.active {
        .arrow {
          transform: rotate(-90deg);
        }
        .list-detail{
          max-height: 200px;
          height: auto;
        }
      }
    }
  }
  .no-data-wrap {
    overflow: hidden;
    text-align: center;
    margin-top: 200px;
    img {
      width: 190px;
      height: 190px;
      margin-bottom: 20px;
    }
  }
</style>
