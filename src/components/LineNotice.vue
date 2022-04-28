<template>
  <div class="line-notice">
    <div class="line-notice-left"></div>
    <div class="line-notice-right"></div>
  </div>
</template>

<script>
export default {
  name: 'LineNotice'
};
</script>

<style lang="scss" scoped>
.line-notice {
  width: 100%;
  height: 64px;
  display: flex;

  .line-notice-left {
    width: 50%;
    background: #222;
  }
  .line-notice-right {
    width: 50%;
    background: #fff;
  }
}
</style>
