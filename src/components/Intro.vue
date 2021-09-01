<template>
    <base-title :title="'記事例'"></base-title>
    <div class="row contain">
        <base-card
        class="col-xl-3 col-lg-4"
        v-for="(info, index) in introInfo"
        :key="index"
        :link="info.link"
        :src="info.src"
        :des="info.des"
        >
        
        </base-card>
    </div>

    <div class="row">
        <div class="col" style="height: 500px"></div>
    </div>
    
</template>

<script>
import BaseTitle from './base/BaseTitle.vue';
import BaseCard from './base/BaseCard.vue';

export default {
    components: { BaseTitle, BaseCard, },
    data() {
        return {
            introInfo: [
                { 
                    src: require('../assets/articles/article_1.png'), 
                    link: 'https://wg-salvia.com/archives/30591',
                    des: {
                        line1: 'クリスマス向け︕',
                        line2: '簡単テーブルナプキンの',
                        line3: '折り方を「MYdrap」で'
                    }
                },
                { 
                    src: require('../assets/articles/article_2.png'),
                    link: 'https://wg-salvia.com/archives/29626',
                    des: {
                        line1: '★美白＆毛穴対策にも︕',
                        line2: 'イエスパのシートマスク',
                        line3: '＆パックがすごい！'
                    }
                },
                { 
                    src: require('../assets/articles/article_3.png'),
                    link: 'https://wg-salvia.com/archives/29548',
                    des: {
                        line1: '20 分で簡単なめらかアイス♪',
                        line2: '貝印のアイスクリームメーカー',
                        line3: '＆レシピ'
                    }
                },
                { 
                    src: require('../assets/articles/article_4.png'),
                    link: 'https://wg-salvia.com/archives/31239',
                    des: {
                        line1: '★「KOH」パールが輝く',
                        line2: '　大人可愛い腕時計︕',
                        line3: 'プレゼントにもおすすめ'
                    }
                },
                { 
                    src: require('../assets/articles/article_5.png'),
                    link: 'https://wg-salvia.com/archives/27991',
                    des: {
                        line1: '★やまやの「めんたいチューブ」が',
                        line2: '美味しくて便利︕簡単レシピも♪'
                    }
                },
                { 
                    src: require('../assets/articles/article_6.png'),
                    link: 'https://wg-salvia.com/archives/30573',
                    des: {
                        line1: '寝起きの 1 分でパワーチャージ︕',
                        line2: 'プロに聞く瞑想のやり方︕'
                    }
                },
                { 
                    src: require('../assets/articles/article_7.png'),
                    link: 'https://wg-salvia.com/archives/22250',
                    des: {
                        line1: '★粘土クリエイター !?',
                        line2: '小学生がおちゃっぴのねんど',
                        line3: '「ピカリ」を体験'
                    }
                },
                { 
                    src: require('../assets/articles/article_8.png'),
                    link: 'https://wg-salvia.com/archives/28324',
                    des: {
                        line1: '子連れ OK ︕',
                        line2: '横浜の次世代サロン',
                        line3: '「HIKARINO」でエステ体験取材'
                    }
                },
            ]
        }
    }
}
</script>

<style scoped>
.contain{
    width: 95%;
    margin: 0 auto;
}
</style>