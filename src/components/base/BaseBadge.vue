<template>
    <q-badge rounded :style="{ backgroundColor: color, width: width }" class="text">
        <div class="label">{{ label }}</div>
    </q-badge>
</template>

<script>
export default {
    props: ['label', 'color', 'width'],
}
</script>

<style scoped>
.text {
    padding: 1.4vw;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: 2vw;
    font-weight: 600;
}
.label {
    margin-left: auto;
    margin-right: auto;
}
</style>