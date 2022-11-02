<template>
  <div class="reserve-visual">
    <div class="inner">
      <img src="@/assets/reserve_logo.png" alt="" class="reserve-logo back-to-position to-right delay-0" />
      <div class="text-group">
        <img src="@/assets/reserve_text.png" alt="" class="description back-to-position to-right delay-1" />
        <div class="more back-to-position to-right delay-2">
          <a href="javascript:void(0)" class="btn btn--gold">자세히 보기</a>
        </div>
      </div>
      <img src="@/assets/reserve_image.png" alt="" class="product back-to-position to-left delay-3" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReserveVisual',
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: '.reserve-visual',

        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.5,
      })
      // Declaration of animation and attaching to element
      .setClassToggle('.reserve-visual', 'show');

    // Add Scene to controller
    this.$scrollmagic.addScene(scene);
  },
};
</script>

<style lang="scss" scoped>
.reserve-visual {
  width: 100%;
  height: 400px;
  background: #f0f0f0;
  background: url('../assets/reserve_bg.jpg');

  .inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;

    .reserve-logo {
      position: absolute;
      top: 110px;
      left: 0;
    }

    .text-group {
      position: absolute;
      top: 124px;
      left: 208px;
    }

    .product {
      position: absolute;
      top: 0;
      right: 0;
    }

    .btn.btn--gold {
      color: #d9aa8a;
      border-color: #d9aa8a;

      &:hover {
        color: #fff;
        background-color: #d9aa8a;
      }
    }
  }
}
</style>
