<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

//import axios from 'axios'
//import storage from './storage'

export default {
  name: 'App',
  components: {
  
  },
  data() {
    return {
      res: {}
    }
  },

  mounted() {
   // 1、本地加载请求静态json文件的形式
  //  this.axios.get('/mock/user/login.json').then((res) => {
  //    this.res = res;
  //  })
   // 2、通过easy-mock平台拉取模拟数据
   // 3、通过mockjs插件模拟数据
   this.axios.get('/user/login').then((res) => {
     this.res = res;
   })

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
