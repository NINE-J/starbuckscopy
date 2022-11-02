<template>
  <div class="youtube">
    <div class="youtube__area">
      <iframe
        id="player"
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="How to: Three Ways to Cold Brew Coffee"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/An6LvWQuj_8?autoplay=true&amp;loop=true&amp;playlist=An6LvWQuj_8&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fflamboyant-lumiere-482a1e.netlify.app&amp;widgetid=1"
      ></iframe>
    </div>
    <div class="youtube__cover"></div>
    <div class="inner">
      <img src="@/assets/floating1.png" alt="Icon" class="floating floating1" />
      <img src="@/assets/floating2.png" alt="Icon" class="floating floating2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'YouTube',
};
</script>

<style lang="scss" scoped>
.youtube {
  position: relative;
  z-index: 10;
  height: 700px;
  background-color: #333;
  overflow: hidden;

  .youtube__area {
    width: 1920px;
    position: absolute;
    left: 50%;
    margin-left: calc(1920px / -2);
    top: 50%;
    margin-top: calc(1920px * 9 / 16 / -2);

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
    }

    #player {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .youtube__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url(../assets/video_cover_pattern.png);
  }

  .inner {
    height: inherit;
    margin: 0 auto;

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

      &.floating1 {
        top: 10%;
        left: 0;

        animation-name: floating;
        animation-duration: 2.8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
      &.floating2 {
        top: 350px;
        left: 150px;

        animation-name: floating;
        animation-duration: 3.2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
    }
  }
}
</style>
