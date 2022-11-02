<template>
  <div class="reserve-store">
    <div class="inner">
      <div class="medal">
        <div class="front">
          <img src="@/assets/reserve_store_medal_front.png" alt="R" />
        </div>
        <div class="back">
          <img src="@/assets/reserve_store_medal_back.png" alt="스타벅스 리저브 매장" />
          <a href="javascript:void(0)" class="btn"> 매장안내 </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReserveStore',
};
</script>

<style lang="scss" scoped>
.reserve-store {
  background-image: url('../assets/reserve_store_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  .inner {
    margin: 0 auto;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .medal {
    width: 334px;
    height: 334px;
    perspective: 600px;
    .front,
    .back {
      width: inherit;
      height: inherit;
      position: absolute;
      transition: 1s;
      backface-visibility: hidden;
    }
    .front {
      transform: rotateY(0deg);
    }
    &:hover .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(-180deg);

      .btn {
        position: absolute;
        top: 240px;
        left: 0;
        right: 0;
        margin: auto;
        color: #333;

        &:hover {
          background-color: #333;
          color: #fff;
        }
      }
    }
    &:hover .back {
      transform: rotateY(0deg);
    }
  }
}
</style>
