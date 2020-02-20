<template>
  <div class="dashboard-container">
    <div class="dashboard-text">dashboard</div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="scss" scoped>
@import "~common/styles/variables.scss";

.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: $font-size-large-xx;
    line-height: 46px;
  }
}
</style>
