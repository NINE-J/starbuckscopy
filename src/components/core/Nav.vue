<template>
  <div class="nav">
    <div class="inner">
      <a href="/" class="logo">
        <img src="@/assets/starbucks_logo.png" alt="STARBUCKS" />
      </a>
      <div class="menu__wrapper">
        <div class="menu__user">
          <span class="item">Sign In</span>
          <span class="item">My Starbucks</span>
          <span class="item">Customer Service & Ideas</span>
          <span class="item">Find a Store</span>
          <div
            class="input-search__wrapper"
            :class="{
              active: isSearchActive
            }"
          >
            <input
              class="input-search"
              v-model="searchText"
              :style="{
                width: isSearchActive ? '12rem' : '0'
              }"
              type="text"
            />
            <div class="button-search" @click="onSearch">
              <md-icon :style="{ color: isSearchActive ? '#669900' : '#aaa' }">
                search
              </md-icon>
            </div>
          </div>
        </div>
        <div class="menu__contents">
          <span
            class="item"
            :class="{ active: menuProp == 'coffee' }"
            @mouseover="onNavMenuActive('coffee')"
          >
            COFFEE
          </span>
          <span
            class="item"
            :class="{ active: menuProp == 'menu' }"
            @mouseover="onNavMenuActive('menu')"
          >
            MENU
          </span>
          <span
            class="item"
            :class="{ active: menuProp == 'store' }"
            @mouseover="onNavMenuActive('store')"
          >
            STORE
          </span>
          <span
            class="item"
            :class="{ active: menuProp == 'responsibility' }"
            @mouseover="onNavMenuActive('responsibility')"
          >
            RESPONSIBILITY
          </span>
          <span
            class="item"
            :class="{ active: menuProp == 'rewards' }"
            @mouseover="onNavMenuActive('rewards')"
          >
            MY STARTBUCKS REWARDS
          </span>
          <span
            class="item"
            :class="{ active: menuProp == 'new' }"
            @mouseover="onNavMenuActive('new')"
          >
            WHAT'S NEW
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    menuProp: {
      type: String,
      default: undefined
    }
  },
  methods: {
    onSearch() {
      if (this.searchText) this.searchText = '';
      this.isSearchActive = !this.isSearchActive;
    },
    onNavMenuActive(menu) {
      this.isMenuHover = true;
      this.$emit('onNavMenuActive', menu);
    }
  },
  data() {
    return {
      isSearchActive: false,
      searchText: ''
    };
  }
};
</script>

<style lang="scss" scoped>
div.nav {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background: #f6f5f0;

  .inner {
    display: flex;
    align-items: center;
  }

  a.logo {
    margin-right: auto;
    padding: 1.6rem 0;
  }

  img {
    display: block;
  }

  .menu__wrapper {
    display: flex;
    flex-flow: column;
    align-items: end;

    .menu__user {
      display: flex;
      align-items: center;
      position: absolute;
      top: 1.4rem;

      .item {
        display: flex;
        align-items: center;
        color: #999;

        &:after {
          content: '';
          display: block;
          width: 1px;
          height: 0.6rem;
          background: rgba($color: #000000, $alpha: 0.3);
          margin: 0 1rem;
        }

        &:nth-last-child(2) {
          margin-right: 1rem;
        }

        &:nth-last-child(2):after {
          display: none;
        }
      }

      .input-search__wrapper {
        display: flex;
        position: relative;
        border: 1px solid #aaa;
        border-radius: 0.4rem;
        background: #fff;
        padding: 0.4rem;

        .input-search {
          outline: none;
          border: none;
          padding: 0;
          transition: all 0.4s;
        }

        .button-search {
          cursor: pointer;
        }
      }

      .input-search__wrapper.active {
        border: 1px solid #669900;
        padding: 0.4rem 0.4rem 0.4rem 0.8rem;
      }
    }

    .menu__contents {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;

      .item {
        display: flex;
        align-items: center;
        border-radius: 0.6rem 0.6rem 0 0;
        padding: 0.6rem 1.4rem 1.6rem;
        color: #666;
        font-weight: 900;
        cursor: pointer;
      }

      .item.active {
        background: #2c2a29;
        color: #669900;
      }
    }
  }
}
</style>
