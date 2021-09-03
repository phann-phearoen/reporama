<template>

    <q-expansion-item class="expan">
        <template v-slot:header>
        <q-item-section>
            <div class="row">
                <div class="col-1">
                    <p class="text-h3" style="color: rgb(150, 131, 229)">Q</p>
                </div>
                <div class="col-11 self-center text-h5" style="color: grey">
                    {{ question }}
                </div>
            </div>
        </q-item-section>
        </template>

        <q-card>
        <q-card-section class="answer">
            <div class="row">
                <div class="col-1 text-h3" style="color: white">A
                </div>
                <div class="col-11 text-h5" style="color: white">
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
}
</script>

<style scoped>
.answer{
    background-color: rgb(150, 131, 229);
}

</style>