<template>
<div class="contain" id="contact-top">
    <div class="row">
        <base-badge :label="'お問い合わせ'" :color="'rgb(205, 75, 128)'" :width="'80%'"></base-badge>
    </div>

    <q-form
    @submit.prevent.stop="onSubmit"
    class="form" :style="{ width: formWidth + '%' }"
    >
        <q-input class="input"
            ref="nameRef"
            outlined
            v-model="name"
            label="お名前"
            hint="必須"
            :rules="validateName"
        />

        <q-input class="input"
            ref="comRef"
            outlined
            v-model="company"
            label="会社名"
            hint="必須"
            :rules="validateCompany"
        />

        <q-input class="input"
            ref="emailRef"
            outlined
            v-model="email"
            label="メールアドレス"
            hint="必須"
            :rules="validateEmail"
        />

        <q-input class="input"
            ref="phoneRef"
            outlined
            v-model="phone"
            label="電話番号"
            mask="###-####-####"
            :rules="validatePhone"
        />

        <div class="plan input">
            <div class="label">
                <span>お申込みプラン</span><span v-if="appPlanIsValid==null">（必須）</span>
                <span style="color: red" v-if="appPlanIsValid==false">（必須）</span>
            </div>
            <hr>
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-11 self-center">
                    <div class="label">
                        <q-radio
                        type="radio"
                        v-model="wordCount"
                        val="2000"
                        label="2,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" style="display: inline-block">
                    <q-input
                        outlined
                        v-model="articleCount.choice1"
                        type="number"
                        suffix="本"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-11 self-center">
                    <div class="label">
                        <q-radio
                        type="radio"
                        v-model="wordCount"
                        val="3000"
                        label="3,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" style="display: inline-block">
                    <q-input
                        outlined
                        v-model="articleCount.choice2"
                        type="number"
                        suffix="本"
                    />
                </div>
            </div>

            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-xs-11 self-center">
                    <div class="label">
                        <q-radio
                        type="radio"
                        v-model="wordCount"
                        val="5000"
                        label="5,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" style="display: inline-block">
                    <q-input
                        outlined
                        v-model="articleCount.choice3"
                        type="number"
                        suffix="本"
                    />
                </div>
            </div>

        </div>

        <div class="publish input">
            <div class="label">
                <span>salvia への掲載を希望しますか︖</span><span v-if="postConsentsIsValid==null">（必須）</span>
                <span style="color: red" v-if="postConsentsIsValid==false">（必須）</span>
            </div>
            <hr>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="q-pa-md label">
                        <q-radio v-model="postConsents" val="true" label="はい" class="q-mr-xl"/>
                        <q-radio v-model="postConsents" val="false" label="いいえ" />
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 q-pa-md label">
                    ※明らかに salvia のサイトコンセプトに反する記事は、
                    　自社メディアの掲載とさせていただきます。
                </div>
            </div>
        </div>

        <div class="kikaku input">
            <div class="label">
                <span>「salvia 読者プレゼントキャンペーン」での企画を希望しますか︖</span><span v-if="kikakuConsentsIsValid==null">（必須）</span>
                <span style="color: red" v-if="kikakuConsentsIsValid==false">（必須）</span>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="q-pa-md label">
                        <q-radio v-model="kikakuConsents" val="true" label="はい" class="q-mr-xl"/>
                        <q-radio v-model="kikakuConsents" val="false" label="いいえ" />
                    </div>
                </div>
            </div>
        </div>

        <q-input
            ref="inqRef"
            class="input"
            outlined
            type="textarea"
            v-model="inquiry"
            label="お問い合わせの内容"
            hint="必須"
            :rules="validateInquiry"
        />

        <div class="row">
            <q-btn class="submit" outline type="submit" style="color: rgb(205, 75, 128)" >送　信</q-btn>
        </div>
    </q-form>

    <div class="row">
        <div class="col"></div>
        <div class="col-1 q-mr-sm" :style="{ width: toTopWidth + '%' }">
            <q-img @click="toTop" src="../assets/PAGE-TOP.png" class="to-top" ></q-img>   
        </div>
    </div>

</div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';
export default {
    components: { BaseBadge, },
    data() {
        return {
            name: '',
            validateName: [ val => val && val.length > 0 || 'お名前を入力してください。' ],

            company: '',
            validateCompany: [ val => val && val.length > 0 || '会社名を入力してください。' ],

            email: null,
            validateEmail: [
                val => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)) || '正しいアドレスを入力してください。'
            ],

            phone: null,
            validatePhone: [
                val => (val.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)) || '正しい電話番号を入力してください。'
            ],

            wordCount: null,
            articleCount: {
                choice1: null, choice2: null, choice3: null
            },
            appPlanIsValid: null,

            postConsents: null,
            postConsentsIsValid: null,

            kikakuConsents: null,
            kikakuConsentsIsValid: null,

            inquiry: '',
            validateInquiry: [ val => val && val.length > 0 || 'お問い合わせ内容を入力してください。'],
            
            screenWidth: 0, 
            formWidth: 0,
            toTopWidth: 0,
            toTopMarginRight: null,

        }
    },
    computed: {
    },
    methods: {
        toTop() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        },

        validateAppPlan() {
            if (this.wordCount && (this.articleCount.choice1 || this.articleCount.choice2 || this.articleCount.choice3))
                this.appPlanIsValid = true;
            else
                this.appPlanIsValid = false;
        },
        validatePostConsents() {
            if (this.postConsents)
                this.postConsentsIsValid = true;
            else
                this.postConsentsIsValid = false;
        },
        validateKikakuConsents() {
            if (this.kikakuConsents)
                this.kikakuConsentsIsValid = true;
            else
                this.kikakuConsentsIsValid = false;
        },
        onSubmit() {
            
            
        },
    },
    watch: {
        screenWidth(val) {
            if (val > 1600) {
                this.formWidth = 55
                this.toTopWidth = 6
            } else if (val > 1400) {
                this.formWidth = 60
                this.toTopWidth = 6
            } else if(val > 1200){ 
                this.formWidth = 65
                this.toTopWidth = 7
            } else if(val > 1000) {
                this.formWidth = 65
                this.toTopWidth = 10
            } else if(val > 500){
                this.formWidth = 70
                this.toTopWidth = 10
            } else {
                this.formWidth = 90
                this.toTopWidth = 15
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
.contain{
    margin: 3vw auto;
}
.form{
    margin: 5vw auto;
}
.label{
    color: grey;
}
.submit{
    margin: .5vw auto -.5vw;
}
.to-top{
    margin-top: -4vw;
    margin-bottom: -1vw;
    cursor: pointer;
}
.input{
    margin-top: 2vw;
}
</style>