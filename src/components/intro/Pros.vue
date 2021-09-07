<template>
    <div class="contain">
        <base-title :title="'レポラマにお願いするメリット'"></base-title>

        <div class="row q-mt-lg gt-xs">
            <div class="col-1 gt-md"></div>
            <div class="col-3 q-ml-lg self-center pillar">
                <q-img src="../../assets/merit1.png" :width="pointWidth + '%'"></q-img>
            </div>
            <div class="col-1 self-center" :style="{ padding: arrowPad + 'vw'}">
                <q-img src="../../assets/arrow1.png" :width="arrowWidth + '%'"></q-img>
            </div>
            <div class="col self-center pillar text" :style="{ fontSize: textFontSize + 'vw'}">
                独自性の強いオンリーワンコンテンツができる︕
            </div>
        </div>
        
        <div class="row gt-xs">
            <div class="col-1 gt-md"></div>
            <div class="col-3 q-ml-lg self-center pillar">
                <q-img src="../../assets/merit1.png" :width="pointWidth + '%'"></q-img>
            </div>
            <div class="col-1 self-center" :style="{ padding: arrowPad + 'vw'}">
                <q-img src="../../assets/arrow1.png" :width="arrowWidth + '%'"></q-img>
            </div>
            <div class="col self-center pillar text" :style="{ fontSize: textFontSize + 'vw'}">
                実際に体験することで臨場感のある情報を発信できる︕
            </div>
        </div>

        <div class="row gt-xs">
            <div class="col-1 gt-md"></div>
            <div class="col-3 q-ml-lg self-center pillar">
                <q-img src="../../assets/merit1.png" :width="pointWidth + '%'"></q-img>
            </div>
            <div class="col-1 self-center"  :style="{ padding: arrowPad + 'vw'}">
                <q-img src="../../assets/arrow1.png" :width="arrowWidth + '%'"></q-img>
            </div>
            <div class="col self-center pillar text" :style="{ fontSize: textFontSize + 'vw'}">
                ママに特化した視点で記事がかける︕
            </div>
        </div>

        <div class="row q-mt-md gt-xs">
            <div class="col column items-center text q-mt-lg q-pl-md q-pr-md" :style="{ fontSize: textFontSize + 'vw'}">
                <div>
                    「大手メディア」の必須コンテンツでもある「体験レポート記事」。
                </div>
                <div>
                    最近は過剰な表現をセーブする方法が主流となり、
                </div>
                <div>
                    PR文も口コミも、さじ加減に悩むメディアが増えています。
                </div>
                <div>
                    等身大の主婦・ママたちが自然体の意見を綴る専門チーム「レポラマ」なら安心。ぜひお任せを︕
                </div>

            </div>
        </div>

        <div class="row lt-sm">
            
            <div class="col-12 column items-center q-mb-sm"><q-img src="../../assets/merit1.png" :width="pointWidth + '%'"></q-img></div>
            <div class="col-12 column items-center"><q-img src="../../assets/down-arrow.png" :width="arrowWidth + '%'"></q-img></div>
            
            <div class="col-12 column items-center q-mb-md text" :style="{ fontSize: textFontSize + 'vw'}">
                独自性の強いオンリーワンコンテンツができる︕
            </div>
        </div>
        <div class="row lt-sm">
            
            <div class="col-12 column items-center q-mb-sm"><q-img src="../../assets/merit2.png" :width="pointWidth + '%'"></q-img></div>
            <div class="col-12 column items-center"><q-img src="../../assets/down-arrow.png" :width="arrowWidth + '%'"></q-img></div>
            
            <div class="col-12 column items-center q-mb-md text" :style="{ fontSize: textFontSize + 'vw'}">
                実際に体験することで臨場感のある情報を発信できる︕
            </div>
        </div>
        <div class="row lt-sm">
            
            <div class="col-12 column items-center q-mb-sm"><q-img src="../../assets/merit3.png" :width="pointWidth + '%'"></q-img></div>
            <div class="col-12 column items-center"><q-img src="../../assets/down-arrow.png" :width="arrowWidth + '%'"></q-img></div>
            
            <div class="col-12 column items-center q-mb-md text" :style="{ fontSize: textFontSize + 'vw'}">
                ママに特化した視点で記事がかける︕
            </div>
        </div>
        
        <div class="row q-mt-md lt-sm">
            <div class="col column items-center text q-mt-lg q-pl-md q-pr-md" :style="{ fontSize: textFontSize + 'vw'}">
                
                    「大手メディア」の必須コンテンツでもある「体験レポート記事」。
                    最近は過剰な表現をセーブする方法が主流となり、
                    PR文も口コミも、さじ加減に悩むメディアが増えています。
                    等身大の主婦・ママたちが自然体の意見を綴る専門チーム「レポラマ」なら安心。ぜひお任せを︕
    
            </div>
        </div>
        
    </div>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseTitle, },
    data() {
        return {
            screenWidth: 0, 
            pointWidth: 0,
            arrowPad: 0,
            arrowWidth: 0,
            textFontSize: 0,
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
                this.pointWidth = 100;
                this.arrowPad = 1;
                this.textFontSize = 1.7;
            } else if (val > 1400) {
            
            } else if(val > 1200){ 

            } else if(val > 1000) {
                this.pointWidth = 100;
                this.arrowPad = 1;
                this.textFontSize = 2;
            } else if(val > 500){
                this.pointWidth = 100;
                this.arrowWidth = 90;
                this.textFontSize = 2.3;
            } else {
                this.pointWidth = 60;
                this.arrowWidth = 20
                this.textFontSize = 3.8;
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
.pillar{
    padding: 1vw;
}
.text{
    color: grey;
    font-weight: 500;
}
.contain{
    margin-bottom: 4vw;
}

</style>