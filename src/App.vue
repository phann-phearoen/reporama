<template>
  <q-layout view="lHr lpR lfr">

    <the-navbar></the-navbar>

    <q-drawer 
      show-if-above
      side="left" 
      width="75"
      style="background-color: rgb(205, 75, 128)"
    >
      <q-list style="margin-top: 7vw" class="column items-center">
          
          <a href="https://twitter.com/salvia__mama" style="margin-bottom: 50px" class="twitter social" target="_blank">
              <q-img src="./assets/twitter-logo-blue.png" width="60px" class="img"></q-img>
          </a>
          
          <a href="https://www.instagram.com/salvia_mama/" class="instagram social" target="_blank">
              <q-img src="./assets/instagram-logo.png" width="55px" class="img"></q-img>
          </a>
          
      </q-list>
    </q-drawer>

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
import TheNavbar from './layouts/TheNavbar.vue'
import TheFooter from './layouts/TheFooter.vue'
export default {
    components: { TheNavbar, TheFooter, },
    
}
</script>

<style scoped>
.twitter:hover{
    background-color: white;
}
.instagram:hover{
    background-color: white;
}
.social{
    padding: 5px;
    border-radius: 5px;
}
</style>