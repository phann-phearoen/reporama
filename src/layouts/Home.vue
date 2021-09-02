<template>
  
  <the-top></the-top>

  <definition></definition>

  <intro></intro>

  <work-flow></work-flow>

  <div class="row" style="height: 500px"></div>

</template>

<script>
import TheTop from '../components/TheTop.vue';
import Definition from '../components/Definition.vue';
import Intro from '../components/Intro.vue';
import WorkFlow from '../components/WorkFlow.vue';

export default {
  components: { TheTop, Definition, Intro, WorkFlow, },
  
}
</script>