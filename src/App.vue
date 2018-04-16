<template>
  <div id="app" class="daily">
    <div class="daily-menu-item">
      <div class="daily-menu-item"
           :class="{ on: type === 'recommend'}">每日推荐</div>
      <div class="daily-menu-item"
           :class="{ on: type === 'daily'}"
           @click="showThemes = !showThemes">主题日报</div>
      <ul v-show="showThemes">
        <li v-for="item in themes">
          <a :class="{ on: item.id === themeId && type === 'daily'}"
             @click="handleToTheme(item.id)">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="daily-list">
      <item></item>
    </div>
    <daily-article></daily-article>
  </div>
</template>

<script>
import $ from './libs/util'
export default {
  name: 'App',
  data () {
    return {
      themes: [],
      showThemes: false,
      type: 'recommend',
      list: [],
      themeId: 0
    }
  },
  methods: {
    getThemes () {
      //axios send get
      $.ajax.get('themes').then(res => {
        this.themes = res.others
      })
    },
    handleToTheme (id) {
      //change menu type
      this.type = 'daily'
      this.themeId = id
      this.list = []
      $.ajax.get('theme/' + id).then(res => {
        this.list = res.stories.filter(item => item.type !== 1)
      })
    }
  },
  mounted () {
    //initialize
    this.getThemes()
  }
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
