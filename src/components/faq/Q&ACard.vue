<template>

    <q-expansion-item class="expan">
        <template v-slot:header>
        <q-item-section>
            <div class="row q-gutter-sm">
                <div class="col-1">
                    <p style="color: rgb(150, 131, 229)" :style="{ fontSize: leadFontSize + 'vw' }">Q</p>
                </div>
                <div class="col self-center" style="color: grey" :style="{ fontSize: detailFontSize + 'vw' }">
                    {{ question }}
                </div>
            </div>
        </q-item-section>
        </template>

        <q-card>
        <q-card-section class="answer">
            <div class="row q-gutter-sm">
                <div class="col-1" style="color: white" :style="{ fontSize: leadFontSize + 'vw' }">A
                </div>
                <div class="col" style="color: white" :style="{ fontSize: detailFontSize + 'vw' }">
                    {{ answer }}
                </div>
            </div>
        </q-card-section>
        </q-card>
    </q-expansion-item>
    
</template>

<script>
export default {
    props: ['question', 'answer', ],
    data() {
        return {
            screenWidth: 0, 
            leadFontSize: 0,
            detailFontSize: 0,
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
                this.leadFontSize = 2.8
                this.detailFontSize = 1.3

            } else if (val > 1400) {
                this.leadFontSize = 2.8
                this.detailFontSize = 1.3
            } else if(val > 1200){ 
                this.leadFontSize = 2.8
                this.detailFontSize = 1.3
            } else if(val > 1000) {
                this.leadFontSize = 4.5
                this.detailFontSize = 2.5

            } else if(val > 500){
                this.leadFontSize = 5
                this.detailFontSize = 3
            } else {
                this.leadFontSize = 6
                this.detailFontSize = 3.5
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
.answer{
    background-color: rgb(150, 131, 229);
}

</style>