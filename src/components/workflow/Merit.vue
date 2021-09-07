<template>
    <div class="contain">
        <base-title :title="'掲載や読者プレゼントキャンペーンのメリット'">
            <q-img src="../../assets/salvia-logo.png" width="15%" class="gt-xs"></q-img>
        </base-title>
        <div class="row merit gt-xs">
            <q-img src="../../assets/contribute-merit1.png"></q-img>
        </div>
        <div class="row merit gt-xs">
            <q-img src="../../assets/contribute-merit2.png"></q-img>
        </div>
        <div class="row merit gt-xs">
            <q-img src="../../assets/contribute-merit3.png"></q-img>
        </div>

        <div class="row merit-sm lt-sm">
            <q-img src="../../assets/contribute-merit1.png"></q-img>
        </div>
        <div class="row merit-sm lt-sm">
            <q-img src="../../assets/contribute-merit2.png"></q-img>
        </div>
        <div class="row merit-sm lt-sm">
            <q-img src="../../assets/contribute-merit3.png"></q-img>
        </div>
    </div>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue';

export default {
    components: { BaseTitle, }
}
</script>

<style scoped>
.contain{
    margin: 3.5vw 0;
}
.merit{
    width: 70%;
    margin: 1.7vw auto;
}
.merit-sm{
    width: 90%;
    margin: 2vw auto;
}
</style>