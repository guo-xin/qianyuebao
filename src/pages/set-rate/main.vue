<template>
  <div class="Rate_container">
    <!-- <div class="title">
      <img src="../../assets/arrow_ro.png" alt="">
      <p class="title_text">Setup Discount Rate</p>
    </div> -->
    <div class="space">

    </div>
    <ul>
      <li>
        <img src="../../assets/icon_wechat.png" alt="">
        <p class="type">Wechat</p>
        <p class="rate">2%(Defaut)</p>
      </li>
      <li>
        <img src="../../assets/icon_alipay.png" alt="">
        <p class="type">Alipay</p>
        <p class="rate">2%(Defaut)</p>
      </li>
      <li>
        <img src="../../assets/icon_JD.png" alt="">
        <p class="type">JD Wallet</p>
        <p class="rate">2%(Defaut)</p>
      </li>
      <li>
        <img src="../../assets/icon_QQ2.png" alt="">
        <p class="type">QQ Wallet</p>
        <p class="rate">2%(Defaut)</p>
      </li>
    </ul>
    <div class="next_btn" @click="next">
      Next
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      window.location.href = 'send-code.html';
    }
  }
}
</script>

<style scoped lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";
  ul,li {
    list-style: none;
  }
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 32px;
    display: flex;
    align-items: center;

    img {
    transform:rotate(180deg);
    width: 50px;
    height: 50px;
    margin-left: 30px;
    }
    .title_text {
      margin-left: 140px;
    }
  }
  .space {
    width: 100%;
    height: 40px;
    background: #efefef;
  }
  .Rate_container {
    width: 100%;
    height: 100%;
    position: relative;
    ul {
      width: 100%;
      height: 100%;
      border: 4px solid #eee;
      border-left: 0;
      border-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      li:last-of-type {
        border-bottom: 0;
      }
      li {
        width: 90%;
        height: 100px;
        font-size: 26px;
        font-weight: 800;
        border-bottom: 3px solid #eee;
        display: flex;
        align-items: center;
        position: relative;

        img {
          width: 60px;
          height: 60px;
          margin:0  20px;
        }
        .rate {
          position: absolute;
          right: 25px;
          top: 40%;
        }
        .next {
          position: absolute;
          right: 0px;
          top:40%;
          color: #ccc;
        }
      }
    }
  }
</style>
