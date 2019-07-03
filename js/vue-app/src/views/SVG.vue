<template>
  <div class="about">
    <h1>This is SVG page</h1>

<!-- basic -->
<v-icon name="beer" color="black"/>

<!-- with options -->
<v-icon name="sync" scale="2" spin/>
<v-icon name="comment" pulse flip="horizontal"/>
<v-icon name="code-branch" label="Forked Repository"/>

<!-- stacked icons -->
<v-icon label="No Photos">
  <v-icon name="camera" scale="1.5" />
  <v-icon name="ban" scale="3" class="alert"/>
</v-icon>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// NOTE: vue-svgicon library needs PluginOptions TypeScript definition. 
// import VueSvgIcon, { PluginOptions } from 'vue-svgicon'

/* 
 https://github.com/Justineo/vue-awesome
 https://github.com/elasticdotventures/vue-awesome
 or import all icons if you don't care about bundle size
 Updating icons
 Don't touch files in src/icons but update assets/svg/* 
 instead and run ```npm run icons``` to re-generate icon module files.
 */ 
import 'vue-awesome/icons'

// globally (in your main .js file)
// requiring the UMD module
var Icon = require('vue-awesome')
Vue.component('v-icon', Icon)

@Component({
  components: {
    HelloWorld,

  },
})
export default class Home extends Vue {}
</script>