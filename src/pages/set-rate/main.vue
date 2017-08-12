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
        <p class="next">></p>
      </li>
      <li>
        <img src="../../assets/icon_alipay.png" alt="">
        <p class="type">Alipay</p>
        <p class="rate">2%(Defaut)</p>
        <p class="next">></p>
      </li>
      <li>
        <img src="../../assets/icon_JD.png" alt="">
        <p class="type">JD Wallet</p>
        <p class="rate">2%(Defaut)</p>
        <p class="next">></p>
      </li>
      <li>
        <img src="../../assets/icon_QQ2.png" alt="">
        <p class="type">QQ Wallet</p>
        <p class="rate">2%(Defaut)</p>
        <p class="next">></p>
      </li>
    </ul>
    <div class="next_btn">
      Next
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  div, p, a, span, body, dl, dt, dd, header, footer, img, section, time, h1,h2, em, article, h3, h4, ul, li, label, ol, h5, i {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,html {
    width: 100%;
    height: 100%;
  }
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
          width: 50px;
          height: 50px;
          margin:0  30px 0 35px;
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
  .next_btn {
    width: 100%;
    height: 80px;
    background: #FE9B20;
    text-align: center;
    color: #fff;
    font-size: 30px;
    line-height: 80px;
    position: fixed;
    bottom: 0;
  }

</style>
