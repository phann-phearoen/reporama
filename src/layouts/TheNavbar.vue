<template>
    <q-header 
    style="border-bottom: solid 1.5px rgb(205, 75, 128)"
    class="bg-white text-grey no-shadow header" 
    height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
            <img src="../assets/brand.jpg" style="width: 250px">
        </q-toolbar-title>

        <div class="row lt-md gt-xs">
            <div class="col-6">
                <a href="https://twitter.com/salvia__mama" class="twitter social" target="_blank">
                    <q-img src="../assets/twitter-logo-blue.png" width="50px" class="img"></q-img>
                </a>
            </div>
            <div class="col-6">
                <a href="https://www.instagram.com/salvia_mama/" class="instagram social" target="_blank">
                    <q-img src="../assets/instagram-logo.png" width="45px" class="img"></q-img>
                </a>
            </div>
        </div>

        <q-btn icon="menu" class="lt-md no-shadow q-ml-xl">
            <q-menu auto-close>
                <q-list class="pop-up">
                    <q-item clickable @click="toDefinition">
                        <q-item-section>レポラマとは</q-item-section>
                    </q-item>
                    <q-separator color="white"></q-separator>
                    <q-item clickable @click="toIntro">
                        <q-item-section>レポラマ紹介</q-item-section>
                    </q-item>
                    <q-separator color="white"></q-separator>
                    <q-item clickable @click="toWorkFlow">
                        <q-item-section>レポの流れ</q-item-section>
                    </q-item>
                    <q-separator color="white"></q-separator>
                    <q-item clickable @click="toPrice">
                        <q-item-section>価格</q-item-section>
                    </q-item>
                    <q-separator color="white"></q-separator>
                    <q-item clickable @click="toFAQ">
                        <q-item-section>よくある質問</q-item-section>
                    </q-item>
                    <q-separator color="white"></q-separator>
                    <q-item clickable @click="toContact">
                        <q-item-section>お問い合わせ</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>

        <q-tabs align="right" class="gt-sm">
            <a class="nav" @click="toDefinition">レポラマとは</a>
            <a class="nav" @click="toIntro">レポラマ紹介</a>
            <a class="nav" @click="toWorkFlow">レポの流れ</a>
            <a class="nav" @click="toPrice">価格</a>
            <a class="nav" @click="toFAQ">よくある質問</a>
            <a class="nav" @click="toContact">お問い合わせ</a>
        </q-tabs>
      </q-toolbar>

    </q-header>
</template>

<script>

export default {
   methods: {
        toDefinition() {
            let target = document.getElementById("definition-top")
            window.scrollTo({ top: target.offsetTop - 100, left: 0, behavior: "smooth", });
        },
        toIntro() {
            let target = document.getElementById("intro-top")
            window.scrollTo({ top: target.offsetTop - 170, left: 0, behavior: "smooth" });
        },
        toWorkFlow() {
            let target = document.getElementById("work-flow-top")
            window.scrollTo({ top: target.offsetTop - 100, left: 0, behavior: "smooth" });
        },
        toPrice() {
            let target = document.getElementById("price-top")
            window.scrollTo({ top: target.offsetTop - 60, left: 0, behavior: "smooth" });
        },
        toFAQ() {
            let target = document.getElementById("faq-top")
            window.scrollTo({ top: target.offsetTop - 60, left: 0, behavior: "smooth" });
        },
        toContact() {
            let target = document.getElementById("contact-top")
            window.scrollTo({ top: target.offsetTop - 105, left: 0, behavior: "smooth" })
        }
   }
}
</script>

<style scoped>
.twitter:hover{
    background-color: white;
}
.instagram:hover{
    background-color: white;
}
.social{
    padding: 5px;
    border-radius: 5px;
    margin-right: 40px;
}

.nav:hover {
    color: rgb(205, 75, 128);
    text-decoration: underline rgb(205, 75, 128);
    text-underline-position: under;
}
.nav{
    cursor: pointer;
    margin-right: 4vw;
    font-size: 1vw;
}
.pop-up{
    min-width: 100vw;
    color: white;
    background-color: rgb(205, 75, 128);
}
</style>