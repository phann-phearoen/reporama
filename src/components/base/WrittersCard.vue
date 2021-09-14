<template>
    <q-card class="my-card gt-xs">
      <q-card-section>
        <hr class="purplish-line" :style="{ height: lineHeight + 'px' }">
      </q-card-section>
      <q-card-section>
            <div class="row q-gutter-lg">
                <div class="col-2 column items-center">
                    <q-img :src="src" :style="{ width: avatarWidth + '%' }"></q-img>
                    <div class="name" :style="{ fontSize: nameSize + 'vw' }">{{ name }}</div>
                </div>

                <div class="col">
                    <div class="row description" :style="{ fontSize: desSize + 'vw' }">
                        {{ des }}
                    </div>
                    <div class="row gt-sm">
                        <div class="col-3 bottom-right left">
                            <base-badge 
                            :label="'記事テストのご参考'"
                            :color="'rgb(150, 131, 229)'" 
                            :pad="badgePad"
                            :fontSize="badgeFontSize"
                            >
                            </base-badge>
                        </div>
                        <div class="col bottom-right right">
                            <ul>
                                <li v-for="link in links" :key="link">
                                    <a :href="link.ref" target="_blank" class="link" :style="{ fontSize: linkSize + 'vw' }">{{ link.text }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </q-card-section>
      <q-card-section class="lt-md">
        <div class="row">
            <div class="col column items-center">
                <base-badge 
                :label="'記事テストのご参考'"
                :color="'rgb(150, 131, 229)'" 
                :pad="badgePad"
                :fontSize="badgeFontSize"
                >
                </base-badge>
            </div>
        </div>
        <div class="row">
            <ul>
                <li v-for="link in links" :key="link">
                    <a :href="link.ref" target="_blank" class="link" :style="{ fontSize: linkSize + 'vw' }">{{ link.text }}</a>
                </li>
            </ul>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card lt-sm" style="width: 95%">
      <q-card-section>
        <hr class="purplish-line" :style="{ height: lineHeight + 'px' }">
      </q-card-section>

      <q-card-section>
        <div class="column items-center">
            <q-img :src="src" :style="{ width: avatarWidth + '%' }"></q-img>
            <div class="name" :style="{ fontSize: nameSize + 'vw' }">{{ name }}</div>
        </div>
      </q-card-section>

      <q-card-section>
            
        <div class="row description" :style="{ fontSize: desSize + 'vw' }">
            {{ des }}
        </div>
        <div class="row q-mt-md">
            <base-badge 
            :label="'記事テストのご参考'"
            :color="'rgb(150, 131, 229)'" 
            :pad="badgePad"
            :fontSize="badgeFontSize"
            >
            </base-badge>
        </div>
        <div class="">
            <ul>
                <li v-for="link in links" :key="link">
                    <a :href="link.ref" target="_blank" class="link" :style="{ fontSize: linkSize + 'vw' }" style="margin-left: -2vw">{{ link.text }}</a>
                </li>
            </ul>
        </div>
      </q-card-section>
    </q-card>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    props: ['src', 'name', 'des', 'links', ],
    components: { BaseBadge, },
    data() {
        return {
            screenWidth: 0,
            badgeWidth: 0,
            badgePad: 0,
            badgeFontSize: 0,
            lineHeight: 0,
            avatarWidth: 0,
            nameSize: 0,
            desSize: 0,
            linkSize: 0,
        }
    },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth;
        },
    },
    watch: {
        screenWidth(val) {
            if (val > 1600) {
                this.badgePad = 1;
                this.badgeFontSize = 1;
                this.avatarWidth = 90;
                this.lineHeight = 2;
                this.nameSize = 1;
                this.desSize = 1;
                this.linkSize = 1;
            } else if (val > 1400) {
                this.badgePad = 1;
                this.badgeFontSize = 1;
                this.avatarWidth = 90;
                this.lineHeight = 2;
                this.nameSize = 1;
                this.desSize = 1;
                this.linkSize = 1;
            } else if(val > 1200){ 
                this.badgePad = 1;
                this.badgeFontSize = 1;
                this.avatarWidth = 90;
                this.lineHeight = 2;
                this.nameSize = 1;
                this.desSize = 1;
                this.linkSize = 1;
            } else if(val > 1000) {
                this.badgeFontSize = 1.2;
                this.avatarWidth = 100;
                this.lineHeight = 2.5;
                this.nameSize = 2.5;
                this.desSize = 2;
                this.linkSize = 2;
            } else if(val > 500){
                this.badgeFontSize = 1.4;
                this.avatarWidth = 100;
                this.lineHeight = 2;
                this.nameSize = 3;
                this.desSize = 2.5;
                this.linkSize = 2.5;
            } else {
                this.badgeFontSize = 4;
                this.badgePad = 4;
                this.lineHeight = 1.2;
                this.avatarWidth = 70;
                this.nameSize = 5;
                this.desSize = 4;
                this.linkSize = 4;
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
.my-card{
    width: 80%;
    margin: 2vw auto -1vw auto;
}
.purplish-line{
    background-color: rgb(150, 131, 229);
    width: 100%;
    border: none;
}

.name{
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
}

ul {
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: rgb(150, 131, 229);
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}

.bottom-right{
    flex-direction: column;
    flex-grow: 0 1;
    margin-top: 2vw;
}
.left{
    padding-top: 1vw;
}
</style>