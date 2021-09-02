<template>
    <div class="contain">
        <base-title :title="'レポラマにお願いするメリット'"></base-title>

        <div class="row q-mt-lg">
            <div class="col-1 q-ml-lg"></div>
            <div class="col-3 self-center pillar">
                <q-img src="../../assets/merit1.png" width="100%"></q-img>
            </div>
            <div class="col-1 self-center pillar">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col-6 self-center pillar text">
                独自性の強いオンリーワンコンテンツができる︕
            </div>
        </div>
        
        <div class="row">
            <div class="col-1 q-ml-lg"></div>
            <div class="col-3 self-center pillar">
                <q-img src="../../assets/merit1.png"></q-img>
            </div>
            <div class="col-1 self-center pillar">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col-6 self-center pillar text">
                独自性の強いオンリーワンコンテンツができる︕
            </div>
        </div>

        <div class="row">
            <div class="col-1 q-ml-lg"></div>
            <div class="col-3 self-center pillar">
                <q-img src="../../assets/merit1.png"></q-img>
            </div>
            <div class="col-1 self-center pillar">
                <q-img src="../../assets/arrow1.png"></q-img>
            </div>
            <div class="col-6 self-center pillar text">
                独自性の強いオンリーワンコンテンツができる︕
            </div>
        </div>

        <div class="row q-mt-md">
            <div class="col column items-center text q-mt-lg">
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
    </div>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseTitle, },
}
</script>

<style scoped>
.pillar{
    padding: 1.5vw;
}
.text{
    font-size: 1.7vw;
    color: grey;
    font-weight: 500;
}
.contain{
    margin-bottom: 4vw;
}
</style>