<template>
  <div class="home">
    <header class="header">
      <img src="@/assets/logo.png" alt="SCP Foundation Logo">
    </header>
    <h1>Справочник объектов Фонда</h1>
    <ScpSearch/>
  </div>
</template>

<script>
// @ is an alias to /src
import ScpSearch from '@/components/ScpSearch.vue'
export default {
  name: 'home',
  components: {
    ScpSearch
  }
}
</script>
<style scoped lang="sass">
.header
  height: 139px
  background: url("../assets/body_bg.png")
  position: relative
  margin-bottom: 1em
  img
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
