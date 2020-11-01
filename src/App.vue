<template>
  <div id="app">
    <div id="nav">
      <router-link to="/composition-api">Composition API</router-link> |
      <router-link to="/vue-syntax">Vue Syntax</router-link>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="sass">
#app
  width: 320px
  margin: auto
  font-family: Avenir, Helvetica, Arial, sans-serif
  color: #2c3e50
  text-align: center
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

.slide-fade-enter-active,
.slide-fade-leave-active
  transition: all .2s ease

.slide-fade-enter,
.slide-fade-leave-to
  opacity: 0
  transform: translateX(-10px)</style>
