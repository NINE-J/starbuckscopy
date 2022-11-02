<template>
  <section class="main-bean">
    <div class="inner">
      <img
        src="@/assets/season_product_image.png"
        alt="아이스 커피 블렌드"
        class="product back-to-position to-right delay-0"
      />

      <div class="text-group">
        <img
          src="@/assets/season_product_text1.png"
          alt="상쾌하게 여름을 반겨줄 시즌 원두 아이스 커피 블렌드"
          class="title back-to-position to-left delay-1"
        />
        <img
          src="@/assets/season_product_text2.png"
          alt="아프리카와 라틴 아메리카 커피의 브렌드로 시트러스함과 은은한 캐러멜 향을 동시에 느낄 수 있으며, 차갑게 즐길 때 풍미가 더욱 깊어지는 원두입니다."
          class="description back-to-position to-left delay-2"
        />
        <div class="more back-to-position to-left delay-3">
          <a href="javascript:void(0)" class="btn">자세히 보기</a>
        </div>
      </div>
      <img src="@/assets/floating3.png" alt="Icon" class="floating floating3" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'MainBean',
  mounted() {
    const scene = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: '.main-bean',

        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.5,
      })
      // Declaration of animation and attaching to element
      .setClassToggle('.main-bean', 'show');

    // Add Scene to controller
    this.$scrollmagic.addScene(scene);
  },
};
</script>

<style lang="scss" scoped>
.main-bean {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 400px;
  background: transparent url('../assets/season_product_bg.jpg') no-repeat center center/cover;

  img {
    display: block;
  }

  .inner {
    margin: 0 auto;
    height: 400px;
    .product {
      position: absolute;
      left: 100px;
    }
    .text-group {
      position: absolute;
      top: 110px;
      right: 200px;

      .title {
        margin-bottom: 10px;
      }
      .description {
        margin-bottom: 15px;
      }
      .btn {
        text-decoration: none;
        width: 130px;
        padding: 10px;
        border: 2px solid #333;
        border-radius: 4px;
        color: #333;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        cursor: pointer;
        box-sizing: border-box;
        display: block;
        transition: 0.4s;

        &:hover {
          background: #333;
          color: #fff;
        }
      }
    }

    .floating {
      position: absolute;

      @keyframes floating {
        0% {
          transform: translate(0, 0px);
        }
        50% {
          transform: translate(0, 15px);
        }
        100% {
          transform: translate(0, -0px);
        }
      }

      &.floating3 {
        top: -200px;
        right: 0;

        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
    }
  }
}
</style>
