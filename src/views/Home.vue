<template>
  <div class="home">
    <Nav :menuProp="isMenuActive" @onNavMenuActive="onNavMenuActive"></Nav>
    <NavMenu
      :menuProp="isMenuActive"
      @onNavMenuActive="onNavMenuActive"
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
    onNavMenuActive(menu) {
      this.isMenuActive = menu;
    }
  },
  data() {
    return {
      isMenuActive: ''
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
