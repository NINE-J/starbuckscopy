<template>
  <div
    class="main-visual"
    :style="`background: url('${require(`@/assets/visual_bg.jpg`)}'); background-size: cover;`"
  ></div>
</template>

<script>
export default {
  name: 'MainVisual'
};
</script>

<style lang="scss" scoped>
.main-visual {
  width: 100%;
  height: 640px;
  background: coral;
}
</style>
