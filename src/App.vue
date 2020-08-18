<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      data:''
    }
  },

  mounted() {
    let url = '/apis/api/kefu/pc.php?game_id=2395'
    // axios.get(url).then(()=>{

    // })
    jsonp(url,(err,res)=>{
      let result = res;
      this.data = result;
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
