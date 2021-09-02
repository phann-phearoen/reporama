<template>
    <base-title :title="'読プレ企画twitter掲載例'"></base-title>
    <div class="row q-gutter-lg tweets">
        <div class="col">
            <a target="_blank"
            href="https://twitter.com/salvia__mama/status/1068674093929529344?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1068674093929529344%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwg-salvia.com%2Freporama%2F">
                <q-card class="my-card">
                    <q-img src="../../assets/twitters/Twitter_1.jpg"></q-img>
                </q-card>
            </a>
        </div>
        <div class="col">
            <a target="_blank"
            href="https://twitter.com/salvia__mama/status/1065045240665407493?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1065045240665407493%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwg-salvia.com%2Freporama%2F">
                <q-card class="my-card">
                    <q-img src="../../assets/twitters/Twitter_2.jpg"></q-img>
                </q-card>
            </a>
        </div>
        <div class="col">
            <a target="_blank"
            href="https://twitter.com/salvia__mama/status/1060727579995328512?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1060727579995328512%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwg-salvia.com%2Freporama%2F">
                <q-card class="my-card">
                    <q-img src="../../assets/twitters/Twitter_3.jpg"></q-img>
                </q-card>
            </a>
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
.tweets{
    width: 90%;
    margin: 1vw auto;
}
</style>