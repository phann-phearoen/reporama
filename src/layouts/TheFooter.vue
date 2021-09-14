<template>
    <q-footer class="bg-white text-grey footer" :style="{ heigth: footerHeight + 'px' }">

        <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-5">
                <div class="main-menu" :style="{ fontSize: mainFontSize + 'vw' }">About us</div>
                <ul class="sub-menu" :style="{ fontSize: subFontSize + 'vw' }">
                    <li><a class="link" href="https://www.wannagrow.co.jp/" target="_blank">運営会社</a></li>
                    <li><a class="link" href="https://wg-salvia.com/" target="_blank">salviaはコチラ</a></li>
                </ul>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-4 col-xs-6">
                <div class="main-menu" :style="{ fontSize: mainFontSize + 'vw' }">Contents事例</div>
                <ul class="sub-menu" :style="{ fontSize: subFontSize + 'vw' }">
                    <li><a class="link" href="https://wg-salvia.com/archives/24249" target="_blank">おむつポーチ（マザーズ用品）</a></li>
                    <li><a class="link" href="https://wg-salvia.com/archives/31877" target="_blank">キラキラドリル（学習教育）</a></li>
                    <li><a class="link" href="https://wg-salvia.com/archives/29548" target="_blank">アイスクリームマシーン（キッチン）</a></li>
                </ul>
            </div>
            <div class="col gt-xs">
                <q-img src="../assets/rogo.png" width="50%" class="rogo"></q-img>
            </div>
        </div>

        <div class="row copy-right">
            <div class="col column items-center">
                <div :style="{ fontSize: crFontSize + 'vw' }">Copyright © 2019 - 2021 <a class="link" href="https://www.wannagrow.co.jp/" target="_blank">WANNAGROW Inc</a>. All Rights Reserved.</div>
            </div>
        </div>

    </q-footer>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: 0, 
            mainFontSize: null,
            subFontSize: null,
            crFontSize: null,
            footerHeight: null,
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
                this.mainFontSize = 2.5
                this.subFontSize = 1
                this.crFontSize = 1
                this.footerHeight = 260
            } else if (val > 1400) {
                this.mainFontSize = 2.8
                this.subFontSize = 1.1
                this.crFontSize = 1.1
                this.footerHeight = 240
            } else if(val > 1200){ 
                this.mainFontSize = 3
                this.subFontSize = 1.4
                this.crFontSize = 1.4
                this.footerHeight = 220
            } else if(val > 1000) {
                this.mainFontSize = 3.5
                this.subFontSize = 1.8
                this.crFontSize = 1.8
                this.footerHeight = 200
            } else if(val > 500){
                this.mainFontSize = 4
                this.subFontSize = 2
                this.crFontSize = 2
                this.footerHeight = 200
            } else {
                this.mainFontSize = 5
                this.subFontSize = 3
                this.crFontSize = 3
                this.footerHeight = 200
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
.footer{
    border-top: solid 1px rgb(205, 75, 128);
}
.main-menu{
    margin: 1.5vw 0 0vw 2.5vw;
    font-size: 2vw;
    color: rgb(205, 75, 128); 
}
.sub-menu{
    list-style-type: none;
    padding-left: .5vw;
    margin-left: 3vw;
    font-size: 1vw;
    border-left: solid 1px rgb(150, 131, 229);
}
.link{
    text-decoration: none;
    cursor: pointer;
}
.link:hover{
    color: rgb(205, 75, 128);
}
.rogo{
    margin-top: 5vw;
    margin-left: 10vw;
}
.copy-right{
    margin: auto;
}
</style>