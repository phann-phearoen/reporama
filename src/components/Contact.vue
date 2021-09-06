<template>
<div class="contain" id="contact-top">
    <div class="row">
        <base-badge :label="'お問い合わせ'" :color="'rgb(205, 75, 128)'" :width="'80%'" :pad="'1.4vw'"></base-badge>
    </div>

    <q-form
    @submit="onSubmit"
    class="q-gutter-md form"
    >
        <q-input
            outlined
            v-model="name"
            label="お名前"
            hint="必須"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'お名前を入力してください。']"
        />

        <q-input
            outlined
            v-model="company"
            label="会社名"
            hint="必須"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '会社名を入力してください。']"
        />

        <q-input
            outlined
            v-model="email"
            label="メールアドレス"
            hint="必須"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'メールアドレスを入力してください。']"
        />

        <q-input
            outlined
            v-model="phone"
            type="tel"
            label="電話番号"
        />

        <div class="plan">
            <div class="label">
                <span>お申込みプラン</span><span>（必須）</span>
            </div>
            <hr>
            <div class="row">
                <div class="col-5">
                    <div class="q-pa-md label">
                        <q-option-group
                        class="q-gutter-lg"
                        :options="wordsOptions"
                        type="radio"
                        v-model="wordCount"
                        />
                    </div>
                </div>
                <div class="col q-mt-sm" style="display: inline-block">
                    <div class="row">
                        <div class="col-5">
                            <q-input
                                outlined
                                v-model="articleCount.choice1"
                                type="number"
                                label="記事数"
                                style="display: inline"
                            />
                        </div>
                        <div class="col self-center q-ml-md label" style="display: inline">本</div>
                    </div>

                    <div class="row q-mt-sm">
                        <div class="col-5">
                            <q-input
                                outlined
                                v-model="articleCount.choice3"
                                type="number"
                                label="記事数"
                                style="display: inline"
                            />
                        </div>
                        <div class="col self-center q-ml-md label" style="display: inline">本</div>
                    </div>

                    <div class="row q-mt-sm">
                        <div class="col-5">
                            <q-input
                                outlined
                                v-model="articleCount.choice3"
                                type="number"
                                label="記事数"
                                style="display: inline"
                            />
                        </div>
                        <div class="col self-center q-ml-md label" style="display: inline">本</div>
                    </div>

                </div>
            </div>

        </div>

        <div class="publish">
            <div class="label">
                <span>salvia への掲載を希望しますか︖</span><span>（必須）</span>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="q-pa-md label">
                        <q-radio v-model="postConsents" val="true" label="はい" class="q-mr-xl"/>
                        <q-radio v-model="postConsents" val="false" label="いいえ" />
                    </div>
                </div>
                <div class="col-7 q-pa-md label">
                    ※明らかに salvia のサイトコンセプトに反する記事は、
                    　自社メディアの掲載とさせていただきます。
                </div>
            </div>
        </div>

        <div class="kikaku">
            <div class="label">
                <span>「salvia 読者プレゼントキャンペーン」での企画を希望しますか︖</span><span>（必須）</span>
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
            outlined
            type="textarea"
            v-model="age"
            label="お問い合わせの内容"
            hint="必須"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'お問い合わせの内容を入力してください。']"
        />

        <div class="row">
            <q-btn class="submit" outline type="submit" style="color: rgb(205, 75, 128)" label="送信" />
        </div>
    </q-form>

    <div class="row">
        <div class="col"></div>
        <div class="col-1">
            <q-img @click="toTop" src="../assets/PAGE-TOP.png" class="to-top" width="80%"></q-img>   
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
            company: '',
            email: '',
            phone: '',
            wordsOptions: [
                { label: '2,000 文字程度のレポート記事', value: 2000, },
                { label: '3,000 文字程度のレポート記事', value: 3000, },
                { label: '5,000 文字程度のレポート記事', value: 5000, }
            ],
            wordCount: 0,
            articleCount: {
                choice1: null, choice2: null, choice3: null
            },
            postConsents: null,
            kikakuConsents: null,
            inquiry: '',
        }
    },
    methods: {
        onSubmit() {
            
        },
        toTop() {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth', });
        }
    },
}
</script>

<style scoped>
.contain{
    margin: 3vw 0;
}
.form{
    width: 55%;
    margin: 3vw auto 0;
}
.label{
    font-size: 1vw;
    color: grey;
}
.submit{
    margin: .5vw auto -.5vw;
    font-size: 1vw;
    padding: 0 2.5vw;
}
.to-top{
    width: 80vw;
    margin-top: -4vw;
    margin-bottom: -1vw;
    cursor: pointer;
}
</style>