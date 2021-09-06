<template>
    <base-title :title="'記事例'"></base-title>
    <div class="row contain" id="intro-top">
        <base-card
        class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
        v-for="(info, index) in introInfo"
        :key="index"
        :link="info.link"
        :src="info.src">
            <ul class="des" :style="{ fontSize: desFontSize + 'vw'}">
                <li v-for="line in info.des" :key="line" v-html="line"></li>
            </ul>
        </base-card>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 lone self-end" style="height: 5vw" :style="{ fontSize: desFontSize + 'vw'}">
            <span style="color: rgb(255, 153, 0)">★</span>・・・プレパブ連動企画
        </div>
    </div>
</template>

<script>
import BaseTitle from '../base/BaseTitle.vue';
import BaseCard from '../base/BaseCard.vue';

export default {
    components: { BaseTitle, BaseCard, },
    data() {
        return {
            introInfo: [
                { 
                    src: require('../../assets/articles/article_1.png'), 
                    link: 'https://wg-salvia.com/archives/30591',
                    des: {
                        line1: 'クリスマス向け︕',
                        line2: '簡単テーブルナプキンの',
                        line3: '折り方を「MYdrap」で'
                    }
                },
                { 
                    src: require('../../assets/articles/article_2.png'),
                    link: 'https://wg-salvia.com/archives/29626',
                    des: {
                        line1: '<span style="color: rgb(255, 153, 0)">★</span>美白＆毛穴対策にも︕',
                        line2: 'イエスパのシートマスク',
                        line3: '＆パックがすごい！'
                    }
                },
                { 
                    src: require('../../assets/articles/article_3.png'),
                    link: 'https://wg-salvia.com/archives/29548',
                    des: {
                        line1: '20 分で簡単なめらかアイス♪',
                        line2: '貝印のアイスクリームメーカー',
                        line3: '＆レシピ'
                    }
                },
                { 
                    src: require('../../assets/articles/article_4.png'),
                    link: 'https://wg-salvia.com/archives/31239',
                    des: {
                        line1: '<span style="color: rgb(255, 153, 0)">★</span>「KOH」パールが輝く',
                        line2: '　大人可愛い腕時計︕',
                        line3: 'プレゼントにもおすすめ'
                    }
                },
                { 
                    src: require('../../assets/articles/article_5.png'),
                    link: 'https://wg-salvia.com/archives/27991',
                    des: {
                        line1: '<span style="color: rgb(255, 153, 0)">★</span>やまやの「めんたいチューブ」が',
                        line2: '美味しくて便利︕簡単レシピも♪',
                        line3: '</br>',
                    }
                },
                { 
                    src: require('../../assets/articles/article_6.png'),
                    link: 'https://wg-salvia.com/archives/30573',
                    des: {
                        line1: '寝起きの 1 分でパワーチャージ︕',
                        line2: 'プロに聞く瞑想のやり方︕',
                        line3: '</br>',
                    }
                },
                { 
                    src: require('../../assets/articles/article_7.png'),
                    link: 'https://wg-salvia.com/archives/22250',
                    des: {
                        line1: '<span style="color: rgb(255, 153, 0)">★</span>粘土クリエイター !?',
                        line2: '小学生がおちゃっぴのねんど',
                        line3: '「ピカリ」を体験'
                    }
                },
                { 
                    src: require('../../assets/articles/article_8.png'),
                    link: 'https://wg-salvia.com/archives/28324',
                    des: {
                        line1: '子連れ OK ︕',
                        line2: '横浜の次世代サロン',
                        line3: '「HIKARINO」でエステ体験取材'
                    }
                },
            ],
            screenWidth: 0,
            desFontSize: 0,
        }
    },
    methods: {
        handleResize() {
        this.screenWidth = window.innerWidth;
        }
    },
    watch: {
        screenWidth(val) {
            if (val > 1600) {
                this.desFontSize = 1;
            } else if (val > 1400) {
                this.desFontSize = 1;
            } else if(val > 1200){ 
                this.desFontSize = 1;
            } else if(val > 1000) {
                this.desFontSize = 2;
            } else if(val > 500){
                this.desFontSize = 2;
            } else {
                this.desFontSize = 4;
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
    width: 95%;
    margin: 0 auto;
}
.des{
    list-style-type: none;
    color: grey;
    margin-left: -1vw;
    margin-bottom: 1vw;
}
.lone{
    padding: 1vw;
    margin: 5vw 0;
    color: grey;
}
</style>