<template lang="html">
  <div class="container">
    <!-- <div class="title">
      <img src="../../assets/arrow_ro.png" alt="">
      <p class="title_text">Merchant On Board</p>
    </div> -->
    <div class="space">

    </div>
    <ul>
      <li>
        <p class="account">Account</p>
        <input type="tel" name="" value="" placeholder="Enter Applicant's Phone No." class="telnum">
      </li>
      <li class="codebox">
        <input type="text" name="" value="" placeholder="Enter verification Code" class="codetext">
        <p class="getCode"> Get Code</p>
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
      window.location.href = 'basic-info1.html';
    }
  }
}
</script>

<style lang="scss" scoped>
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
ul {
  width: 100%;
  display: flex;
  font-size: 28px;
  background: #fff;
  flex-direction: column;
  align-items: center;
  border: 3px solid #ececec;
  border-right: 0;
  border-left: 0;
  li {
    width: 90%;
    height: 80px;
    background: #fff!important;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
}
.codebox {
  border-bottom: 0;
}
.account {
  margin: 0 20px 0 10px;
}
.telnum {
  width: 70%;
  height: 90%;
  text-align: right;
  font-size: 28px;
  outline: none;
  margin-left: 55px;
  // align-self: flex-end;
}
.codetext {
  width: 70%;
  height: 90%;
  font-size: 28px;
  outline: none;
  text-align: left;
}
.getCode {
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: orange;
  border: 2px solid #FE9B20;
  border-radius: 8px;
}
</style>
