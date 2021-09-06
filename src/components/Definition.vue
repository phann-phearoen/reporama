<template>
    <div class="row badger" id="definition-top">
        <base-badge :label="'レポラマとは'" :color="'rgb(205, 75, 128)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
    </div>

    <div class="row plain">
        <div class="contain">
            <span class="pinkish">レポート</span>+
            <span class="purplish">ライティング</span>+
            <span class="pinkish">ママ</span>=
            <span class="pinkish">レポ</span><span class="purplish">ラ</span><span class="pinkish">マ</span>！
        </div>
    </div>

    <div class="row q-mt-lg">
        <div class="col-2"></div>
        <div class="col-3">
            <div class="badge-outter">
                <base-badge :color="'rgb(150, 131, 229)'" :width="'85%'" :pad="'1.1vw'">
                    <div class="badge-inner"><span class="yellowish">レポ</span>―ト</div>
                </base-badge>
            </div>
            <div class="badge-outter">
                <base-badge :color="'rgb(205, 75, 128)'" :width="'85%'" :pad="'1.1vw'">
                    <div class="badge-inner"><span class="yellowish">ラ</span>イティング</div>
                </base-badge>
            </div>
            <div class="badge-outter">
                <base-badge :color="'rgb(150, 131, 229)'" :width="'85%'" :pad="'1.1vw'">
                    <div class="badge-inner"><span class="yellowish">マ</span>マ</div>
                </base-badge>
            </div>
        </div>
        <div class="col-1 self-center arrow">
            <q-img src="../assets/arrow.png" width="75%"></q-img>
        </div>
        <div class="col-6 self-center">
            <div class="des-plain">の頭文字からレポラマと名付けた</div>
            <div class="des-plain"><span class="des-purplish">「レポート記事作成サービス」</span>です。</div>
        </div>
    </div>

    <div class="row q-mt-lg q-mb-lg">
        <div class="col-1"></div>
        <div class="col-10">
            <ul class="line-list">
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
            this.salviaHeight = 3;
            this.salviaMargin = -1.5;
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
.badger {
    margin: 3vw auto;
}
.plain{
    font-size: 2vw;
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
    font-size: 1.5vw;
}
.yellowish{
    font-size: 2vw;
    color: rgb(255, 255, 100);
}
.arrow{
    margin-bottom: 1.2vw;
}

.des-plain{
    font-size: 1.9vw;
    color: grey;
}
.des-purplish{
    color: rgb(205, 75, 128);
    font-weight: 600;
}


.line-list{
    list-style-type: none;
    font-size: 1.2vw;
    color: grey;
}
.line{
    margin-bottom: 1.9vw;
}
</style>