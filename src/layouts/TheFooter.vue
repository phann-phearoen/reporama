<template>
    <q-footer class="bg-white text-grey footer">

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

        <div class="row">
            <div class="col-3">
                <div class="main-menu">About us</div>
                <ul class="sub-menu">
                    <li><a class="link" href="https://www.wannagrow.co.jp/" target="_blank">運営会社</a></li>
                    <li><a class="link" href="https://wg-salvia.com/" target="_blank">salviaはコチラ</a></li>
                </ul>
            </div>
            <div class="col-4">
                <div class="main-menu">Contents事例</div>
                <ul class="sub-menu">
                    <li><a class="link" href="https://wg-salvia.com/archives/24249" target="_blank">おむつポーチ（マザーズ用品）</a></li>
                    <li><a class="link" href="https://wg-salvia.com/archives/31877" target="_blank">キラキラドリル（学習教育）</a></li>
                    <li><a class="link" href="https://wg-salvia.com/archives/29548" target="_blank">アイスクリームマシーン（キッチン）</a></li>
                </ul>
            </div>
            <div class="col">
                <q-img src="../assets/rogo.png" width="50%" class="rogo"></q-img>
            </div>
        </div>

        <div class="row copy-right">
            <div class="col column items-center">
                <div>Copyright © 2019 - 2021 <a class="link" href="https://www.wannagrow.co.jp/" target="_blank">WANNAGROW Inc</a>. All Rights Reserved.</div>
            </div>
        </div>

    </q-footer>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.footer{
    height: 200px;
    border-top: solid 1px rgb(205, 75, 128);
}
.main-menu{
    margin: 1.5vw 0 0vw 2.5vw;
    font-size: 2vw;
    color: rgb(205, 75, 128); 
}
.sub-menu{
    list-style-type: none;
    padding-left: .5vw;
    margin-left: 3vw;
    font-size: 1vw;
    border-left: solid 1px rgb(150, 131, 229);
}
.link{
    text-decoration: none;
    cursor: pointer;
}
.link:hover{
    color: rgb(205, 75, 128);
}
.rogo{
    margin-top: 5vw;
    margin-left: 15vw;
}
.copy-right{
    margin: 0 auto;
}
</style>