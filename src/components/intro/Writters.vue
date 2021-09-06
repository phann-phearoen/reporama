<template>
    <div class="contain">
        
        <div class="row">
            <base-badge :label="'ライターの紹介'" :color="'rgb(150, 131, 229)'" :width="'80%'"></base-badge>
        </div>

        <div class="row card">
            <writters-card
            v-for="(writter, index) in writtersInfo"
            :key="index"
            :src="writter.src"
            :name="writter.name"
            :des="writter.des"
            :links="writter.links">

            </writters-card>
        </div>

    </div>

</template>

<script>
import BaseBadge from '../base/BaseBadge.vue';
import WrittersCard from '../base/WrittersCard.vue';

export default {
    components: { BaseBadge, WrittersCard, },
    data() {
        return {
            writtersInfo: [
                {
                    src: require('../../assets/writters/rokko.jpg'), 
                    name: 'ろっこ',
                    des: `情報誌の元編集者。独自の視点で商品の一般的な特徴 " 以外 " の長所を探すことに喜びを感じています。
                        便利グッズや生活必需品など、レポートご依頼いただければ意外なアピールポイントが見つかるかもしれませんよ。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/22250',
                            text: 'おちゃっぴ粘土（オモチャ）'
                        },
                        link2:
                        {
                            ref: 'https://wg-salvia.com/archives/31877',
                            text: 'キラキラドリル（学習教育）'
                        }

                    }
                },
                {
                    src: require('../../assets/writters/nekonote.jpg'), 
                    name: 'nekonote',
                    des: `「何事も子どもと一緒に楽しむ」がモットーの 2 児のママ。親子での体験レポート記事が得意です。
                        子どもと楽しめる料理・工作グッズ、ファミリーにおすすめのスポットなど、ぜひお声がけください♪　
                        思いっきり使い（遊び）倒している様子を、写真や動画でお届けします︕`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/29548',
                            text: 'アイスクリームマシーン（キッチン）'
                        },
                        link2:
                        {
                            ref: 'https://wg-salvia.com/archives/28324',
                            text: 'HIKARINO エステ体験（美容・取材）'
                        }

                    }
                },{
                    src: require('../../assets/writters/higarina.jpg'), 
                    name: 'ひがりな',
                    des: `家事も育児も「楽をすることに全力投球」。真の便利グッズや、時短情報をこよなく愛するママなので、
                        ぜひご自慢の商品を提供いただき、私の「選楽眼（せんらくがん ?!）」に挑んでください。
                        本当に楽なものしか褒めません（笑）いろいろな意味で面白いグッズも歓迎です。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/24249',
                            text: 'おむつポーチ（マザーズ用品）'
                        },
                    }
                },{
                    src: require('../../assets/writters/kuratae.jpg'), 
                    name: 'kuratae',
                    des: `元エステティシャン、元アパレル販売員。現在は双子ママでインテリアや心理も勉強中。
                        「認定エステティシャン」と「オーラソーマプラクティショナー」の資格を保有。
                        美容やファッション、インテリアやオシャレな雑貨まで、写真で見せる記事に挑戦中。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/32620',
                            text: '貝印のレモンジューサーがおすすめ！子どもと一緒に簡単レシピ♪'
                        }

                    }
                },{
                    src: require('../../assets/writters/mio.jpg'), 
                    name: 'Mio',
                    des: `食生活アドバイザーとスポーツフードアドバイザーの資格を活かし、料理や食材関係の記事を中心に執筆中。
                        市販の調味料からオリジナルレシピを考案したり、時短アレンジも得意です。
                        食品や調理器具関係のレポートならおまかせください。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/30664',
                            text: 'ひかり味噌 ( 食品 )'
                        },
                        link2:
                        {
                            ref: 'https://wg-salvia.com/archives/30825',
                            text: '貝印のカーブキッチンバサミ（キッチン）'
                        }

                    }
                },
                {
                    src: require('../../assets/writters/bacchus.jpg'), 
                    name: 'Bacchus',
                    des: `毎日の身の回りで起きる、家事育児の「疑問︖」や「困った︕」をテーマにすることが得意。
                        主婦が等身大の自分でできる対策や解決方法を記事にしています。
                        しっかりレポートだけでなく、文章を読むのが苦手な人に向けに、サクッと読めるタッチも対応可能です。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/28857',
                            text: '仕事もママ業も完璧 !「ワーキングマザーの手帳 2018」がおすすめ'
                        },
                    }
                },
                {
                    src: require('../../assets/writters/kody.jpg'), 
                    name: 'KODY',
                    des: `salvia で主に外交窓口を担当。記事テーマや切り口を見出すのが得意です。
                        御社で提供している商品やサービスの PR をご検討中でしたら、ぜひ一度 KODY にご相談ください。
                        きっと、salvia 流の打ち出し方をご提案できることと思いますよ。　※メール取材も対応可。`,
                    links: {
                        link1:
                        {
                            ref: 'https://wg-salvia.com/archives/21880',
                            text: 'ラグジュアリーな肌に導かれ―。LUSH の「固形バスオイル」'
                        },
                        link2:
                        {
                            ref: 'https://wg-salvia.com/archives/25132',
                            text: '粘土遊びでデキル大人に︕子供の将来が輝く「ピカリッジ」って︖'
                        },
                        link3:
                        {
                            ref: 'https://wg-salvia.com/archives/30573',
                            text: '寝起きの 1 分でパワーチャージ︕プロに聞く瞑想のやり方︕'
                        }
                    }
                },
            ]
        }
    }
}
</script>

<style scoped>
.contain{
    padding: 4vw 0;
    background-color: #F5F5FF;
}
.card{
    margin-top: 1vw;
}
</style>