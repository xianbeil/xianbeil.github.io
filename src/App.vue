<template>
  <div id="app">
    <h1>Hello aeqaq</h1>
    <div>
      <router-link to="/main">首页</router-link>
      <router-link to="/content">内容页1</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
