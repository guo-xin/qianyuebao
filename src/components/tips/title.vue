<template>
  <div class="c-tips-title"><h3><slot></slot></h3></div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.c-tips-title {
  margin-bottom: 33px;
  margin-top: 22px;
  // text-align: center;
  height: 33px;
  line-height: 33px;
  font-size: 24px;  /*px*/
  color: #8A8C92;
  position: relative;
  h3 {
    margin: 0;
    display: inline-block;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 20px;
    font-size: 24px;  /*px*/
    font-weight: 100;
    color: #8A8C92;
  }
  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    margin: 0 .3125rem;
    border-bottom: 2px solid #E5E5E5; /*px*/
  }
}
</style>
