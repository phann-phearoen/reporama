<template>
    <q-badge rounded :style="{ backgroundColor: color, width: width, padding: pad, fontSize: fontSize }" class="text">
        <div class="label" v-if="label">{{ label }}</div>
        <slot></slot>
    </q-badge>
</template>

<script>
export default {
    props: ['label', 'color', 'width', 'pad', 'fontSize', ],
}
</script>

<style scoped>
.text {
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: 2vw;
    font-weight: 600;
}
.label {
    margin: 0 auto;
    display: flex;
}

</style>