<template>
  <div class="awards">
    <div class="inner">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in images" :key="item.index">
          <img :src="item" alt="" />
          {{ item }}
        </swiper-slide>
      </swiper>
      <div class="button_prev">
        <md-icon>arrow_back</md-icon>
      </div>
      <div class="button_next">
        <md-icon>arrow_forward</md-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Awards',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      images: [
        require('@/assets/awards_slide1.jpg'),
        require('@/assets/awards_slide2.jpg'),
        require('@/assets/awards_slide3.jpg'),
        require('@/assets/awards_slide4.jpg'),
        require('@/assets/awards_slide5.jpg'),
        require('@/assets/awards_slide6.jpg'),
        require('@/assets/awards_slide7.jpg'),
        require('@/assets/awards_slide8.jpg'),
        require('@/assets/awards_slide9.jpg'),
        require('@/assets/awards_slide10.jpg'),
      ],
      swiperOption: {
        autoplay: {
          delay: 2200,
        },
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
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
.awards {
  width: 100%;
  height: 120px;
  background-color: #272727;
}

.awards .inner {
  width: 1100px;
  padding: 40px 0;
  margin: 0 auto;
}
.awards .swiper-container {
  width: 100%;
  height: 40px;
}
.awards .button_prev,
.awards .button_next {
  width: 46px;
  height: 46px;
  outline: none;
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
.awards .button_prev {
  left: -100px;
}
.awards .button_next {
  right: -100px;
}
.awards .button_prev,
.awards .button_next {
  & i {
    color: #fff;
  }
}
.awards .button_prev:hover,
.awards .button_next:hover {
  background-color: #fff;
  color: #333;

  & i {
    color: #333;
  }
}
</style>
