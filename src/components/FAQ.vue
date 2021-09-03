<template>
    <div class="contain">
        <div class="row q-mb-xl">
            <base-badge :label="'よくある質問'" :color="'rgb(150, 131, 229)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
        </div>

        <div class="row">
            <q-and-a-card></q-and-a-card>
        </div>
     </div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';
import QAndACard from './faq/Q&ACard.vue';

export default {
    components: { BaseBadge, QAndACard, },
}
</script>

<style scoped>
.contain{
    padding: 3vw 0;
    background-color: #F5F5FF;
}

</style>