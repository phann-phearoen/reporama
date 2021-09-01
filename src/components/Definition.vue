<template>
    <div class="row badger">
        <base-badge :label="'レポラマとは'" :color="'rgb(205, 75, 128)'" :width="'70%'"></base-badge>
    </div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';

export default {
    components: { BaseBadge, },
}
</script>

<style scoped>
.badger {
    margin: 3vw auto;
}
</style>