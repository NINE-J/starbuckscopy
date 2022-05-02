<template>
  <div class="badges" ref="badges">
    <div class="badge">
      <img src="@/assets/badge1.jpg" alt="badge" />
    </div>
    <div class="badge">
      <img src="@/assets/badge2.jpg" alt="badge" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Badges',
  data() {
    return {};
  },
  mounted() {
    // lodash _.throttle(callback, delay) 부하 방지
    window.addEventListener(
      'scroll',
      _.throttle(() => {
        /** $gsap (global gsap plugin)
         * Vue에서는 data와 method를 이용하는 게 더 좋지만,
         * element를 직접 선택해야 하는 경우 querySelector보다 ref가 낫다.
         * 선언: <tagName ref="key">, 사용: this.$refs.key
         **/
        let badges = this.$refs.badges;

        if (window.scrollY > 500) {
          this.$gsap.to(badges, 0.6, { opacity: 0 });
        } else {
          this.$gsap.to(badges, 0.6, { opacity: 1 });
        }
      }, 300)
    );
  }
};
</script>

<style lang="scss" scoped>
.badges {
  position: fixed;
  z-index: 100;
  top: calc(128px + 1rem);
  right: 1rem;

  .badge {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
}
</style>
