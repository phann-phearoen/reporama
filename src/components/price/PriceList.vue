<template>
    <div class="contain">
        <div class="row q-mb-xl">
            <base-badge :label="'価格'" :color="'rgb(150, 131, 229)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
        </div>
        <div class="row up-des plain-text">
            レポラマ用の商品（サンプル）はください。
        </div>
        <div class="row up-des q-pb-lg plain-text">
            その代わり安価で「レポラマ」を提供します。
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left plain-text">
                2,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center stand-out-text">
                50,000円
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left plain-text">
                3,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center stand-out-text">
                70,000円
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left plain-text">
                5,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center stand-out-text">
                100,000円
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row table">
            <div class="col">
                <q-card class="my-card">
                    <q-card-section style="background-color: rgb(150, 131, 229)">
                        <div class="text-h3 text-white text-center">オプション</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions vertical>
                        <div><span class="plain-text">・salvia掲載希望</span><span class="stand-out-text">＋50,000円</span></div>
                        <div><span class="plain-text">・プレゼント企画連動 </span><span class="small-text">※規模によって別途相談</span></div>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
        
        <div class="row">
            <div class="col-6"></div>
            <div class="col">
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
    components: { BaseBadge, }
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
    width: 50%;
}

.small-text{
    font-size: 1.1vw;
    color: grey;
}
.plain-text{
    font-size: 2vw;
    color: grey;
}
.stand-out-text{
    font-size: 2.4vw;
    font-weight: 600;
    color: rgb(150, 131, 229);
}
.price{
    margin: 0 auto;
}
.left{
    margin-left: 4vw;
}

.table{
    margin: 3vw auto;
    width: 38%;
}

</style>

