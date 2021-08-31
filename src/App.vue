<template>
  <q-layout view="lHr lpR lfr">

    <the-navbar></the-navbar>

    <left-drawer></left-drawer>

    <q-drawer 
    show-if-above
    side="right" 
    width="75" 
    style="background-color: rgb(150, 131, 229)">
     
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <the-footer></the-footer>

  </q-layout>
</template>

<script>
import TheNavbar from './layouts/TheNavbar.vue';
import LeftDrawer from './layouts/LeftDrawer.vue';
import TheFooter from './layouts/TheFooter.vue';

export default {
    components: { TheNavbar, LeftDrawer, TheFooter, },
    
}
</script>

<style scoped>

</style>