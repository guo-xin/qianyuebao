<template>
  <div class="content-wrap">
    <div class="search-wrap">
      <input type="text" :value="shopName" v-model="shopName" placeholder="请输入店铺名称" >
      <div class="search-btn" @click="search">搜索</div>
    </div>
    <ul v-if="shopList && shopList.length !== 0" class="list-wrap">
      <li v-for="item in shopList" @click="redirectUrl(item)">
        <div class="shop-info">
          <p class="shop-name">{{item.nickname}}</p>
          <p class="address">{{item.address}}</p>
        </div>
        <div class="time">
          <p>{{item.dist}}</p>
        </div>
      </li>
    </ul>
    <div class="no-data-wrap" v-if="noData">
      <img src="../../assets/no_data.png" alt="">
    </div>
  </div>
  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

<script type="text/ecmascript-6">
  import config from '../../methods/config'
  import util from '../../methods/util'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  import bridge from '../../methods/bridge-v2'

  export default {
    components: {
      toast, loading
    },
    data () {
      return {
        noData: false,
        loading: false,
        shopList: [],
        page: 0,
        shopName: '',
        lng: util.getRequestParams().lng,
        lat: util.getRequestParams().lat
      }
    },
    ready () {
    },
    methods: {
      search () {
        this.loading = true
        this.noData = false
        this.$http({
          url: config.host + 'sm/mchnt/list',
          method: 'JSONP',
          data: {
            format: 'jsonp',
            mode: 'search',
            shopname: this.shopName,
            lng: this.lng,
            lat: this.lat
          }
        }).then((res) => {
          this.$set('shopList', res.data.data.mchnts)
          if (this.shopList.length === 0) {
            this.noData = true
          }

          this.loading = false
        })
//        bridge.request({
//          url: config.host + 'sm/mchnt/list',
//          method: 'JSONP',
//          data: {
//            format: 'jsonp',
//            mode: 'search',
//            shopname: this.shopName,
//            lng: this.lng,
//            lat: this.lat
//          },
//          callback: (res) => {
//            this.$set('shopList', res.data.mchnts)
//            this.loading = false
//          }
//        })
      },
      redirectUrl (item) {
        bridge.openUri({
          uri: config.redirect + 'merchant-detail.html?userid=' + item.userid
        }, function (cb) {
        })
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
  .search-wrap {
    width: 690px;
    height: 70px;
    margin: 20px auto 20px auto;
    position: relative;
    display: flex;
    input {
      padding: 16px 70px;
      width: 550px;
      font-size: $f26;
      outline: none;
      border: none;
    }
    &:before {
      display: block;
      content: '';
      width: 30px;
      height: 30px;
      background: url("../../assets/icon-search.svg") no-repeat center center;
      background-size: 100% 100%;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .search-btn {
      width: 116px;
      height: 70px;
      background: $o;
      color: #ffffff;
      line-height: 70px;
      text-align: center;
      font-size: $f32;
      border-radius: 6px;
      box-shadow: none;
      margin-left: 24px;
    }
  }
  .list-wrap {
    background: #ffffff;
    border-top: 0.03rem solid #e5e5e5;
    border-bottom: 0.03rem solid #E5E5E5;
    padding-left: 30px;
    li {
      list-style: none;
      border-bottom: 0.03rem solid #E5E5E5;
      display: flex;
      padding: 30px 30px 26px 0;
      &:last-child {
        border: none;
      }
      .shop-info {
        flex: 2;
        display: flex;
        flex-direction: column;
        .shop-name {
          font-size: $f30;
          color: $b;
        }
        .address {
          font-size: $f24;
          color: $lg;
          margin-top: 18px;
        }
      }
      .time {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 46px;
        font-size: $f24;
        color: $lg;
        position: relative;
        &:after {
          display: block;
          content: '';
          width: 14px;
          height: 26px;
          position: absolute;
          background: url("../../assets/arrow.svg") no-repeat center center;
          background-size: 100% 100%;
          right: 0;
          top: 50%;
          transform: translate3d(0, -50%, 0);
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
    p {
      color: #A7A9AE;
      font-size: $f26;
      line-height: 1.4;
    }
  }
</style>
