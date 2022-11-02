<template>
  <div class="promotion" :class="{ active: isShowPromotion }"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Promotion',
  props: {
    isShowPromotion: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.isShowPromotion);
  },
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  height: 0;
  background: #999;
  overflow: hidden;
  transition: all 0.3s;
}
.promotion.active {
  height: 704px;
}
</style>
