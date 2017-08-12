<template lang="html">
  <div class="container">
    <!-- <div class="title">
      <img src="../../assets/arrow_ro.png" alt="">
      <p class="title_text">Preview</p>
    </div> -->
    <div class="space">
      * Please double check your information before submission
    </div>

    <ul class="shop_info">
      <li>
        <p class="shopname common">Shop  Name</p>
        <p class="shopname_text commontext"></p>
      </li>
      <li>
        <p class="business_type common">Business Type</p>
        <p class="business_type_text commontext"></p>
      </li>
      <li>
        <p class="adderss1 common">Address Line 1</p>
        <p class="adderss1_text commontext"></p>
      </li>
      <li>
        <p class="adderss2 common">Address Line 2</p>
        <p class="adderss2_text commontext"> </p>
      </li>
    </ul>

    <ul class="shop_photos">
      <li class="common">
        Shop Photos
      </li>
      <li>
        <img src="" alt="">
        <img src="" alt="">
      </li>
    </ul>

    <ul class="onwer_info">
      <li>
        <p class="onwer_name common">Onwer Name</p>
        <p class="onwer_name_text commontext"></p>
      </li>
      <li>
        <p class="onwer_ID common">ID No.</p>
        <p class="onwer_ID_text commontext"></p>
      </li>
      <li>
        <p class="ID_photo common">ID Photos</p>
      </li>
      <li class="Id_photo_text">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
      </li>
    </ul>

    <ul class="account">
      <li>
        <p class="account_holder common">Account Holder</p>
        <p class="account_holder_text commontext"> </p>
      </li>
      <li>
        <p class="account_num common">Account No.</p>
        <p class="account_num_text commontext"></p>
      </li>
    </ul>
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
    margin-left: 220px;
  }
}
p {
  white-space: nowrap;
}
.space {
  width: 100%;
  height: 80px;
  font-size: 26px;
  line-height: 80px;
  text-align: center;
  background: #efefef;
}
ul {
  width: 100%;
  padding: 0 40px;
}
.shop_info {
  padding-top: 20px;
}
.shop_info li{
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p:nth-of-type(2) {
    font-size: 28px;
    text-align: right;
    color: #000;
    margin-right: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.common {
  font-size: 28px;
  color: #999;
  font-weight: 400;
}
.shop_photos {
  margin-top: 30px;

  li:nth-of-type(2) {
    margin-top: 30px;

    img{
      width: 240px;
      height: 120px;
      margin-right: 20px;
    }
  }
}
.onwer_info {
  margin-top: 30px;
  li {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li:nth-of-type(3) {
    justify-content: flex-start;
  }
  li:nth-of-type(4) {
    justify-content: flex-start;
    height: 140px;
    img {
      width: 240px;
      height: 120px;
      margin-right: 20px;
    }
  }
}

.account {
  margin-top: 80px;
  li {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

}
.commontext {
  font-size: 28px;
  color: #000;
}


</style>
