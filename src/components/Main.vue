<template>
  <div class="main">
    <MainVisual></MainVisual>
    <LineNotice></LineNotice>
    <Promotion></Promotion>
    <NewRewards></NewRewards>
    <YouTube></YouTube>
    <MainBean></MainBean>
    <ReserveVisual></ReserveVisual>
    <PickYourFav></PickYourFav>
    <ReserveStore></ReserveStore>
    <FindStore></FindStore>
    <Awards></Awards>
    <Footer></Footer>
    <Badges></Badges>
  </div>
</template>

<script>
import MainVisual from '@/components/MainVisual.vue';
import LineNotice from '@/components/LineNotice.vue';
import Promotion from '@/components/Promotion.vue';
import NewRewards from '@/components/NewRewards.vue';
import YouTube from '@/components/YouTube.vue';
import MainBean from '@/components/MainBean.vue';
import ReserveVisual from '@/components/ReserveVisual.vue';
import PickYourFav from '@/components/PickYourFav.vue';
import ReserveStore from '@/components/ReserveStore.vue';
import FindStore from '@/components/FindStore.vue';
import Awards from '@/components/Awards.vue';
import Footer from '@/components/core/Footer.vue';
import Badges from '@/components/Badges.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {
    MainVisual,
    LineNotice,
    Promotion,
    NewRewards,
    YouTube,
    MainBean,
    ReserveVisual,
    PickYourFav,
    ReserveStore,
    FindStore,
    Awards,
    Footer,
    Badges
  }
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  margin-top: 128px;
}
</style>
