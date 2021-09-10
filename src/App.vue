<template>
  <q-layout view="LHR LPR LfR">

    <the-navbar></the-navbar>

    <q-drawer 
      show-if-above
      side="left" 
      width="75"
      style="background-color: rgb(205, 75, 128)"
    >
      <q-list style="margin-top: 7vw" class="column items-center">
          
          <a href="https://twitter.com/salvia__mama" style="margin-bottom: 50px" class="twitter social" target="_blank" @mouseover="selectTwitterSrc" @mouseout="normalT">
              <q-img :src="tsrc" width="50px" class="img"></q-img>
          </a>
          
          <a href="https://www.instagram.com/salvia_mama/" class="instagram social" target="_blank" @mouseover="selectInstaSrc" @mouseout="normalI">
              <q-img :src="instasrc" width="45px" class="img"></q-img>
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
      
      <q-page-sticky position="bottom-right" :offset="[8, 18]">
        <q-btn round flat class="" :style="{ width: toTopWidth + 'vw' }">
          <q-img @click="toTop" src="./assets/PAGE-TOP.png"></q-img>   
        </q-btn>
      </q-page-sticky>
      
    </q-page-container>

    <the-footer></the-footer>

  </q-layout>
</template>

<script>
import TheNavbar from './layouts/TheNavbar.vue'
import TheFooter from './layouts/TheFooter.vue'
export default {
    components: { TheNavbar, TheFooter, },
    data() {
      return {
        screenWidth: 0,
        toTopWidth: 0,

        tsrc: require('./assets/twitter-logo.png'),
        instasrc: require('./assets/instagram-logo-white.png'),
      }
    },
    methods: {
      toTop() {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
      },
      handleResize() {
          this.screenWidth = window.innerWidth;
      },
      selectTwitterSrc() {
        this.tsrc = require('./assets/twitter-logo-blue.png')
      },
      selectInstaSrc() {
        this.instasrc = require('./assets/instagram-logo.png')
      },
      normalT(){
        this.tsrc = require('./assets/twitter-logo.png')
      },
      normalI() {
        this.instasrc = require('./assets/instagram-logo-white.png')
      }
    },
    watch: {
        screenWidth(val) {
            if (val > 1600) {
                this.toTopWidth = 4.5
            } else if (val > 1400) {
                this.toTopWidth = 5
            } else if(val > 1200){ 
                this.toTopWidth = 6
            } else if(val > 1000) {
                this.toTopWidth = 8
            } else if(val > 500){
                this.toTopWidth = 10
            } else {
                this.toTopWidth = 15
            }
        },
    },

    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    },
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