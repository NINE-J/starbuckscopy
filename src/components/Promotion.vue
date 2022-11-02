<template>
  <div class="promotion" :class="{ active: isShowPromotion }">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in images" :key="item.index">
        <div class="inner">
          <img :src="item" alt="" />
          <a href="javascript:void(0)" class="btn">자세히 보기</a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="button_prev">
      <md-icon>arrow_back</md-icon>
    </div>
    <div class="button_next">
      <md-icon>arrow_forward</md-icon>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Promotion',
  props: {
    isShowPromotion: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      images: [
        require('@/assets/promotion_slide1.jpg'),
        require('@/assets/promotion_slide2.jpg'),
        require('@/assets/promotion_slide3.jpg'),
        require('@/assets/promotion_slide4.jpg'),
        require('@/assets/promotion_slide5.jpg'),
      ],
      swiperOption: {
        autoplay: {
          delay: 2200,
        },
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
          },
        },
        navigation: {
          nextEl: '.button_next',
          prevEl: '.button_prev',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  position: relative;
  height: 0;
  background: #f6f5ef;
  overflow: hidden;
  transition: all 0.3s;

  .swiper-container {
    width: calc(819px * 3 - 20px);
    height: calc(100% - 40px);
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);

    .swiper-slide {
      opacity: 0.4;

      &.swiper-slide-active {
        opacity: 1;
      }

      .inner {
        width: 100%;
        position: relative;
      }
    }

    .swiper-pagination {
      position: absolute;
      bottom: 40px;

      /deep/ .swiper-pagination-bullet-custom {
        width: 13px;
        height: 12px;
        background: transparent url('../assets/promotion_slide_pager.png') no-repeat center/100%;

        &.swiper-pagination-bullet-active {
          background: transparent url('../assets/promotion_slide_pager_on.png') no-repeat center/100%;
        }
      }
    }

    a.btn {
      text-decoration: none;
      color: #333;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      &:hover {
        background: #333;
        color: #fff;
      }
    }
  }
  .button_prev,
  .button_next {
    position: absolute;
    top: 40%;
    transform: tarnslateY(-40%);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 2px solid #333;

    i {
      color: #333;
    }

    &:hover {
      background: #333;
      color: #fff;

      i {
        color: #fff;
      }
    }
  }

  .button_prev {
    left: 50%;
    transform: translateX(-50%);
    margin-left: -480px;
  }
  .button_next {
    right: 50%;
    transform: translateX(50%);
    margin-right: -480px;
  }
}
.promotion.active {
  height: 704px;
}
</style>
