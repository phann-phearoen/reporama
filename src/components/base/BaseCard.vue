<template>
    <a :href="link" class="card" target="_blank">
        <q-card class="my-card">
            <img :src="src" class="no-shadow img">

            <q-card-section class="q-pt-none">
                <ul class="des">
                    <li v-for="line in des" :key="line">
                        {{ line }}
                    </li>
                </ul>
            </q-card-section>
        </q-card>
    </a>
</template>

<script>

export default {
    props: ['src', 'link', 'des']
}
</script>

<style scoped>
.card{
    cursor: pointer;
    padding: 1vw;
    text-decoration: none;
}
.des{
    list-style-type: none;
    font-size: 1vw;
    margin-left: -.5vw;
    color: grey;
    height: 4vw;
}
.img{
    margin-left: auto;
}
</style>