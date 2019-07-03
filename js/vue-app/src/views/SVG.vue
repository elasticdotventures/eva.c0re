<template>
  <div class="about">
    <h1>This is SVG page</h1>

<h2>Static (Hardcoded) Example</h2>
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

<h2>Dynamic Example</h2>
<v-layout row>
  <v-flex xs12 offset-sm1>
    <v-card>
      <v-toolbar flat>
          <v-toolbar-title>v-toolbar-title</v-toolbar-title>
          <v-spacer>v-spacer</v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader>v-subhead</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="(i,v) in fa_icons" :key="i.name" xs4>
              <v-icon :name="v" /> 
              <span style="color: #b2bcbd">{{ v }}</span>
            </v-flex>
          </v-layout>
        </v-container>
    </v-card>
  </v-flex>
</v-layout>


  <span >
  </span>

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
import IconVue from 'vue-awesome/components/Icon.vue';

// globally (in your main .js file)
// requiring the UMD module
var VA_Icon = require('vue-awesome')
Vue.component('v-icon', VA_Icon)

@Component({
  /* props: {
    propMessage: String
  }, */ 
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  // https://github.com/vuejs/vetur/issues/261
  fa_icons = VA_Icon.icons;
 
}

</script>