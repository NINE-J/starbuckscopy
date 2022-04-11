<template>
  <div class="home">
    <Nav
      :navDataProp="navData"
      :isMenuDirty="isMenuDirty"
      @updateNavData="updateNavData"
      @isMenuActive="isMenuActive"
    ></Nav>
    <NavMenu
      :navDataProp="navData"
      @isMenuActive="isMenuActive"
      :isMenuDirty="isMenuDirty"
    ></NavMenu>
    <Main></Main>
  </div>
</template>

<script>
import Nav from '@/components/core/Nav.vue';
import NavMenu from '@/components/core/NavMenu.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    NavMenu,
    Main
  },
  methods: {
    updateNavData(menu) {
      this.navData = menu;
    },
    isMenuActive(state) {
      this.isMenuDirty = state;
    }
  },
  data() {
    return {
      navData: '',
      isMenuDirty: false
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
