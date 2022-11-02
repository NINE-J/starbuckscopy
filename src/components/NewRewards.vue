<template>
  <div class="new-rewards">
    <div class="inner">
      <img src="@/assets/rewards.jpg" alt="" />
      <div class="btn-group">
        <div class="btn btn--reverse sign-up">회원가입</div>
        <div class="btn sign-in">로그인</div>
        <div class="btn gift">e-Gift 선물하기</div>
      </div>
    </div>
    <div class="bg-right"></div>
  </div>
</template>

<script>
export default {
  name: 'NewRewards',
};
</script>

<style lang="scss" scoped>
.new-rewards {
  width: 100%;
  height: 241px;
  background: #272727;
  position: relative;

  .bg-right {
    width: 50%;
    height: 100%;
    background-color: #d5c798;
    position: absolute;
    top: 0;
    right: 0;
  }

  .inner {
    width: 1100px;
    margin: 0 auto;
    z-index: 1;

    .btn-group {
      position: absolute;
      right: 0;
      bottom: 24px;
      width: 250px;
      display: flex;
      flex-wrap: wrap;

      .btn {
        width: 130px;

        &:hover {
          background: #333;
          color: #fff;
        }

        &.sign-up {
          margin-right: 10px;

          &.btn--reverse {
            background-color: #333;
            color: #fff;

            &:hover {
              background-color: #d5c798;
              color: #333;
            }
          }
        }
        &.sign-in {
          width: 110px;
        }
        &.gift {
          margin-top: 10px;
          flex: 1;
        }
      }
    }
  }
}
</style>
