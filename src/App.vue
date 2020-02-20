<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
  @import "~common/styles/variables.scss";

  #app {
    color: $color-theme
  }
</style>
