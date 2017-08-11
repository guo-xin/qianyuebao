<template>
  <div class="separation"></div>
  <ul class="shop-wrap">
    <li>
      <div class="shop-info">
        <p class="shop-name">{{shopInfo.shopname}}</p>
        <p v-if="shopInfo.type" class="shop-type">{{shopInfo.type}}</p>
      </div>
      <a class="phone" :href="shopMobile"></a>
    </li>
    <li @click="copyAddress">
      <p class="address pd-40">{{shopInfo.address}}</p>
      <div class="copy"></div>
    </li>
  </ul>
  <div class="separation"></div>
  <div class="list-header">
    <div class="header-item" :class="{active: index === 0}" @click="changeTab(0)">基本信息</div>
    <div class="header-item" :class="{active: index === 1}" @click="changeTab(1)">拜访记录</div>
    <div class="scroll-bar" :style="{left: 50 * index + '%'}"></div>
  </div>
  <ul class="list-wrap" v-show="index === 0">
    <div class="charts-box">
      <p class="charts-title">月交易数据</p>
      <div class="charts-date">
        <i class="prev" @click="prevMonth"></i>
        <span>{{y}}年{{m}}月</span>
        <i class="next" @click="nextMonth"></i>
      </div>
      <a class="show-detail" @click="redirectTransaction()">查看详情 <i>></i></a>
      <div class="charts-wrap">
        <div id="charts" style="width: 100%;height:100%;">

        </div>
      </div>
    </div>
    <li>
      <p class="list-type">商户姓名</p>
      <p class="list-detail">{{shopInfo.name}}</p>
    </li>
    <li>
      <p class="list-type">到账类型</p>
      <p class="list-detail"><span v-if="shopInfo.settle_type === 2">D+1</span><span v-if="shopInfo.settle_type === 1">T+1</span></p>
    </li>
    <li>
      <p class="list-type">申请时间</p>
      <p class="list-detail">{{shopInfo.uploadtime}}</p>
    </li>
    <li @click="redirectRateDetail()">
      <p class="list-type">费率明细</p>
      <p class="list-detail">
        <i class="arrow"></i>
      </p>
    </li>
    <li @click="fixData">
      <p class="list-type">审核状态</p>
      <p class="list-detail">
        <span v-if="shopInfo.audit_state === 3 || shopInfo.audit_state === 4 || shopInfo.audit_state === 10" class="status-loading">审核中</span>
        <span v-if="shopInfo.audit_state === 9" class="status-loading">等待复审</span>
        <span v-if="shopInfo.audit_state === 6 || shopInfo.audit_state === 7" class="status-refuse">审核拒绝</span>
        <span v-if="shopInfo.audit_state === 8" class="margin-right status-fail">审核驳回，等待补件</span>
        <span v-if="shopInfo.audit_state === 5">审核通过</span>
        <i v-if="shopInfo.audit_state === 8" class="arrow"></i>
      </p>
    </li>
    <li>
      <p class="list-type">其他会员服务</p>
      <p class="list-detail">
        <span v-for="item in actvs">
          <i v-if="item === 'coupon'" class="ic ic-hb"></i>
          <i v-if="item === 'card'" class="ic ic-jd"></i>
          <i v-if="item === 'sale'" class="ic ic-dc"></i>
        </span>
        <span v-if="actvs && actvs.length === 0">无</span>
      </p>
    </li>
  </ul>

  <ul class="visit-record-wrap" v-show="index === 1">
    <li class="visit-record" v-for="item in visitList" @click="editRecord(item)">
      <p class="date"><i :class="['default-state', {'will-visit': item.state === 1 && item.editable === 1, 'will-follow': item.state === 2 && item.editable === 1}]">{{item.tag}}</i>{{item.ctime | formatTime "yyyy-MM-dd hh:mm:ss"}} <i v-if="item.editable === 1 && (item.state === 1 || item.state === 2)" class="ic-edit"></i></p>
      <p class="visit-content">{{item.memo}}</p>
    </li>
    <div class="no-data-wrap" v-if="noData">
      <img src="../../assets/no_data.png" alt="">
      <p>尚未编写过拜访记录</p>
      <p>敬请关注</p>
    </div>
    <a class="add-record" @click="addRecord()">
      <p>添加记录</p>
    </a>
  </ul>

  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

  <script type="text/ecmascript-6">
  /*eslint-disable spaced-comment */
  import config from '../../methods/config'
  import util from '../../methods/util'
  import bridge from '../../methods/bridge-v2'
  import loading from '../../components/loading/loading.vue'
  import toast from '../../components/tips/toast.vue'
  var echarts = require('echarts')
  export default {
    components: {
      toast, loading
    },
    data () {
      console.log(util.getRequestParams().index)
      return {
        loading: false,
        index: parseInt(util.getRequestParams().index) || 0,
        date: new Date(),
        userid: util.getRequestParams().userid,
        actvs: [],
        shopInfo: {
        },
        page: 0,
        visitList: [],
        noData: false,
        msg: ''
      }
    },
    created () {
      this.getData()
      this.chartData()
      this.getVisitData()
      this.registerStatusChange()
      this.registerRecordChange()
      window.addEventListener('scroll', this.getScrollData, false)
    },
    // ready () {
    //   this.chartData()
    // },
    computed: {
      shopMobile () {
        return 'tel:' + this.shopInfo.mobile
      },
      y () {
        this.date = this.date || new Date()
        return this.date.getFullYear()
      },
      m () {
        this.date = this.date || new Date()
        return this.date.getMonth() + 1 < 10 ? '0' + (this.date.getMonth() + 1) : this.date.getMonth() + 1
      }
    },
    methods: {
      //复制地址
      copyAddress() {
        let _this = this
        bridge.copy({
          content: this.shopInfo.address
        }, function (cb) {
          _this.msg = '已复制店铺地址'
        })
      },

      registerRecordChange () {
        let _this = this
        bridge.webNotify({
          type: 'register',
          name: 'changerecord'
        }, function () {
          _this.getVisitData()
        })
      },
      registerStatusChange () {
        let _this = this
        bridge.webNotify({
          type: 'register',
          name: 'changestatus'
        }, function () {
          _this.getData()
        })
      },
      fixData () {
        let state = this.shopInfo.audit_state
        if (state === 8) {
          this.registerStatusChange()
          bridge.openUri({
            uri: config.chengduRedirect + 'reviewDetails.html?userid=' + this.userid + '&noticeName=changestatus'
          }, function (cb) {
          })
        }
      },
      changeTab (i) {
        this.index = i
        if (i === 0) {
          this.chartData()
        }
      },
      prevMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth - 1)
        this.chartData()
      },
      nextMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth + 1)
        this.chartData()
      },
      daysInMonth () {
        let year = this.y
        let month = this.m
        return new Date(year, month, 0).getDate()
      },
      getData () {
        this.loading = true
        let _this = this
        let data = {
          format: 'jsonp',
          userid: this.userid
        }
        this.$http({
          url: config.host + 'sm/mchnt/info',
          method: 'JSONP',
          data: data
        }).then((res) => {
          _this.setData(res)
        })
//        bridge.request({
//          url: config.host + 'sm/mchnt/info',
//          method: 'JSONP',
//          data: data,
//          callback: this.setData
//        })
      },
      setData (res) {
        if (res.data.respcd === '0000') {
          this.$set('shopInfo', res.data.data.shop_info)
          this.$set('actvs', res.data.data.actvs)
          console.log(res.data.data)
          this.loading = false
        }
      },
      initCharts (res) {
        let datas = res.data.data.detail
        if (datas.length > 0) {
          let myChart = echarts.init(document.getElementById('charts'))
          myChart.setOption({
            grid: {
              top: '30%',
              left: '0',
              right: '20',
              bottom: '15',
              containLabel: true
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                animation: false,
                lineStyle: {
                  color: '#FE9B20',
                  width: 2
                }
              },
              position: function (point, params, dom) {
                // 固定在顶部
                return [point[0], '45%']
              },
              padding: [0, 10],
              backgroundColor: '#FE9B20',
              formatter: function (params) {
                return params[0].value + '笔'
              }
            },
            xAxis: {
              type: 'category',
              data: datas.map(function (item, index) {
                let i = index < 9 ? '0' + (index + 1) : index + 1
                return i
              }),
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#c38836'
                }
              },
              axisTick: {
                show: false,
                alignWithLabel: true
              },
              axisLabel: {
                formatter: function (value, idx) {
                  return value
                },
                interval: 0
              },
              splitLine: { //坐标分隔线
                show: true,
                lineStyle: {
                  color: '#F7DFC1'
                }
              },
              boundaryGap: false
            },
            yAxis: {
              axisLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitNumber: 3,
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            dataZoom: [
              {
                type: 'inside',
                xAxisIndex: [0],
                start: 1,
                end: 50
              }
            ],
            series: [{
              type: 'line',
              data: datas.map(function (item) {
                return item
              }),
              hoverAnimation: false,
              symbolSize: 6,
              itemStyle: {
                normal: {
                  color: '#CEB49C'
                }
              },
              showSymbol: false,
              smooth: true
            }]
          })
        }
      },
      chartData () {
        let _this = this
        this.$http({
          url: config.host + 'sm/mchnt/trade_list',
          method: 'JSONP',
          data: {
            format: 'jsonp',
            userid: this.userid,
            date: this.y + '-' + this.m
          }
        }).then((res) => {
          if (res.data.respcd === '0000') {
            _this.initCharts(res)
          } else {
            _this.msg = res.data.resperr
          }
        })
//        bridge.request({
//          url: config.host + 'sm/mchnt/trade_list',
//          method: 'JSONP',
//          data: {
//            format: 'jsonp',
//            userid: this.userid,
//            date: this.y + '-' + this.m
//          },
//          callback: function (res) {
//            if (res.respcd === '0000') {
//              _this.initCharts(res)
//            } else {
//              _this.msg = res.resperr
//            }
//          }
//        })
      },
      getVisitData () {
        let _this = this
        this.loading = true
        // this.registerRecordChange()
        this.$http({
          url: config.host + 'sm/mchnt/visit_list',
          method: 'JSONP',
          data: {
            format: 'jsonp',
            userid: this.userid,
            page: this.page
          }
        }).then((res) => {
          if (res.data.respcd === '0000') {
            _this.loading = false
            // window.alert(JSON.stringify(res.data.data.vistis))
            if (res.data.data.vistis && res.data.data.vistis.length !== 0) {
              if (_this.page === 0) {
                _this.visitList = res.data.data.vistis
              } else {
                _this.visitList = _this.visitList.concat(res.data.data.vistis)
              }
              _this.noData = false
              _this.page ++
            } else if (res.data.data.vistis && res.data.data.vistis.length === 0 && _this.visitList.length === 0) {
              _this.noData = true
            } else if (_this.index === 1) {
              _this.msg = '没有更多了...'
            }
          } else {
            this.msg = res.data.resperr
          }
        })
//        bridge.request({
//          url: config.host + 'sm/mchnt/visit_list',
//          method: 'JSONP',
//          data: {
//            format: 'jsonp',
//            userid: this.userid,
//            page: this.page
//          },
//          callback: function (res) {
//            if (res.respcd === '0000') {
//              _this.loading = false
//              if (res.data.vistis && res.data.vistis.length !== 0) {
//                if (this.page === 0) {
//                  _this.$set('visitList', res.data.vistis)
//                } else {
//                  _this.$set('visitList', _this.visitList.concat(res.data.vistis))
//                }
//                _this.page ++
////              } if (res.data.vistis && res.data.vistis.length === 0 && _this.visitList.length === 0) {
////                _this.noData = true
//              } else {
//                _this.msg = '没有更多了...'
//              }
//            } else {
//              this.msg = res.resperr
//            }
//          }
//        })
      },
      getScrollData () {
        let _this = this
        if ((document.documentElement.clientHeight + window.document.body.scrollTop) + 100 > window.document.body.scrollHeight && !_this.loading) {
          _this.getVisitData()
        }
      },
      editRecord (item) {
        if ((item.state === 1 || item.state === 2) && item.editable === 1) {
          this.page = 0
          this.registerRecordChange()
          bridge.openUri({
            uri: config.redirect + 'edit-record.html?userid=' + this.userid + '&memo=' + item.memo + '&state=' + item.state + '&id=' + item.id
          }, function (cb) {
          })
        }
      },
      redirectRateDetail () {
        bridge.openUri({
          uri: config.redirect + 'rate-detail.html?userid=' + this.userid
        }, function (cb) {
        })
      },
      redirectTransaction () {
        bridge.openUri({
          uri: config.redirect + 'transaction-data.html?userid=' + this.userid + '&date=' + this.y + '-' + this.m
        }, function (cb) {
        })
      },
      addRecord () {
        this.page = 0
        this.registerRecordChange()
        bridge.openUri({
          uri: config.redirect + 'add-record.html?userid=' + this.userid
        }, function (cb) {
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  .separation {
    height: 20px;
    background: #F7F7F7;
  }
  .charts-box {
    background: #ffffff;
    overflow: hidden;
    margin-left: -30px;
    position: relative;
    .show-detail {
      position: absolute;
      z-index: 999;
      top: 50px;
      right: 50px;
      color: $o;
      font-size: $f24;
      i{
        font-size: 28px;
        position: relative;
        top: 2px;
      }
    }
    .charts-title {
      position: absolute;
      color: #8B572A;
      font-size: 26px;
      top: 55px;
      z-index: 999;
      left: 50px;
    }
    .charts-date {
      position: absolute;
      z-index: 999;
      display: flex;
      top: 50px;
      left: 50%;
      transform: translate(-140px, 0);
      color: #8B572A;
      font-size: $f28;
      text-align: center;
      span {
        position: relative;
        margin: 0px 12px;
      }
      .prev {
        display: inline-block;
        padding: 20px 40px;
        position: relative;
        right: -24px;
        &:before {
          display: block;
          content: '';
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-right: 10px solid $o;
          border-bottom: 10px solid transparent;
          position: absolute;
          top: 8px;
          left: 6px;
        }
      }
      .next {
        display: inline-block;
        padding: 20px 40px;
        position: relative;
        left: -24px;
        &:before {
          display: block;
          content: '';
          width: 0;
          height: 0;
          border-top: 10px solid transparent;
          border-left: 10px solid $o;
          border-bottom: 10px solid transparent;
          position: absolute;
          top: 8px;
          right: 6px;
        }
      }
    }
  }
  .charts-wrap {
    margin: 30px auto 0 auto;
    width: 710px;
    height: 336px;
    background: #FFF3E4;
    border-radius: 16px;
    // #charts {
    //   div, canvas {
    //     width: 710px;
    //     height: 336px;
    //   }
    // }
  }
  .shop-wrap {
    background: #ffffff;
    border-top: 0.03rem solid #E5E5E5;
    border-bottom: 0.03rem solid #E5E5E5;
    padding: 0 0 0 30px;
    li {
      list-style: none;
      border-top: 0.03rem solid #E5E5E5;
      border-bottom: 0.03rem solid #E5E5E5;
      display: flex;
      padding: 30px 40px 26px 0;
      position: relative;
      &:last-child {
        border: none;
      }
      &:first-child {
        border-top: none;
      }
      .shop-info {
        flex: 2;
        display: flex;
        flex-direction: column;
        .shop-name {
          font-size: $f32;
          line-height: 1;
          color: $b;
        }
        .shop-type {
          font-size: $f24;
          line-height: 1;
          color: $dg;
          margin-top: 18px;
        }
      }
      .phone {
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        font-size: $f24;
        max-width: 40px;
        background: url("../../assets/icon_phone.svg") no-repeat center center;
        background-size: 100% 100%;
        color: $lg;
        position: relative;
      }
      .copy {
        width: 40px;
        height: 40px;
        position: absolute;
        background: url("../../assets/copy.svg") no-repeat center center;
        background-size: 100% 100%;
        right: 30px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }
      .address {
        display: block;
        font-size: $f28;
        padding-left: 36px;
        position: relative;
        line-height: 1;
        &:before {
          display: block;
          content: '';
          width: 30px;
          height: 22px;
          background: url("../../assets/icon_geo.svg") no-repeat center center;
          background-size: 100% 100%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate3d(0, -50%, 0);
        }
      }
      .arrow {
        width: 14px;
        height: 26px;
        position: absolute;
        background: url("../../assets/arrow.svg") no-repeat center center;
        background-size: 100% 100%;
        right: 40px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
      }
    }
  }
  .arrow {
    width: 14px;
    height: 26px;
    position: absolute;
    background: url("../../assets/arrow.svg") no-repeat center center;
    background-size: 100% 100%;
    right: 30px;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .list-header {
    background: #ffffff;
    display: flex;
    border-bottom: 0.03rem solid $o;
    border-top: 0.03rem solid #E5E5E5;
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
      width: 50%;
      height: 6px;
      background: $o;
      position: absolute;
      z-index: 999;
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
      position: relative;
      &:last-child {
        border: none;
      }
      .list-type {
        flex: 1;
        font-size: $f30;
        line-height: 1;
        color: $dg;
      }
      .list-detail {
        flex: 2;
        font-size: $f30;
        line-height: 1;
        color: $b;
        text-align: right;
      }
      .margin-right {
        margin-right: 35px;
      }
      .ic {
        display: inline-block;
        width: 68px;
        height: 40px;
      }
      .ic-hb {
        background: url("../../assets/icon_hb.png");
        background-size: 100% 100%;
      }
      .ic-jd {
        background: url("../../assets/icon_jd.png");
        background-size: 100% 100%;
      }
      .ic-dc {
        background: url("../../assets/icon_dc.png");
        background-size: 100% 100%;
      }
      .status-loading {
        color: $o;
      }
      .status-refuse {
        color: #8B572A;
      }
      .status-fail {
        color: #EA001C;
      }
    }
  }
  .visit-record-wrap {
    padding: 28px 30px 120px 60px;
    background: #ffffff;
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
    .visit-record {
      margin-bottom: 30px;
      position: relative;
      i {
        color: #ffffff;
        font-size: $f20;
        display: inline-block;
        width: 90px;
        height: 34px;
        border-radius: 40px;
        line-height: 34px;
        text-align: center;
        position: relative;
        top: -5px;
        margin-right: 10px;
        &.default-state {
          background: #D8D8D8;
          line-height: 34px;
        }
        &.will-visit {
          background: $o;
        }
        &.will-follow {
          background: #FD5359;
        }
      }
      .ic-edit {
        width: 30px;
        height: 26px;
        margin-left: 16px;
        background: url("../../assets/ic_edit.svg") no-repeat center center;
        background-size: 100% 100%;
        position: relative;
        top: 2px;
      }
      .date {
        font-size: $f26;
        color: $dg;
        &:before{
          display: block;
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: absolute;
          background: #A7A9AE;
          top: 8px;
          left: -30px;
        }
      }
      .visit-content {
        margin-top: 17px;
        padding: 20px 25px;
        background: #F4F4F4;
        border-radius: 6px;
        font-size: $f28;
        color: $g;
        line-height: 1.4;
      }
      &:first-child {
        i {
          background: $o;
        }
        .date {
          font-size: $f26;
          line-height: 1;
          color: $o;
          &:before{
            background: $o;
            border-radius: 50%;
          }
          .ic-edit {
            width: 30px;
            height: 26px;
            margin-left: 16px;
            background: url("../../assets/ic_edit.svg") no-repeat center center;
            background-size: 100% 100%;
            position: relative;
            top: 2px;
          }
        }
        .visit-content {
          background: #FFF3E4;
        }
      }
    }
  }
  .add-record {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 750px;
    height: 88px;
    line-height: 88px;
    background: $o;
    color: #ffffff;
    font-size: $f34;
    text-align: center;
  }
  .pd-40 {
    padding-right: 40px;
  }
</style>
