<template>
    <div class="contain" id="faq-top">
        <div class="row q-mb-xl">
            <base-badge :label="'よくある質問'" :color="'rgb(150, 131, 229)'" :width="'80%'"></base-badge>
        </div>

        <div class="row qna">
            <q-list bordered class="list rounded-borders col-sm-9 col-xs-11">
                <q-and-a
                v-for="(qna, index) in qnaList"
                :key="index"
                :question="qna.question"
                :answer="qna.answer"
                ></q-and-a>
            </q-list>
        </div>
     </div>
</template>

<script>
import BaseBadge from './base/BaseBadge.vue';
import QAndA from './faq/Q&ACard.vue';

export default {
    components: { BaseBadge, QAndA, },
    data() {
        return {
            qnaList: [
                { 
                    question: `納期はどのくらいですか︖`,
                    answer: `体験する内容によって前後しますが、多くのケースでは、
                            担当ライターの手元に商品が届いてから 1 週間～ 10 日間程度／
                            イベントに参加してから 1 週間～ 10 日間程度で記事を納品いたします。`
                },
                { 
                    question: `記事の質は問題ないですか︖`,
                    answer: `問題ございません。
                            担当するスタッフは、自社メディア「salvia」で体験レポートの実績あるライターで構成されています。
                            また、全ての記事に対して、ライティング後は、校正班による検品を行っています。`
                },
                { 
                    question: `記事の著作権などは︖`,
                    answer: `原則、ライターが撮影した写真、記載したテキストについては、
                            お支払いと同時に一切の権限を移譲します。ご自由にお使いいただけます。`
                },
                { 
                    question: `ライターを指名できますか︖`,
                    answer: `出来ます。詳細は別途ご相談ください。`
                },
                { 
                    question: `納品は何でしてくれますか︖`,
                    answer: `御社で使われているシステムやワードプレスへの直入力や、
                            ワードやテキストベースなど柔軟に対応可能です。まずはご相談ください。 `
                },
                { 
                    question: `商品を長期間使ってもらうことは可能ですか︖`,
                    answer: `可能です。リアルタイムでの経過配信等も承ります。
                            お気軽にご相談ください。`
                },
            ]
        }
    }
}
</script>

<style scoped>
.contain{
    padding: 3vw 0;
    background-color: #F5F5FF;
}
.qna{
    margin: 0 auto;
}
.list{
    margin: 0 auto;
}
</style>