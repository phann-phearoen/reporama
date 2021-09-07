<template>
    <div class="contain" id="price-top">
        <div class="row q-mb-xl">
            <base-badge :label="'価格'" :color="'rgb(150, 131, 229)'" :width="'80%'"></base-badge>
        </div>
        <div class="row up-des plain-text" :style="{ fontSize: plainTextSize + 'vw' }">
            <div class="col column items-center">
                レポラマ用の商品（サンプル）はください。
            </div>
        </div>
        <div class="row up-des q-pb-lg plain-text" :style="{ fontSize: plainTextSize + 'vw' }">
            <div class="col column items-center">
                その代わり安価で「レポラマ」を提供します。
            </div>
        </div>

        <div class="row price">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-6 self-center left plain-text" :style="{ fontSize: plainTextSize + 'vw' }">
                2,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center" :style="{ width: arrowWidth + '%'}">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col self-center stand-out-text" :style="{ fontSize: standOutSize + 'vw' }">
                50,000円
            </div>
            <div class="col-1 gt-sm"></div>
        </div>

        <div class="row price">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-6 self-center left plain-text" :style="{ fontSize: plainTextSize + 'vw' }">
                3,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center" :style="{ width: arrowWidth + '%'}">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col self-center stand-out-text" :style="{ fontSize: standOutSize + 'vw' }">
                70,000円
            </div>
            <div class="col-1 gt-sm"></div>
        </div>

        <div class="row price">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-1"></div>
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-6 self-center left plain-text" :style="{ fontSize: plainTextSize + 'vw' }">
                5,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center" :style="{ width: arrowWidth + '%'}">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col self-center stand-out-text" :style="{ fontSize: standOutSize + 'vw' }">
                100,000円
            </div>
            <div class="col-1 gt-sm"></div>
        </div>

        <div class="row table" :style="{ width: tableWidth + '%'}">
            <div class="col">
                <q-card class="my-card">
                    <q-card-section style="background-color: rgb(150, 131, 229)">
                        <div class="text-white text-center" :style="{ fontSize: tableCaptionSize + 'vw'}">オプション</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions vertical>
                        <div><span class="plain-text" :style="{ fontSize: plainTextSize + 'vw' }">・salvia掲載希望</span><span class="stand-out-text" :style="{ fontSize: standOutSize + 'vw' }">＋50,000円</span></div>
                        <div><span class="plain-text" :style="{ fontSize: plainTextSize + 'vw' }">・プレゼント企画連動 </span><span class="small-text" :style="{ fontSize: smallTextSize + 'vw' }">※規模によって別途相談</span></div>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
        
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-4 col-sm-4 col-xs-3"></div>
            <div class="col" :style="{ fontSize: smallTextSize + 'vw' }">
                <div class="small-text">※商品の郵送代は別途請求いたします。</div>
                <div class="small-text">※レポート期間が数日以上の場合、別途ご相談ください。</div>
                <div class="small-text">※商品サンプルを頂戴できない場合、別途ご相談ください。</div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseBadge from '../base/BaseBadge.vue';

export default {
    components: { BaseBadge, },
    data() {
        return {
            screenWidth: 0, 
            plainTextSize: 0,
            arrowWidth: 0,
            standOutSize: 0,
            tableWidth: 0,
            tableCaptionSize: 0,
            smallTextSize: 0,
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
                this.plainTextSize = 2;
                this.arrowWidth = 4;
                this.standOutSize = 2.5;
                this.tableWidth = 50;
                this.tableCaptionSize = 3;
                this.smallTextSize = 1.1
            } else if (val > 1400) {
            
            } else if(val > 1200){ 

            } else if(val > 1000) {
                this.plainTextSize = 2.5;
                this.arrowWidth = 5;
                this.standOutSize = 3;
                this.tableWidth = 60;
                this.tableCaptionSize = 3.5;
                this.smallTextSize = 2;
            } else if(val > 500){
                this.plainTextSize = 3;
                this.arrowWidth = 5;
                this.standOutSize = 3.5;
                this.tableWidth = 60;
                this.tableCaptionSize = 4.5;
                this.smallTextSize = 2.2;
            } else {
                this.plainTextSize = 3.7;
                this.arrowWidth = 6.5;
                this.standOutSize = 4.3;
                this.tableWidth = 80
                this.tableCaptionSize = 5.5;
                this.smallTextSize = 2.7;
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
    padding: 3vw 0;
    background-color: #F5F5FF;
}
.up-des{
    margin-left: auto;
    margin-right: auto;
}

.small-text{
    color: grey;
}
.plain-text{
    color: grey;
}
.stand-out-text{
    font-size: 2.4vw;
    font-weight: 600;
    color: rgb(150, 131, 229);
    margin-left: 1.5vw;
}
.price{
    margin: 0 auto;
}
.left{
    margin-left: auto;
}

.table{
    margin: 3vw auto;
}

</style>

