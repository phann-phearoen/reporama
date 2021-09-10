<template>

    <q-dialog v-model="alert">
      <q-card class="alert-card">
        <q-card-section class="success">
          メール送信しました。
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="閉じる" color="primary" v-close-popup @click="toTop"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

<div class="contain" id="contact-top">
    <div class="row">
        <base-badge :label="'お問い合わせ'" :color="'rgb(205, 75, 128)'" :width="'80%'"></base-badge>
    </div>

    <q-form
    @submit.prevent.stop="onSubmit"
    class="form" :style="{ width: formWidth + '%' }"
    >
        <q-input class="input"
            name="user_name"
            ref="nameRef"
            outlined
            v-model="name.value"
            label="お名前"
            hint="必須"
            @blur="validateName"
            :error="name.isValid===false"
            error-message="お名前を入力してください。"
        />

        <q-input class="input"
            name="user_company"
            ref="comRef"
            outlined
            v-model="company.value"
            label="会社名"
            hint="必須"
            @blur="validateCom"
            :error="company.isValid===false"
            error-message="会社名を入力してください。"
        />

        <q-input class="input"
            name="user_email"
            ref="emailRef"
            outlined
            v-model="email.value"
            label="メールアドレス"
            hint="必須"
            @keyup="validateEmail"
            @blur="validateEmail"
            :error="email.isValid===false"
            error-message="正しいアドレスを入力してください。"
        />

        <q-input class="input"
            name="user_phone"
            ref="phoneRef"
            outlined
            v-model="phone.value"
            label="電話番号"
            mask="###-####-####"
            @keyup="validatePhone"
            @blur="validatePhone"
            :error="phone.isValid===false"
            error-message="正しい電話番号を入力してください。"
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
                        name="word_count"
                        type="radio"
                        v-model="wordCount"
                        val="2000"
                        label="2,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" >
                    <q-input
                        v-if="wordCount===null || wordCount==='2000'"
                        name="article_count"
                        outlined
                        v-model="articleCount.choice1"
                        type="number"
                        suffix="本"
                    />
                    <q-input
                        v-else
                        disable
                        name="article_count"
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
                        name="word_count"
                        type="radio"
                        v-model="wordCount"
                        val="3000"
                        label="3,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" >
                    <q-input 
                        v-if="wordCount===null || wordCount==='3000'"
                        name="article_count"
                        outlined
                        v-model="articleCount.choice2"
                        type="number"
                        suffix="本"
                    />
                    <q-input 
                        v-else
                        disable
                        name="article_count"
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
                        name="word_count"
                        type="radio"
                        v-model="wordCount"
                        val="5000"
                        label="5,000 文字程度のレポート記事"
                        />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-11 q-mt-sm" >
                    <q-input
                        v-if="wordCount===null || wordCount==='5000'"
                        name="article_count"
                        outlined
                        v-model="articleCount.choice3"
                        type="number"
                        suffix="本"
                    />
                    <q-input
                        v-else
                        disable
                        name="article_count"
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
                        <q-radio name="post_consent" v-model="postConsents" val="はい" label="はい" class="q-mr-xl"/>
                        <q-radio name="post_consent" v-model="postConsents" val="いいえ" label="いいえ" />
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
                        <q-radio name="kikaku_consent" v-model="kikakuConsents" val="はい" label="はい" class="q-mr-xl"/>
                        <q-radio name="kikaku_consent" v-model="kikakuConsents" val="いいえ" label="いいえ" />
                    </div>
                </div>
            </div>
        </div>

        <q-input
            name="inquiry"
            ref="inqRef"
            class="input"
            outlined
            type="textarea"
            v-model="inquiry.value"
            label="お問い合わせの内容"
            hint="必須"
            @blur="validateInquiry"
            :error="inquiry.isValid===false"
            error-message="お問い合わせ内容を入力してください。"
        />

        <div class="row">
            <q-btn class="submit" outline type="submit" style="color: rgb(205, 75, 128)" >送　信</q-btn>
        </div>
    </q-form>

</div>

<div class="row lt-sm" style="height: 50px"></div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_VtX1Olx5DpcWVsjca1cFM");

export default {
    components: { BaseBadge, },
    data() {
        return {
            name: { value: '', isValid: null },

            company: { value: '', isValid: null },
            
            email: { value: '', isValid: null},

            phone: { value: '', isValid: null },
           
            wordCount: null,
            disabled1: null,
            disabled2: null,
            disabled3: null,

            articleCount: {
                choice1: null, choice2: null, choice3: null
            },
            appPlanIsValid: null,

            postConsents: null,
            postConsentsIsValid: null,

            kikakuConsents: null,
            kikakuConsentsIsValid: null,

            inquiry: { value: '', isValid: null },
              
            screenWidth: 0, 
            formWidth: 0,
            toTopWidth: 0,
            toTopMarginRight: null,

            alert: null,
        }
    },
    computed: {
    },
    methods: {
        toTop() {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
            }, 2);
        },
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
        validateName() {
            if (this.name.value !== '')
                this.name.isValid = true
            else
                this.name.isValid = false
        },
        validateCom() {
            if (this.company.value !== '')
                this.company.isValid = true
            else
                this.company.isValid = false
        },
        validateEmail() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email.value))
                this.email.isValid = true
            else
                this.email.isValid = false
        },
        validatePhone() {
            if (this.phone.value.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/) || this.phone.value === '')
                this.phone.isValid = true
            else
                this.phone.isValid = false
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
        validateInquiry() {
            if (this.inquiry.value !== '')
                this.inquiry.isValid = true
            else
                this.inquiry.isValid = false
        },

        onSubmit(e) {
            this.validateName()
            this.validateCom()
            this.validateEmail()
            this.validatePhone()
            this.validateAppPlan()
            this.validatePostConsents()
            this.validateKikakuConsents()
            this.validateInquiry()

            let target = document.getElementById('contact-top');

            if(this.name.isValid && this.company.isValid && 
            this.email.isValid && this.appPlanIsValid && 
            this.postConsentsIsValid && this.kikakuConsentsIsValid && this.inquiry.isValid){
                
                emailjs
                .sendForm(
                    "service-mamasuku",
                    "template_reporama",
                    e.target,
                    "user_VtX1Olx5DpcWVsjca1cFM"
                )
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.status, result.text)
    
                        this.alert = true

                        this.name.value = ''
                        this.company.value = ''
                        this.email.value = ''
                        this.phone.value = ''
                        this.wordCount = null
                        this.articleCount.choice1 = ''
                        this.articleCount.choice2 = ''
                        this.articleCount.choice3 = ''
                        this.postConsents = null
                        this.kikakuConsents = null
                        this.inquiry.value = ''
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        this.alert = false
                    }
                );
            }
            else{                
                window.scrollTo({ top: target.offsetTop + 60, left: 0, behavior: 'smooth'});
            }
            
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
    margin: 3vw auto;
}
.label{
    color: grey;
}
.submit{
    margin: 1vw auto;
}
.input{
    margin-top: 2vw;
}
.alert-card{
    min-width: 250px;
    min-height: 100px;
}
.success{
    color: rgb(205, 75, 128);
    margin: 1.75vw auto 1vw .5vw;
}
</style>