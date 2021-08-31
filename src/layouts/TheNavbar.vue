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
                <q-list style="min-width: 300px" class="lt-sm q-mt-md q-mb-md">
                    <div class="row lt-md">
                        <div class="col-6 column items-center">
                            <a href="https://twitter.com/salvia__mama" target="_blank">
                                <q-img src="../assets/twitter-logo-blue.png" width="37px"></q-img>
                            </a>
                        </div>
                        <div class="col-6 column items-center">
                            <a href="https://www.instagram.com/salvia_mama/" target="_blank">
                                <q-img src="../assets/instagram-logo.png" width="33px"></q-img>
                            </a>
                        </div>
                    </div>
                </q-list>
                <q-separator inset />
                <q-list style="min-width: 300px" >
                    <q-item clickable >
                    <q-item-section>レポラマとは</q-item-section>
                    </q-item>
                    <q-item clickable >
                    <q-item-section>レポラマ紹介</q-item-section>
                    </q-item>
                    <q-item clickable >
                    <q-item-section>レポの流れ</q-item-section>
                    </q-item>
                    <q-item clickable >
                    <q-item-section>価格</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>その他</q-item-section>
                    </q-item>
                    <q-item clickable >
                    <q-item-section>よくある質問</q-item-section>
                    </q-item>
                    <q-item clickable >
                    <q-item-section>お問い合わせ</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>

        <q-tabs align="right" class="gt-sm">
            <a class="nav">レポラマとは</a>
            <a class="nav">レポラマ紹介</a>
            <a class="nav">レポの流れ</a>
            <a class="nav">価格</a>
            <a class="nav">その他</a>
            <a class="nav">よくある質問</a>
            <a class="nav">お問い合わせ</a>
        </q-tabs>
      </q-toolbar>

    </q-header>
</template>

<script>

export default {
   
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
</style>