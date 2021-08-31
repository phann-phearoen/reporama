<template>
  <q-layout view="lHr lpR lfr">

    <q-header elevated class="bg-white text-grey" height-hint="98">
      <q-toolbar>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />

        <q-toolbar-title>
            <img src="../assets/brand.jpg" width="250">
        </q-toolbar-title>

        <q-tabs align="right">
            <q-route-tab to="#" label="レポラマとは" />
            <q-route-tab to="#" label="レポラマ紹介" />
            <q-route-tab to="#" label="レポの流れ" />
            <q-route-tab to="#" label="価格" />
            <q-route-tab to="#" label="その他" />
            <q-route-tab to="#" label="よくある質問" />
            <q-route-tab to="#" label="お問い合わせ" />
        </q-tabs>
      </q-toolbar>

    </q-header>

    <q-drawer 
    show-if-above 
    v-model="leftDrawerOpen" 
    side="left" 
    width="80" 
    style="background-color: rgb(205, 75, 128)"
    >
      
    </q-drawer>

    <q-drawer 
    show-if-above 
    v-model="rightDrawerOpen" 
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
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style scoped>
.left-pillar {
    background-color: black;
}
.right-pillar{
    
}
</style>