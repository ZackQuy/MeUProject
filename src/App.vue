<template>
  <div>
   
    <router-view/>
  </div>
</template>

<script>
import cMain from './views/main_page/Main';
export default {
  name: 'App',
  components: {
    cMain
  }
}
</script>

<style>


</style>
