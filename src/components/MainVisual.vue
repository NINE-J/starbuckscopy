<template>
  <div
    class="main-visual"
    :style="`background: url('${require(`@/assets/visual_bg.jpg`)}'); background-size: cover;`"
  >
    <div class="inner">
      <div class="title fade-in">
        <img
          src="@/assets/visual_title.png"
          alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
        />
        <a href="javascript:void(0)" class="btn btn--brown">자세히 보기</a>
      </div>
      <div class="fade-in">
        <img class="cup1 image" src="@/assets/visual_cup1.png" alt="cup1" />
        <img
          class="cup1 text"
          src="@/assets/visual_cup1_text.png"
          alt="cup1_text"
        />
      </div>
      <div class="fade-in">
        <img class="cup2 image" src="@/assets/visual_cup2.png" alt="cup2" />
        <img
          class="cup2 text"
          src="@/assets/visual_cup2_text.png"
          alt="cup2_text"
        />
      </div>
      <div class="fade-in">
        <img class="spoon" src="@/assets/visual_spoon.png" alt="visual_spoon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainVisual',
  mounted() {
    const fadeEls = document.querySelectorAll('.main-visual .fade-in');

    fadeEls.forEach((fadeEl, index) => {
      // gsap.to(요소, 지속시간, 옵션);
      this.$gsap.to(fadeEl, 1, { delay: (index + 1) * 0.7, opacity: 1 });
    });
  }
};
</script>

<style lang="scss">
.main-visual {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 640px;

  .inner {
    .fade-in {
      opacity: 0;
    }

    .title {
      position: absolute;
      top: 120px;
      display: flex;
      flex-flow: column;
      align-items: center;

      .btn.btn--brown {
        margin-top: 16px;
        text-decoration: none;
        color: #592b18;
        border-color: #592b18;
      }

      .btn.btn--brown:hover {
        color: #fff;
        background-color: #592b18;
      }
    }

    .cup1.image {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .cup1.text {
      position: absolute;
      top: 38px;
      right: 260px;
    }

    .cup2.image {
      position: absolute;
      right: 200px;
      bottom: 0;
    }
    .cup2.text {
      position: absolute;
      top: 300px;
      right: 480px;
    }

    .spoon {
      position: absolute;
      bottom: 0;
      right: 480px;
    }
  }
}
</style>
