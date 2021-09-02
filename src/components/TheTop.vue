<template>
  <div class="contain gt-xs">
    <q-card class="my-card no-shadow">
      <div class="row">
        <div class="col-6">
          <q-img src="../assets/TOP.png" height="100%" width="100%" />
        </div>
        <div class="col-7 absolute-right text-subtitle2 text-left">
            <div :style="{marginBottom: marginBottom + 'vw', marginTop: marginTop + 'vw'}">
              <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">自社メディア</span>
              <span><img src="../assets/salvia-logo.png" alt="salvia" class="salvia" :style="{height: salviaHeight + 'vw'}"></span>
              <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">で人気の企画</span>
            </div>
            <div class="pinkish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">「いってみた・やってみた・使ってみた」</div>
            <div class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">などの体験レポート記事。</div>
            <div class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">このような体験レポートに特化した</div>
            <div>
              <span class="purplish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">記事作成サービス</span>
              <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">が</span>
              <span class="pinkish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">新登場！</span>
            </div>
        </div>
      </div>
    </q-card>
  </div>

  <div class="contain lt-sm">
    <q-card class="my-card no-shadow">
      
        <q-img src="../assets/TOP.png" height="100%" width="100%" />

      <div class="row">
        <div class="col-1"></div>
        <div class="col-11 text-left">
          <div :style="{marginBottom: marginBottom + 'vw', marginTop: marginTop + 'vw'}">
            <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">自社メディア</span>
            <span><img src="../assets/salvia-logo.png" alt="salvia" class="salvia" :style="{height: salviaHeight + 'vw', marginBottom: salviaMargin + 'vw'}"></span>
            <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">で人気の企画</span>
          </div>
          <div class="pinkish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">「いってみた・やってみた・使ってみた」</div>
          <div class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">などの体験レポート記事。</div>
          <div class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight, marginBottom: marginBottom + 'vw'}">このような体験レポートに特化した</div>
          <div>
            <span class="purplish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">記事作成サービス</span>
            <span class="plain " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">が</span>
            <span class="pinkish " :style="{fontSize: fontSize + 'vw', fontWeight: fontWeight}">新登場！</span>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: 0,
      fontSize: 0,
      fontWeight: 0,
      marginBottom: 0,
      marginTop: 0,
      salviaHeight: 0,
      salviaMargin: 0,
    }
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  watch: {
    screenWidth(val) {
      if (val > 1600) {
        this.fontSize = 1.7;
        this.fontWeight = 600;
        this.marginTop = 1.2;
        this.marginBottom = 1.5;
        this.salviaHeight = 4;
      } else if (val > 1400) {
        this.fontSize = 1.5;
        this.fontWeight = 600;
        this.marginTop = 1;
        this.salviaHeight = 3.7;
        this.marginBottom = 1.25;
      } else if(val > 1200){ 
        this.fontSize = 1.5;
        this.fontWeight = 500;
        this.marginBottom = 1.1;
        this.marginTop = 1;
        this.salviaHeight = 3.6;
      } else if(val > 1000) {
        this.fontSize = 1.5;
        this.fontWeight = 400;
        this.marginBottom = .8;
        this.marginTop = .8;
      } else if(val > 500){
        this.fontSize = 1.4;
        this.fontWeight = 300;
        this.marginBottom = .5;
        this.marginTop = .7;
        this.salviaMargin = -2;
      } else {
        this.fontSize = 4.5;
        this.fontWeight = 400;
        this.marginTop = 1;
        this.marginBottom = 1;
        this.salviaHeight = 8;
        this.salviaMargin = -4;
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
.contain{
  border-bottom: solid 1.5px rgb(205, 75, 128);
}
.plain{
  color: grey;
}
.pinkish{
  color: rgb(205, 75, 128);
}
.purplish{
  color: rgb(150, 131, 229);
}
.divider{
  margin-bottom: 1.5vw;
}
.salvia{
  margin-bottom: -1.9vw;
}
</style>
