<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "./assets/styles/main"
html, body
  margin: 0
  padding: 0
  min-height: 100vh

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #600
  min-height: 100vh

</style>
