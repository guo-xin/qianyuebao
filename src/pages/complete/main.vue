<template lang="html">
  <div class="container">
    <!-- <div class="title">
      <p class="title_text">Review the submitted</p>
    </div> -->
    <div class="space">

    </div>
    <div class="content">
      <img src="../../assets/icon_checking.png" alt="">
      <p class="text">Your Application is in Review</p>
    </div>

    <div class="next_btn">
      Complete
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
  text-align: center;
  line-height: 80px;
  font-size: 32px;
}
.content {
  width: 100%;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    margin: 50px 0 50px 0;
  }
  .text {
    font-size: 36px;
    font-weight: 700;
    color: #FE9B20;
  }
}
.space {
  width: 100%;
  height: 30px;
  background: #ececec;
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
