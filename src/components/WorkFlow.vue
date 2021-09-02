<template>
<div class="contain">
    <div class="row">
        <base-badge :label="'レポラマの流れ'" :color="'rgb(205, 75, 128)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
    </div>
    <div class="row flow">
        <q-img src="../assets/flow.png"></q-img>
    </div>

    <twitters></twitters>

    <merit></merit>


</div>

</template>

<script>
import BaseBadge from './base/BaseBadge.vue';
import Twitters from './workflow/Twitters.vue';
import Merit from './workflow/Merit.vue';

export default {
    components: { BaseBadge, Twitters, Merit, }
    
}
</script>

<style scoped>
.contain{
    margin: 3.5vw 0;
}
.flow{
    width: 90%;
    margin: 3vw auto;
}
</style>