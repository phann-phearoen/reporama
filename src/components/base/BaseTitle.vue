<template>
    <div class="row">
        <div class="pinkey"><hr class="pinky-line" :style="{ height: pinkyHeight + 'px', marginTop: pinkyMarginTop + 'vw'}"></div>
        <slot></slot><div class="title" :style="{ fontSize: titleFontSize + 'vw' }">{{ title }}</div>
        <div class="pinkey"><hr class="pinky-line" :style="{ height: pinkyHeight + 'px', marginTop: pinkyMarginTop + 'vw'}"></div>
    </div>
</template>

<script>
export default {
    props: ['title', ],
    data() {
        return {
            screenWidth: 0, 
            pinkyHeight: 0,
            titleFontSize: 0,
            pinkyMarginTop: 0,
        }
    },
    methods: {
        handleResize() {
        this.screenWidth = window.innerWidth;
        },
    },
    watch: {
        screenWidth(val) {
        if (val > 1600) {
            this.pinkyHeight = 3;
            this.titleFontSize = 2;
            this.pinkyMarginTop = 1.5;
        } else if (val > 1400) {
            this.pinkyHeight = 3;
            this.titleFontSize = 2;
            this.pinkyMarginTop = 1.5;
        } else if(val > 1200){ 
            this.pinkyHeight = 2.5;
            this.titleFontSize = 2;
            this.pinkyMarginTop = 1.5;
        } else if(val > 1000) {
            this.pinkyHeight = 2;
            this.titleFontSize = 2.5;
            this.pinkyMarginTop = 1.6;
        } else if(val > 500){
            this.pinkyHeight = 2;
            this.titleFontSize = 2.7;
            this.pinkyMarginTop = 1.8;
        } else {
            this.pinkyHeight = 1.5;
            this.titleFontSize = 4.5;
            this.pinkyMarginTop = 3;
        }
        },
    },

    created() {
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    },
}
</script>

<style scoped>
.row{
    width: 95%;
    margin: 2vw auto;
}
.pinky-line{
    background-color: rgb(205, 75, 128);
    border: none;
    width: 90%;
}
.pinkey{
    flex-grow: 1;
}
.title{
    margin: 0 auto;
    color: rgb(205, 75, 128);
    font-weight: 600;
}
</style>