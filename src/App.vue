<template>
  <div id="app">
    <AdminSpin :isLoading="true"/>
  </div>
</template>

<script>
import AdminSpin from './components/adminSpin/adminSpin'

export default {
  name: 'App',
  components: {
    AdminSpin
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
