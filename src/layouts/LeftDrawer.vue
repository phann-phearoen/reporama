<template>
    <q-drawer 
    show-if-above
    side="left" 
    width="80" 
    style="background-color: rgb(205, 75, 128)"
    class="gt-sm"
    >
        <q-list style="margin-top: 150px" class="column items-center">
            
            <a href="https://twitter.com/salvia__mama" style="margin-bottom: 50px" class="twitter social" target="_blank">
                <q-img src="../assets/twitter-logo-blue.png" width="60px" class="img"></q-img>
            </a>
            
            <a href="https://www.instagram.com/salvia_mama/" class="instagram social" target="_blank">
                <q-img src="../assets/instagram-logo.png" width="55px" class="img"></q-img>
            </a>
            
        </q-list>
      
    </q-drawer>
</template>

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
}

</style>