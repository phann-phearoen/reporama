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
            bottom-slots
        >
        <template>something</template>
        </q-input>

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
                        min="1"
                        suffix="本"
                    />
                    <q-input
                        v-else
                        disable
                        name="article_count"
                        outlined
                        v-model="articleCount.choice1"
                        type="number"
                        min="1"
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
                        min="1"
                        suffix="本"
                    />
                    <q-input 
                        v-else
                        disable
                        name="article_count"
                        outlined
                        v-model="articleCount.choice2"
                        type="number"
                        min="1"
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
                        min="1"
                        suffix="本"
                    />
                    <q-input
                        v-else
                        disable
                        name="article_count"
                        outlined
                        v-model="articleCount.choice3"
                        type="number"
                        min="1"
                        suffix="本"
                    />
                </div>
            </div>

        </div>

        <div class="publish input">
            <div class="label">
                <span>salvia への掲載を希望しますか︖</span><span class="required">（必須）</span>
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
                <span>「salvia 読者プレゼントキャンペーン」での企画を希望しますか︖</span><span class="required">（必須）</span>
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
            <q-btn class="submit" outline type="submit" :disable="isSending" style="color: rgb(205, 75, 128)" >{{ isSending ? '送　信　中' : '送　信' }}</q-btn>
        </div>
    </q-form>

</div>

<div class="row lt-sm" style="height: 50px"></div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';

const EMAIL_ENDPOINT = 'https://mi5k7vwadlfqj627c5xnyprawa0mnlth.lambda-url.ap-northeast-1.on.aws/';
const CONTACT_ADMIN_EMAIL = 'saiyou@wannagrow.co.jp';
const CONTACT_AUTH_EMAIL = 'date@wannagrow.co.jp';

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

async function parseJsonSafely(response) {
    try {
        return await response.json();
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        return null;
    }
 }

function createEmailApiError(response, responseBody) {
	const detail = responseBody && responseBody.message ? responseBody.message : `Request failed with status ${response ? response.status : 'unknown'}`;
	return new Error(detail);
}

function createAdminEmailTemplate(formData) {
    const choice = { '2000': 'choice1', '3000': 'choice2', '5000': 'choice3' }[formData.wordCount];
    const selectedArticleCount = formData.articleCount[choice];
    return `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; line-height: 1.8;">
            <p>レポラマの【お問い合わせが入りました】</p>
            <p>お名前： ${escapeHtml(formData.name.value)}</p>
            <p>会社名： ${escapeHtml(formData.company.value)}</p>
            <p>メールアドレス： ${escapeHtml(formData.email.value)}</p>
            <p>電話番号： ${escapeHtml(formData.phone.value)}</p>
            <p>ご依頼数</p>
            <p>${escapeHtml(formData.wordCount)} 文字程度のレポート記事：  ${escapeHtml(String(selectedArticleCount ?? ''))}本</p>
            <p>salvia への掲載希望： ${escapeHtml(formData.postConsents)}</p>
            <p>「salvia 読者プレゼントキャンペーン」での企画を希望しますか: ${escapeHtml(formData.kikakuConsents)}</p>
            <p>お問い合わせ内容： ${escapeHtml(formData.inquiry.value)}</p>

        </div>
    `;
}

async function sendEmail(formData) {    
    const payload = {
		authEmail: CONTACT_AUTH_EMAIL,
		to: CONTACT_ADMIN_EMAIL,
		subject: 'お問い合わせがありました',
		body: createAdminEmailTemplate(formData),
		smtpProvider: 'gmail',
	};

	const response = await fetch(EMAIL_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	const responseBody = await parseJsonSafely(response);

	if (!response.ok || !responseBody || responseBody.ok !== true) {
		throw createEmailApiError(response, responseBody);
	}

	return responseBody;
}

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
            isSending: false,
        }
    },
    computed: {
    },
    methods: {
        toTop() {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
            }, 10);
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
            if (this.isSending) return;

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
                
                const formData = {
                    name: this.name,
                    company: this.company,
                    email: this.email,
                    phone: this.phone,
                    wordCount: this.wordCount,
                    articleCount: this.articleCount,
                    postConsents: this.postConsents,
                    kikakuConsents: this.kikakuConsents,
                    inquiry: this.inquiry
                };
                console.log('Form data to be sent:', formData);
                this.isSending = true;
                sendEmail(formData)
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
                ).finally(() => {
                    this.isSending = false;
                });
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
        wordCount(val) {
            if(val == 2000){
                this.articleCount.choice2 = ''
                this.articleCount.choice3 = ''
            }
            else if(val == 3000){
                this.articleCount.choice1 = ''
                this.articleCount.choice3 = ''
            }
            else if(val == 5000){
                this.articleCount.choice1 = ''
                this.articleCount.choice2 = ''
            }
        }
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
.q-field:deep().q-field__messages.col{
    color: #C10015;
}
.required{
    color: #C10015;
}
</style>
