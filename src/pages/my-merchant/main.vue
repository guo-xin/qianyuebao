<template>
  <div class="content-wrap">
    <div class="total-info-wrap">
      <div class="date">
        <i class="prev" @click="prevMonth"></i>
        <span>{{y}}年{{m}}月</span>
        <i class="next" @click="nextMonth"></i>
      </div>
      <div class="total-info">
        <div>
          <p>全部商户</p>
          <p class="num">{{mchntSum}}</p>
        </div>
        <div style="padding:0 50px;min-width:30%;">
          <p>交易总金额</p>
          <p class="num">{{monthAtm | formatCurrency}}</p>
        </div>
        <div>
          <p>交易笔数</p>
          <p class="num">{{monthNum}}</p>
        </div>
      </div>
    </div>
    <div class="list-header">
      <div class="header-item" :class="{active: index === 0}" @click="changeTab(0, 'normal')">全部</div>
      <div class="header-item" :class="{active: index === 1}" @click="changeTab(1, 'near')">附近</div>
      <div class="header-item" :class="{active: index === 2}" @click="changeTab(2, 'audit')">审核</div>
      <div class="scroll-bar" :style="{left: 33.3 * index + '%'}"></div>
    </div>
    <ul class="list-wrap">
      <li v-for="item in list" @click="redirect(item.userid)">
        <div class="shop-info">
          <p class="shop-name">
            <span class="text">{{item.shopname}}</span>
            <i v-if="item.audit_state === 3 || item.audit_state === 4 || item.audit_state === 10" class="status status-loading">审核中</i>
            <i v-if="item.audit_state === 9" class="status status-loading">等待复审</i>
            <i v-if="item.audit_state === 6 || item.audit_state === 7" class="status status-refuse">审核拒绝</i>
            <i v-if="item.audit_state === 8" class="status status-fail">审核驳回</i>
          </p>
          <p v-if="item.address" class="address">{{item.address}}</p>
        </div>
        <div class="time">
          <p v-if="item.ctime">{{item.ctime}}</p>
          <p v-if="item.dist">{{item.dist}}</p>
        </div>
      </li>
    </ul>
    <infinite-loading :on-infinite="onInfinite">
      <span slot="no-more">
      </span>
      <span slot="no-results">
      </span>
    </infinite-loading>
  </div>
  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
  <div class="mask" v-show="mask">
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import config from '../../methods/config'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  import bridge from '../../methods/bridge-v2'
  export default {
    components: {
      toast, loading, InfiniteLoading
    },
    data () {
      return {
        loading: true,
        status: false,
        index: 0,
        date: new Date(),
        mchntSum: 0,
        monthAtm: 0,
        monthNum: 0,
        mode: 'normal',
        page: 0,
        list: [],
        msg: '',
        lng: '',
        lat: '',
        mask: true
      }
    },
    created () {
      this.getSummary()
      this.get_Location()
      this.registerRegSuccess()
      this.registerStatusChange()
    },
    computed: {
      y () {
        return this.date.getFullYear()
      },
      m () {
        return this.date.getMonth() + 1 < 10 ? '0' + (this.date.getMonth() + 1) : this.date.getMonth() + 1
      }
    },
    methods: {
      registerStatusChange () {
        let _this = this
        bridge.webNotify({
          type: 'register',
          name: 'changestatus'
        }, function () {
          _this.page = 0
          _this.getList()
        })
      },
      onInfinite () {
        let data = {
          format: 'jsonp',
          page: this.page,
          mode: this.mode
        }
        if (this.mode === 'near') {
          data = Object.assign({}, data, {
            lng: this.lng,
            lat: this.lat
          })
        }
        this.$http({
          url: config.host + 'sm/mchnt/list',
          method: 'JSONP',
          data: data
        }).then((res) => {
          let data = res.data
          if (data.respcd === '0000') {
            if (data.data.mchnts.length !== 0) {
              this.list = this.list.concat(data.data.mchnts)
              this.$broadcast('$InfiniteLoading:loaded')
              this.page ++
            } else {
              this.$broadcast('$InfiniteLoading:complete')
            }
          }
        })
      },
      registerRegSuccess () {
        let _this = this
        bridge.webNotify({
          type: 'register',
          name: 'registeDidSuccess'
        }, function () {
          _this.page = 0
          _this.getSummary()
          _this.getList()
          _this.registerRegSuccess()
        })
      },
      changeTab (i, j) {
        console.log(i, j)
        this.mode = j
        this.list = []
        this.index = i
        this.page = 0
        this.$broadcast('$InfiniteLoading:reset')
      },
      prevMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth - 1)
        this.getSummary()
      },
      nextMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth + 1)
        this.getSummary()
      },
      getSummary () {
        this.$http({
          url: config.host + 'sm/salesman/summary',
          method: 'JSONP',
          data: {
            date: this.y + '-' + this.m,
            format: 'jsonp'
          }
        }).then((res) => {
          let data = res.data
          if (data.respcd === '0000') {
            this.mchntSum = data.data.mchnt_sum
            this.monthAtm = data.data.month_amt
            this.monthNum = data.data.month_num
          } else if (data.respcd === '2002') {
            bridge.openUri({
              uri: 'hjsh://logout'
            })
          } else {
            this.msg = data.resperr
          }
        })
      },
      getNearList () {
        this.page = 0
        this.loading = true
        let data = {
          format: 'jsonp',
          page: this.page,
          mode: this.mode,
          lng: this.lng,
          lat: this.lat
        }
        this.$http({
          url: config.host + 'sm/mchnt/list',
          method: 'JSONP',
          data: data
        }).then((res) => {
          this.setData(res.data)
        })
      },
      getList () {
        this.loading = true
        let data = {
          format: 'jsonp',
          page: this.page,
          mode: this.mode
        }
        if (this.mode === 'near') {
          data = Object.assign({}, data, {
            lng: this.lng,
            lat: this.lat
          })
        }
        this.$http({
          url: config.host + 'sm/mchnt/list',
          method: 'JSONP',
          data: data
        }).then((res) => {
          this.setData(res.data)
        })
      },
      setData (res) {
        if (res.respcd === '0000') {
          this.loading = false
          if (res.data.mchnts && res.data.mchnts.length !== 0) {
            if (this.page === 0) {
              this.$set('list', res.data.mchnts)
            } else {
              this.$set('list', this.list.concat(res.data.mchnts))
            }
            this.page ++
          } else {
            this.msg = '没有更多了...'
          }
        } else {
          this.msg = res.resperr
        }
      },
      getScrollData () {
        let _this = this
        if ((document.documentElement.clientHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getList()
        }
      },
      redirect (userid) {
        let _this = this
        if(!this.status) {
          this.status = true;
          setTimeout(_this.status = false, 400);

          this.registerStatusChange()
          bridge.openUri({
            uri: config.redirect + 'merchant-detail.html?userid=' + userid
          }, function (res) {

          })
        }
      },
      get_Location () {
        let _this = this
        this.loading = true
        bridge.getLocation({
          type: 'WGS84'
        }, function (cb) {
          _this.lat = cb.latitude
          _this.lng = cb.longitude
          _this.setMenus()
          _this.loading = false
          _this.mask = false
        })
      },
      setMenus () {
        let _this = this
        bridge.setNavMenu({
          buttons: [
            {
              type: 'uri',
              uri: config.redirect + 'search-shop.html?lat=' + _this.lat + '&lng=' + _this.lng,
              icon: '',
              title: '查找店铺'
            }
          ]
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
    width: 100%;
    height: 100%;
  }
  .content-wrap {
    overflow: hidden;
  }
  .status {
    display: inline-block;
    flex: 0;
    height: 34px;
    text-align: center;
    line-height: 34px;
    border-radius: 6px;
    font-size: 20px;
    margin-left: 16px;
    margin-top: 2px;
  }
  .status-loading {
    border: 0.03rem solid $o;
    color: $o;
    min-width: 114px;
  }
  .status-refuse {
    border: 0.03rem solid #8B572A;
    color: #8B572A;
    min-width: 114px;
  }
  .status-fail {
    border: 0.03rem solid #EA001C;
    color: #EA001C;
    min-width: 114px;
  }

  .total-info-wrap {
    margin: 20px auto;
    background: #FFFFFF;
    width: 690px;
    border-radius: 12px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.15);
    padding: 26px;
    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $g;
      font-size: $f28;
      text-align: center;
      span {
        margin: 0px 25px;
      }
      .prev {
        flex: 1;
        display: inline-block;
        padding: 20px;
        position: relative;
        &:before {
          display: block;
          content: '';
          width: 0;
          height:0 ;
          border-top: 10px solid transparent;
          border-right: 10px solid $o;
          border-bottom: 10px solid transparent;
          position: absolute;
          top: 10px;
          right: 15px;
        }
      }
      .next {
        flex: 1;
        display: inline-block;
        padding: 20px;
        position: relative;
        &:before {
          display: block;
          content: '';
          width: 0;
          height:0 ;
          border-top: 10px solid transparent;
          border-left: 10px solid $o;
          border-bottom: 10px solid transparent;
          position: absolute;
          top: 10px;
          left: 15px;
        }
      }
    }
    .total-info {
      margin-top: 39px;
      text-align: center;
      > div {
        display: inline-block;
        color: $g;
        font-size: $f28;
        .num {
          color: $o;
          font-size: $f40;
          margin-top: 30px;
        }
      }
    }
  }
  .list-header {
    margin-top: 20px;
    background: #ffffff;
    display: flex;
    border-top: 0.03rem solid #E5E5E5;
    border-bottom: 0.03rem solid $o;
    height: 85px;
    position: relative;
    .header-item {
      flex: 1;
      line-height: 85px;
      font-size: $f30;
      color: $g;
      text-align: center;
      &.active {
        color: $o;
      }
    }
    .scroll-bar {
      width: 33.33%;
      height: 6px;
      background: $o;
      position: absolute;
      left: 0;
      bottom: -0.03rem;
      transition: all 0.3s ease-in-out;
    }
  }
  .list-wrap {
    background: #ffffff;
    padding: 0 0 0 30px;
    border-bottom: 0.03rem solid #E5E5E5;
    li {
      list-style: none;
      border-bottom: 0.03rem solid #E5E5E5;
      display: flex;
      padding: 30px 30px 26px 0;
      &:last-child {
        border: none;
      }
      .shop-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        .shop-name {
          font-size: $f30;
          color: $b;
          display: flex;
          align-items: flex-start;
          .text {
            word-break: break-all;
            white-space: pre-wrap
          }
        }
        .address {
          font-size: $f24;
          color: $lg;
          margin-top: 18px;
          padding-right: 40px;
        }
      }
      .time {
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
  .mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 100;
  }
</style>
