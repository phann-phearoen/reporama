<template>
    <div class="contain">
        <div class="row q-mb-xl">
            <base-badge :label="'価格'" :color="'rgb(150, 131, 229)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
        </div>
        <div class="row up-des">
            レポラマ用の商品（サンプル）はください。
        </div>
        <div class="row up-des q-pb-lg">
            その代わり安価で「レポラマ」を提供します。
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left">
                2,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center right">
                50,000円
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left">
                3,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center right">
                70,000円
            </div>
            <div class="col-1"></div>
        </div>

        <div class="row price">
            <div class="col-2"></div>
            <div class="col-4 self-center left">
                5,000文字程度のレポート記事
            </div>
            <div class="col-1 self-center">
                <q-img src="../../assets/arrow1.png" width="70%"></q-img>
            </div>
            <div class="col-4 self-center right">
                100,000円
            </div>
            <div class="col-1"></div>
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
    padding: 4vw 0;
    background-color: #F5F5FF;
}
.up-des{
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    font-size: 2vw;
    color: grey;
}
.price{
    margin: 0 auto;
}
.left{
    font-size: 1.8vw;
    color: grey;
    margin-left: 4vw;
}
.right{
    font-size: 2.4vw;
    font-weight: 600;
    color: rgb(150, 131, 229);
}
</style>

