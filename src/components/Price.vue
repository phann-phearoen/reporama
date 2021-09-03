<template>
    <price-list></price-list>

    <others></others>
</template>

<script>
import PriceList from './price/PriceList.vue';
import Others from './price/Others.vue';

export default {
    components: { PriceList, Others, }
}
</script>