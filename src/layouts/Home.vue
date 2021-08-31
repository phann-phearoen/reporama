<template>
  <q-layout view="lHr lpR lfr">

    <the-navbar></the-navbar>

    <left-drawer></left-drawer>

    <q-drawer 
    show-if-above
    side="right" 
    width="80" 
    style="background-color: rgb(150, 131, 229)">
     
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
import LeftDrawer from './LeftDrawer.vue';

export default {
    components: { TheNavbar, LeftDrawer, },
    
}
</script>

<style scoped>

</style>