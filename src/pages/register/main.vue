<template>
  <div class="content-wrap">
    <div class="total-info-wrap">
      <div class="head">
        <p>Demo Account (Product Team)</p>
      </div>
      <div class="total-info">
        <div class="left">
          <span>New Today</span>
          <span class="num"> 0 </span>
        </div>
        <div class="center">|</div>
        <div class="right">
          <span>New The Month</span>
          <span class="num"> 37 </span>
        </div>
      </div>
    </div>
    <ul class="list-wrap">
      <li v-for="item in items" @click="redirect">
        <div class="shop-info">
          <p class="shop-name">
            <span class="text">{{ item.name }}</span>
          </p>
          <p class="address">{{ item.address }}</p>
        </div>
        <div class="time">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    created () {
      this.items = [
        {'name': 'SME',
        'address': 'Upload Shop and Product Photos'},
        {'name': 'PERSONAL',
          'address': 'Upload Shop Photos'},
        {'name': 'COMPANY',
          'address': 'Upload Product Photos'}
      ]
    },

    methods: {
      redirect() {
        window.location.href = 'my-info.html';
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

  .head {
    color: $g;
    font-size: $f28;
    text-align: center;
  }
  .total-info-wrap {
    margin: 20px auto;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.15);
    padding: 26px;
    .total-info {
      margin-top: 39px;
      text-align: center;
      display: flex;

      .left, .right {
        flex: 1;
      }
      .center {
        color: $lg;
        font-size: $f40;
      }
      > div {
        color: $g;
        font-size: $f32;
        .num {
          color: $o;
          font-size: $f40;
          padding-left: 10px;
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

</style>
