<template>
  <div class="line_notice">
    <div class="bg_left"></div>
    <div class="bg_right"></div>
    <div class="inner">
      <div class="line_notice_left">
        <span class="title">공지사항</span>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="item in rollingNotice" :key="item.index">{{ item }}</swiper-slide>
        </swiper>
        <md-icon
          style="
            margin: 0 24px 0 auto;
            width: 30px;
            min-width: 30px;
            height: 30px;
            font-size: 30px !important;
            color: #fff;
            cursor: pointer;
          "
          >add_circle</md-icon
        >
      </div>
      <div class="line_notice_right">
        <span class="title">스타벅스 프로모션</span>
        <div class="button_toggle_promotion" :class="{ active: isShowPromotion }" @click="togglePromotion">
          <md-icon
            style="
              margin: 0;
              width: 30px;
              min-width: 30px;
              height: 30px;
              font-size: 30px !important;
              color: #333;
              cursor: pointer;
            "
            >expand_more</md-icon
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'LineNotice',
  props: {
    isShowPromotion: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    togglePromotion() {
      this.$emit('togglePromotion');
    },
  },
  data() {
    return {
      rollingNotice: [
        '[당첨자 발표] 뉴이어 전자영수증 이벤트',
        '크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내',
        '[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트',
        '스타벅스커피 코리아 애플리케이션 버전 업데이트 안내',
      ],
      swiperOption: {
        direction: 'vertical',
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 1,
        loop: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.line_notice {
  width: 100%;
  height: 64px;
  display: flex;
  position: relative;

  .bg_left {
    width: 50%;
    background: #222;
  }
  .bg_right {
    width: 50%;
    background: #fff;
  }

  .inner {
    display: flex;
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    .line_notice_left,
    .line_notice_right {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 17px;
    }

    .line_notice_left {
      width: 60%;
      background: #222;
      color: #fff;

      .title {
        flex-shrink: 0;
        font-weight: bold;
        margin-right: 20px;
      }
      .swiper-container {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          align-items: center;
        }
      }
    }
    .line_notice_right {
      width: 40%;
      background: #fff;
      justify-content: end;

      .title {
        font-weight: bold;
        margin-right: 20px;
      }
      .button_toggle_promotion.active {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
