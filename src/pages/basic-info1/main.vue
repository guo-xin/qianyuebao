<template lang="html">
  <div class="container">

    <div class="Title">
      Basic Information
    </div>

    <ul class="basic_information">
      <li>
        <p class="onwername common">Shop Name</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
      <li>
        <p class="id_num common">Business Type</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
      <li>
        <p class="id_num common">Address Line 1</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
      <li>
        <p class="id_num common">Address Line 2</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
      <li>

      </li>
    </ul>

    <div class="title2">
      <span style="color: #FE9B20;">*</span>Eg. T3A-17, WANGJING SOHO, CHAOYANG, BEIJING
    </div>

    <ul class="bank_account">
      <li>
        <p class="account_holder common">Shop Photos</p>
        <input type="text" class="arrow" placeholder="Please Upload">
      </li>
      <li>
        <p class="id_num common">Shop Contacts (Option)</p>
        <input type="text" name="" value="" placeholder="Please Enter">
      </li>
    </ul>
    <div class="next_btn" @click="next">Next</div>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      window.location.href = 'basic-info2.html';
    }
  }
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
  line-height: 100px;
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
  li {
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:not(:last-child) {
      border-bottom: 2px solid #eee;
    }

    input {
      height: 90%;
      outline: none;
      text-align: right;
      font-size: 28px;
      color: #999;
      font-weight: 400;
    }
    .arrow {
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
