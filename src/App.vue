<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


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
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        // 保存数据到vuex
        console.log(res);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        console.log(res);
      })
    }
  }
}

</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/button.scss';
</style>
