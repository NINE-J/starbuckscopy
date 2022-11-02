<template>
  <div class="find-store">
    <div class="inner">
      <img src="@/assets/find_store_texture1.png" alt="" class="texture1" />
      <img src="@/assets/find_store_texture2.png" alt="" class="texture2" />
      <img src="@/assets/find_store_picture1.jpg" alt="" class="picture picture1 back-to-position to-right delay-0" />
      <img src="@/assets/find_store_picture2.jpg" alt="" class="picture picture2 back-to-position to-right delay-1" />
      <div class="text-group">
        <img
          src="@/assets/find_store_text1.png"
          alt="스타벅스를 가까이에서 경험해보세요."
          class="title back-to-position to-left delay-0"
        />
        <img
          src="@/assets/find_store_text2.png"
          alt="고객님과 가장 가까이 있는 매장을 찾아보세요!"
          class="description back-to-position to-left delay-1"
        />
        <div class="more back-to-position to-left delay-2">
          <a href="javascript:void(0)" class="btn">매장찾기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindStore',
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: '.find-store',

        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.5,
      })
      // Declaration of animation and attaching to element
      .setClassToggle('.find-store', 'show');

    // Add Scene to controller
    this.$scrollmagic.addScene(scene);
  },
};
</script>

<style lang="scss" scoped>
.find-store {
  width: 100%;
  height: 400px;
  background: url('../assets/find_store_bg.jpg');

  .inner {
    height: 400px;
    width: 1100px;
    margin: 0 auto;
    position: relative;

    .texture1 {
      position: absolute;
      top: 0;
      left: 400px;
    }
    .texture2 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    .picture {
      border-radius: 50%;
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
      position: absolute;
    }
    .picture1 {
      top: -60px;
      left: 0;
    }
    .picture2 {
      top: 150px;
      left: 250px;
    }
    .text-group {
      position: absolute;
      top: 120px;
      left: 550px;
    }
    .text-group .title {
      margin-bottom: 20px;
    }
    .text-group .description {
      margin-bottom: 20px;
    }

    .btn {
      color: #333;

      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
}
</style>
