<template>
  <div class="pick-your-fav">
    <div class="inner">
      <div class="text-group">
        <img
          src="@/assets/favorite_text1.png"
          alt="PICK YOUR FAVORITE"
          class="title back-to-position to-right delay-0"
        />
        <img
          src="@/assets/favorite_text2.png"
          alt="다양한 메뉴를 스타벅스에서 즐겨보세요."
          class="description back-to-position to-right delay-1"
        />
        <div class="more back-to-position to-right delay-2">
          <a href="javascript:void(0)" class="btn btn--white">자세히 보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickYourFav',
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: '.pick-your-fav',

        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.5,
      })
      // Declaration of animation and attaching to element
      .setClassToggle('.pick-your-fav', 'show');

    // Add Scene to controller
    this.$scrollmagic.addScene(scene);
  },
};
</script>

<style lang="scss" scoped>
.pick-your-fav {
  width: 100%;
  height: 800px;
  background-image: url('../assets/favorite_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  .inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    padding: 110px 0;

    .text-group {
      width: 362px;
      margin-left: 100px;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;

      .title {
        margin-bottom: 40px;
      }

      .description {
        margin-bottom: 40px;
      }

      .btn.btn--white {
        color: #fff;
        border-color: #fff;

        &:hover {
          background: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
