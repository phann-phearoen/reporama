<template>
    <div class="row badger" id="definition-top">
        <base-badge :label="'レポラマとは'" :color="'rgb(205, 75, 128)'" :width="'80%'"></base-badge>
    </div>

    <div class="row plain" :style="{ fontSize: plainFontSize + 'vw'}">
        <div class="contain">
            <span class="pinkish">レポート</span>+
            <span class="purplish">ライティング</span>+
            <span class="pinkish">ママ</span>=
            <span class="pinkish">レポ</span><span class="purplish">ラ</span><span class="pinkish">マ</span>！
        </div>
    </div>

    <div class="row q-mt-lg">
        <div class="col-2 gt-xs"></div><div class="col-1 lt-sm"></div>
        <div class="col-3 col-xs-2">
            <div class="badge-outter">
                <base-badge :color="'rgb(150, 131, 229)'" :width="'90%'" :pad="'1.5'">
                    <div class="badge-inner" :style="{ fontSize: desFontSize + 'vw'}"><span class="yellowish" :style="{ fontSize: abbreFontSize + 'vw'}">レポ</span>―ト</div>
                </base-badge>
            </div>
            <div class="badge-outter">
                <base-badge :color="'rgb(205, 75, 128)'" :width="'90%'" :pad="'1.5'">
                    <div class="badge-inner" :style="{ fontSize: desFontSize + 'vw'}"><span class="yellowish" :style="{ fontSize: abbreFontSize + 'vw'}">ラ</span>イティング</div>
                </base-badge>
            </div>
            <div class="badge-outter">
                <base-badge :color="'rgb(150, 131, 229)'" :width="'90%'" :pad="'1.5'">
                    <div class="badge-inner" :style="{ fontSize: desFontSize + 'vw'}"><span class="yellowish" :style="{ fontSize: abbreFontSize + 'vw'}">マ</span>マ</div>
                </base-badge>
            </div>
        </div>
        <div class="col-1 self-center arrow">
            <q-img src="../assets/arrow1.png" width="75%"></q-img>
        </div>
        <div class="col-6 self-center gt-xs">
            <div class="des-plain" :style="{ fontSize: abbreFontSize + 'vw'}">の頭文字からレポラマと名付けた</div>
            <div class="des-plain" :style="{ fontSize: abbreFontSize + 'vw'}"><span class="des-purplish">「レポート記事作成サービス」</span>です。</div>
        </div>
        <div class="col-7 self-center lt-sm">
            <div class="des-plain" :style="{ fontSize: lineListFontSize + 'vw'}">の頭文字からレポラマと名付けた
                <span class="des-purplish">「レポート記事作成サービス」</span>
                です。
            </div>
        </div>
    </div>

    <div class="row q-mt-lg q-mb-lg">
        <div class="col-1 gt-xs"></div>
        <div class="col">
            <ul class="line-list" :style="{ fontSize: lineListFontSize + 'vw'}">
                <li class="line">自社製品やサービスなどを、レポラマ所属スタッフが実際に使用・体験してレポートします。</li>
                <li class="line">御社が運営するコンテンツや印刷物でご利用いただけるような記事を納品します。</li>
                <li class="line-sticked">
                    自社メディア
                    <span>
                        <img src="../assets/salvia-logo.png" alt="salvia" class="salvia" :style="{height: salviaHeight + 'vw', marginBottom: salviaMargin + 'vw'}">
                    </span>
                    で活躍する主婦・ママライターが担当。
                </li>
                <li class="line">「いってみた・やってみた・使ってみた」など、
                    <span>
                        <img src="../assets/salvia-logo.png" alt="salvia" class="salvia" :style="{height: salviaHeight + 'vw', marginBottom: salviaMargin + 'vw'}">
                    </span> ならではの意見や感想が導き出せます。
                </li>
                <li class="line">
                    ※ご希望であれば「
                    <span>
                        <img src="../assets/salvia-logo.png" alt="salvia" class="salvia" :style="{height: salviaHeight + 'vw', marginBottom: salviaMargin + 'vw'}">
                        </span>」への掲載も対応します。
                </li>
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';

export default {
    components: { BaseBadge, },
    data() {
        return {
        screenWidth: 0,
        marginBottom: 0,
        marginTop: 0,
        salviaHeight: 0,
        salviaMargin: 0,

        desFontSize: 0,
        abbreFontSize: 0,

        plainFontSize: 0,

        lineListFontSize: 0,
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
            this.marginTop = 1.2;
            this.marginBottom = 1.5;
            this.salviaHeight = 3;
            this.salviaMargin = -1.5;

            this.desFontSize = 1.5;
            this.abbreFontSize = 2;

            this.plainFontSize = 3;

            this.lineListFontSize = 1.5;
        } else if (val > 1400) {
            this.marginTop = 1;
            this.salviaHeight = 3.7;
            this.marginBottom = 1.25;

            this.desFontSize = 1.5;
            this.abbreFontSize = 2;

            this.plainFontSize = 3;

            this.lineListFontSize = 1.5;
        } else if(val > 1200){ 
            this.marginBottom = 1.1;
            this.marginTop = 1;
            this.salviaHeight = 3.6;
            this.salviaMargin = -1.7;

            this.desFontSize = 1.5;
            this.abbreFontSize = 2;

            this.plainFontSize = 3;

            this.lineListFontSize = 1.5;
        } else if(val > 1000) {
            this.marginBottom = .8;
            this.marginTop = .8;

            this.desFontSize = 2.3;
            this.abbreFontSize = 2.3;

            this.plainFontSize = 3.3;

            this.lineListFontSize = 2;
        } else if(val > 500){
            this.marginBottom = .5;
            this.marginTop = .7;

            this.salviaHeight = 5;
            this.salviaMargin = -2.6;

            this.desFontSize = 2.5;
            this.abbreFontSize = 2.5;

            this.plainFontSize = 3.5;

            this.lineListFontSize = 2.4;
        } else {
            this.marginTop = 1;
            this.marginBottom = 1;
            this.salviaHeight = 7;
            this.salviaMargin = -3.4;

            this.desFontSize = 2.7;
            this.abbreFontSize = 3;

            this.plainFontSize = 4.5;

            this.lineListFontSize = 4;
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
.badger {
    margin: 3vw auto;
}
.plain{
    color: grey;
    font-weight: 600;
    margin-left: auto;
}
.pinkish{
    color: rgb(205, 75, 128);
}
.purplish{
  color: rgb(150, 131, 229);
}

.badge-outter{
    margin: 0 1vw 1vw 1vw;
}
.contain{
    margin: 0 auto;
}
.badge-inner{
    margin-right: auto;
    margin-left: 1.3vw;
}
.yellowish{
    color: rgb(255, 255, 100);
}
.arrow{
    margin-bottom: 1.2vw;
}

.des-plain{
    color: grey;
    margin-right: 4vw;
}
.des-purplish{
    color: rgb(205, 75, 128);
    font-weight: 600;
}


.line-list{
    list-style-type: none;
    color: grey;
}
.line{
    margin-bottom: 1.9vw;
}
</style>