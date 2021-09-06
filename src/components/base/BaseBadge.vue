<template>
    <q-badge rounded 
    :style="{ backgroundColor: color, width: width, padding: padValue + 'vw', fontSize: fontSizeValue + 'vw'}" 
    class="text">
        <div class="label" v-if="label">{{ label }}</div>
        <slot></slot>
    </q-badge>
</template>

<script>
export default {
    props: ['label', 'color', 'width', 'pad', 'fontSize'],
    data() {
        return {
            screenWidth: 0,
            localFontSize: 0,
            localPad: 0
        }
    },
    computed: {
        padValue() {
            if (this.pad){
                return this.pad;
            }
            else{
                return this.localPad;
            }
        },
        fontSizeValue() {
            if (this.fontSize){
                return this.fontSize;
            }
            else{
                return this.localFontSize;
            }
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
            this.localFontSize = 1.7;
            this.localPad = 1.4;

        } else if (val > 1400) {
            this.localFontSize = 1.8;
            this.localPad = 1.4;

        } else if(val > 1200){ 
            this.localFontSize = 1.9;
            this.localPad = 1.4;

        } else if(val > 1000) {
            this.localFontSize = 2;
            this.localPad = 1.5;

        } else if(val > 500){
            this.localFontSize = 2.2;
            this.localPad = 1.5;

        } else {
            this.localFontSize = 5;
            this.localPad = 2;

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
.text {
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-weight: 600;
}
.label {
    margin: 0 auto;
    display: flex;
}

</style>