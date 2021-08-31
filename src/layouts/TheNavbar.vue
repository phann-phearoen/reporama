<template>
    <q-header 
    style="border-bottom: solid 1.5px rgb(205, 75, 128)"
    class="bg-white text-grey no-shadow header" 
    height-hint="98">
      <q-toolbar>

        <q-toolbar-title>
            <img src="../assets/brand.jpg" width="250">
        </q-toolbar-title>

        <q-btn icon="menu" class="lt-md no-shadow">
            <q-menu auto-close>
                <q-list style="min-width: 300px" >
                    <q-item clickable>
                    <q-item-section>レポラマとは</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>レポラマ紹介</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>レポの流れ</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>価格</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>よくある質問</q-item-section>
                    </q-item>
                    <q-item clickable>
                    <q-item-section>お問い合わせ</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>

        <q-tabs align="right" class="gt-sm">
            <q-route-tab to="#" label="レポラマとは" />
            <q-route-tab to="#" label="レポラマ紹介" />
            <q-route-tab to="#" label="レポの流れ" />
            <q-route-tab to="#" label="価格" />
            <q-route-tab to="#" label="その他" />
            <q-route-tab to="#" label="よくある質問" />
            <q-route-tab to="#" label="お問い合わせ" />
        </q-tabs>
      </q-toolbar>

    </q-header>
</template>

<script>

export default {
   
}
</script>

<style scoped>

</style>