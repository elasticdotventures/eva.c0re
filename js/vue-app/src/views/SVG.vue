<template>
  <div class="about">
    <h1>This is SVG page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import VueSvgIcon, { PluginOptions } from 'vue-svgicon'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>