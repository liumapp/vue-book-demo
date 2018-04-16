<template>
  <div id="app" class="daily">
    <div class="daily-menu-item">
      <div class="daily-menu-item">每日推荐</div>
      <div class="daily-menu-item">主题日报</div>
    </div>
    <div class="daily-list">
      <item></item>
    </div>
    <daily-article></daily-article>
  </div>
</template>

<script>
export default {
  name: 'App'
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
