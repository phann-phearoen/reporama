<template>
    <a :href="link" class="card" target="_blank">
        <q-card class="my-card">
            <img :src="src" class="no-shadow img">

            <q-card-section class="q-pt-none">
                <slot></slot>
            </q-card-section>
        </q-card>
    </a>
</template>

<script>

export default {
    props: ['src', 'link',],
}
</script>

<style scoped>
.card{
    cursor: pointer;
    padding: 1vw;
    text-decoration: none;
}
.img{
    margin-left: auto;
}
</style>