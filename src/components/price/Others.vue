<template>
<div class="contain">

    <div class="row">
        <base-badge :label="'その他'" :color="'rgb(205, 75, 128)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
    </div>

    <base-title :title="'NG商品一覧'"></base-title>

    <div class="row others">
        <div class="col">
            <div class="row pinkish-text">
                以下の商品は取り扱い不可です。
            </div>
            <div class="row q-mt-md">
                <div class="col-3 q-mr-md">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" width="20%"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">アダルト系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>                
                <div class="col-3 q-mr-md">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" width="20%"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">暴力系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col-2 q-mr-md">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">海外系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">公序良俗に反するモノ</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
            </div>
            <div class="row q-mt-md">
               <div class="col-3 q-mr-md">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" width="20%"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">ギャンブル系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>                
                <div class="col-3 q-mr-md">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" width="20%"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">出会い系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross"></q-img>
                            </span>
                            <span>                        
                                <div class="ban">著作権および法律に抵触するモノ</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
            </div>
            <div class="row">

            </div>
        </div>
    </div>

</div>
</template>

<script>
import BaseBadge from '../base/BaseBadge.vue';
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseBadge, BaseTitle, },    
}
</script>

<style scoped>
.contain{
    margin: 3.5vw 0;
}
.others{ 
    width: 70%;
    margin: 1vw auto;
}
.pinkish-text{
    font-size: 1.5vw;
    color: rgb(205, 75, 128);
}

.ban{
    font-size: 1.3vw;
    color: grey;
    display: inline-block;
    margin-top: 1vw;
}
.cross{
    margin-bottom: .7vw;
    min-width: 3vw;
    min-height: 3vw;
    height: 3vw;
    width: 3vw;
}
</style>