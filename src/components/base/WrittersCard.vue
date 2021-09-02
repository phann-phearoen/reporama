<template>
    <q-card class="my-card">
      <q-card-section>
        <hr class="purplish-line">
      </q-card-section>
      <q-card-section>
          <div class="row q-gutter-lg">
              <div class="col-2 column items-center">
                  <q-img :src="src" width="80%"></q-img>
                  <div class="name">{{ name }}</div>
              </div>

              <div class="col">
                  <div class="row description">
                      {{ des }}
                  </div>
                  <div class="row">
                      <div class="col-3 bottom-right left">
                          <base-badge 
                          :label="'記事テストのご参考'"
                          :color="'rgb(150, 131, 229)'" 
                          :width="'75%'" :pad="'1vw'" 
                          :fontSize="'1vw'">
                          </base-badge>
                      </div>
                      <div class="col bottom-right right">
                          <ul>
                              <li v-for="link in links" :key="link">
                                <a :href="link.ref" target="_blank" class="link">{{ link.text }}</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </q-card-section>
    </q-card>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    props: ['src', 'name', 'des', 'links', ],
    components: { BaseBadge, },
}
</script>

<style scoped>
.my-card{
    width: 80%;
    margin: 2vw auto;
}
.purplish-line{
    background-color: rgb(150, 131, 229);
    width: 100%;
    height: 2.5px;
    border: none;
}

.name{
    font-size: 1.2vw;
    color: rgb(205, 75, 128);
    font-weight: 500;
}
.description{
    margin: .5vw auto;
    font-size: 1vw;
    color: grey;
}
.link{
    text-decoration: none;
    color: rgb(150, 131, 229);
    font-size: 1vw;
}
.bottom-right{
    flex-direction: column;
    flex-grow: 0 1;
    margin-top: 2.5vw;
}
.left{
    padding-top: 1vw;
}
</style>