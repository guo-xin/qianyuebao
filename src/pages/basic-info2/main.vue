<template lang="html">
  <div class="container">
    <!--<div class="title">
      <img src="../../assets/arrow_ro.png" alt="">
      <p class="title_text">Merchant Information</p>
    </div>-->
    <div class="Title">
      Basic Information
    </div>

    <ul class="basic_information">
      <li>
        <p class="onwername common">Onwer  Name</p>
        <input type="text" name="" value="" placeholder="Same As Accont Holder Name">
      </li>
      <li>
        <p class="id_num common">ID No.</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
      <li>
        <p class="adderss1 common">Upload ID Photo</p>
        <input type="text" name="" value="" placeholder="Please Upload >">
      </li>
    </ul>

    <div class="title2">
      Bank Account
    </div>

    <ul class="bank_account">
      <li>
        <p class="account_holder common">Account Holder</p>
        <input type="text" name="" value="" placeholder="Same As Onwer Name">
      </li>
      <li>
        <p class="id_num common">Bank Account</p>
        <input type="text" name="" value="" placeholder="Please Enter">
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

<style lang="scss" type="scss" rel="stylesheet/scss">
  @import "../../styles/common";

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
.Title {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: left;
  background: #efefef;
  font-size: 28px;
  color: #999;
  font-weight: 400;
  padding-left: 40px;
}
.title2 {
  width: 100%;
  height: 200px;;
  line-height: 300px;
  text-align: left;
  background: #efefef;
  font-size: 28px;
  color: #999;
  font-weight: 400;
  padding-left: 40px;
}
ul {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  li:last-of-type {
    border-bottom: 0;
  }
  li {
    width: 90%;
    height: 80px;
    border-bottom: 4px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      height: 90%;
      outline: none;
      text-align: right;
      font-size: 28px;
      color: #999;
      font-weight: 400;
    }
  }
}
.common {
  font-size: 28px;
  text-align: left;
  color: #000;
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
