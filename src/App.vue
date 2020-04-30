<template>
  <div id="app">
    <router-view/>
    <navbar/>
  </div>
</template>

<script>

import navbar from 'components/navbar/navbar'

export default {
  name: 'App',
  components:{
    navbar
  },
}
</script>

<style>
  @import 'assets/css/base.css';  
</style>
