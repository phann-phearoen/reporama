<template>
    <div class="row">
        <div class="pinkey"><hr class="pinky-line"></div>
        <slot></slot><div class="title">{{ title }}</div>
        <div class="pinkey"><hr class="pinky-line"></div>
    </div>
</template>

<script>
export default {
    props: ['title', ]
}
</script>

<style scoped>
.row{
    width: 95%;
    margin: 2vw auto;
}
.pinky-line{
    height: 3px;
    background-color: rgb(205, 75, 128);
    border: none;
    width: 90%;
    margin-top: 1.5vw;
}
.pinkey{
    flex-grow: 1;
}
.title{
    margin: 0 auto;
    font-size: 2.3vw;
    color: rgb(205, 75, 128);
    font-weight: 600;
}
</style>