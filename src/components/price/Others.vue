<template>
<div class="contain">

    <div class="row">
        <base-badge :label="'その他'" :color="'rgb(205, 75, 128)'" :width="'80%'"></base-badge>
    </div>

    <base-title :title="'NG商品一覧'"></base-title>

    <div class="row others" :style="{ width: tableWidth + '%'}">
        <div class="col">
            <div class="row pinkish-text" :style="{ fontSize: plainTextSize + 'vw' }">
                以下の商品は取り扱い不可です。
            </div>
            <div class="row q-mt-sm q-gutter-sm">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">アダルト系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>                
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">暴力系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">海外系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">公序良俗に反するモノ</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
            
               <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">ギャンブル系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>                
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 grow">
                    <q-card bordered>
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">出会い系</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 grow">
                    <q-card bordered class="">
                       <q-card-section>
                           <span>                       
                                <q-img src="../../assets/cross_thick.png" class="cross" :style="{ width: crossWidth + 'vw'}"></q-img>
                            </span>
                            <span>                        
                                <div class="ban" :style="{ fontSize: plainTextSize + 'vw' }">著作権および法律に抵触するモノ</div>                        
                            </span>
                       </q-card-section>
                    </q-card>
                </div>
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
        data() {
            return {
                screenWidth: 0, 
                tableWidth: 0,
                plainTextSize: 0,
                crossWidth: 0,
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
                this.tableWidth = 75
                this.plainTextSize = 1.3
                this.crossWidth = 3
            } else if (val > 1400) {
                this.tableWidth = 75
                this.plainTextSize = 1.4
                this.crossWidth = 3
            } else if(val > 1200){ 
                this.tableWidth = 75
                this.plainTextSize = 1.6
                this.crossWidth = 3
            } else if(val > 1000) {
                this.tableWidth = 85
                this.plainTextSize = 2
                this.crossWidth = 3
            } else if(val > 500){
                this.tableWidth = 90
                this.plainTextSize = 2.6
                this.crossWidth = 3.5
            } else {
                this.tableWidth = 90
                this.plainTextSize = 4.5
                this.crossWidth = 6.5
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
    margin: 3.5vw 0;
}
.others{ 
    margin: 1vw auto;
}
.pinkish-text{
    color: rgb(205, 75, 128);
}

.ban{
    color: grey;
    display: inline-block;
    margin-top: 1vw;
}
.grow{
    flex-grow: 1;
}
</style>