<template>
<div class="bottom">
  <div class="row">
    <div class="col-4">
      <font-awesome-icon :icon="['fas', 'truck']" size="2xl" style="color: #ffffff;"/>
    </div>
    <div class="col-7">
      <h3>FREE SHIPPING & RETURN</h3>
      <p>Free Shipping over $300</p>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <font-awesome-icon :icon="['far', 'credit-card']" size="2xl" style="color: #ffffff;"/>
    </div>
    <div class="col-7">
      <h3>MONEY BACK GUARANTEE</h3>
      <p>30 Days Money Back Guarantee</p>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <font-awesome-icon :icon="['fas', 'headset']" size="2xl" style="color: #ffffff;"/>
    </div>
    <div class="col-7">
      <h3>02-1234-5678</h3>
      <p>24/7 Available Support</p>
    </div>
  </div>
</div>
</template>
<script>
  export default {
  name: 'footerPage',
  components: {},
  setup () {}
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/color.scss';
.bottom {
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: -50px;
  height: 15vw;
  max-width: 100%;
  min-height: 32vh;
  background-color: $black-80;
  z-index: 0;
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h3 {
      flex-direction: column;
      margin-top: 3vw;
      color: $white;
      font-size: 18px;
      font-weight: 500;
    }
    p {
        flex-direction: column;
        white-space: nowrap;
        color: $white;
        font-size: 18px;
        font-weight: 500;
      }
    }
  .bottom_anchor {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 3.86vw;
    right: 3.86vw;
    width: 5vw;
    height: 5vw;
    border: 1px solid $sky_blue;
    cursor: pointer;
    img {
      width: 2.5vw;
      transform: rotate(-90deg);
    }
  }
}
@media (min-width: 768px) {
  .bottom {
    img {
      width: 16.3vw;
    }
  }
}
</style>
  