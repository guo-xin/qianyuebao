<template>
  <div class="separation"></div>
  <ul class="list-wrap">
    <li>
      <p class="list-type">业务员姓名</p>
      <p class="list-detail">{{shopName}}</p>
    </li>
    <li>
      <p class="list-type">到账类型</p>
      <p class="list-detail">
        <span v-if="shopInfo.settle_type === 2">D+1</span>
        <span v-if="shopInfo.settle_type === 1">T+1</span>
      </p>
    </li>
    <li>
      <p class="list-type">申请时间</p>
      <p class="list-detail">{{shopInfo.uploadtime}}</p>
    </li>
    <li @click="redirectRateDetail">
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
    <div class="separation"></div>
    <div class="charts-box">
      <p class="charts-title">月交易数据</p>
      <div class="charts-date">
        <i class="prev" @click="prevMonth"></i>
        <span>{{y}}年{{m}}月</span>
        <i class="next" @click="nextMonth"></i>
      </div>
      <a class="show-detail" @click="redirectTransaction">查看详情 <i>></i></a>
      <div class="charts-wrap">
        <div id="charts" style="width: 100%;height:100%;">

        </div>
      </div>
    </div>
  </ul>

  <loading :visible="loading"></loading>
  <toast :msg.sync="msg"></toast>
</template>

  <script type="text/ecmascript-6">
  /*eslint-disable*/
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
      return {
        loading: false,
        shopName: '',
        date: new Date(),
        actvs: [],
        shopInfo: {
        },
        msg: ''
      }
    },
    created () {
      this.getData()
      this.chartData()
    },
    computed: {
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
      // 获取基本信息
      getData () {
        this.loading = true
        let _this = this
        let data = {
          format: 'jsonp'
        }
        this.$http({
          url: config.host + 'sm/salesman/detail',
          method: 'JSONP',
          data: data
        }).then((res) => {
          this.loading = false
          if (res.data.respcd === '0000') {
            this.$set('shopInfo', res.data.data || {})
            this.$set('actvs', res.data.data.actvs)

            // 格式化业务员姓名
            this.formatName()
          } else if (res.data.respcd === '2002') {
            bridge.openUri({
              uri: 'hjsh://logout'
            })
          } else {
            _this.msg = res.data.resperr
          }
        }, (res) => {
          this.loading = false
          _this.msg = '请求失败'
        })
      },

      // 格式化业务员姓名
      formatName() {
        let name = this.shopInfo.name || ''
        if(name.indexOf(":") > -1) {
          this.shopName = name.split(":")[1]
        }else {
          this.shopName = name
        }
      },

      // 费率明细
      redirectRateDetail () {
        bridge.openUri({
          uri: config.redirect + 'rate-detail.html?usertype=salesman'
        }, function (cb) {
        })
      },

      // state为8时提示
      registerStatusChange () {
        let _this = this
        bridge.webNotify({
          type: 'register',
          name: 'changestatus'
        }, function () {
          _this.getData()
        })
      },
      // 审核状态详情
      fixData () {
        let state = this.shopInfo.audit_state
        if (state === 8) {
          this.registerStatusChange()
          bridge.openUri({
            uri: config.chengduRedirect + 'saleman_review.html?usertype=salesman&noticeName=changestatus'
          }, function (cb) {
          })
        }
      },

      // 上月
      prevMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth - 1)
        this.chartData()
      },

      // 下月
      nextMonth () {
        let currentMonth = this.date.getMonth()
        this.date = new Date(this.date.getFullYear(), currentMonth + 1)
        this.chartData()
      },

      // 获取曲线数据
      chartData () {
        let _this = this
        this.$http({
          url: config.host + 'sm/mchnt/trade_list',
          method: 'JSONP',
          data: {
            format: 'jsonp',
            usertype: 'salesman',
            date: this.y + '-' + this.m
          }
        }).then((res) => {
          if (res.data.respcd === '0000') {
            _this.initCharts(res)
          } else {
            _this.msg = res.data.resperr
          }
        },(res) => {
          _this.msg = '请求失败'
        })
      },

      // 画曲线图
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

      // 查看详情
      redirectTransaction () {
        bridge.openUri({
          uri: config.redirect + 'transaction-data.html?usertype=salesman&date=' + this.y + '-' + this.m
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
</style>
