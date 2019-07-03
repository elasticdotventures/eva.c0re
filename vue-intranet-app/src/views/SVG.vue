<template>
  <div class="about">
    <h1>This is SVG page</h1>


<h2>Static vue-awesome v-icon (Hardcoded) Example</h2>
<i class="fas fa-flaun-awesome"></i>

<!-- https://fontawesome.com/how-to-use/with-the-api/setup/importing-icons -->
<i class="fas fa-question-circle"></i> <!-- solid style of the question circle icon -->
<i class="far fa-question-circle"></i> <!-- regular style of the question circle icon -->
<i class="fal fa-question-circle"></i> <!-- light style of the question circle icon -->

<i class="fab fa-facebook"></i>        <!-- facebook brand icon-->
<i class="fab fa-facebook-f"></i>      <!-- facebook "f" brand icon-->

<font-awesome-icon icon="question"></font-awesome-icon>
<font-awesome-icon scale="3" icon="circle"></font-awesome-icon>


<i>broken by vuetify</i>
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
<font-awesome-icon spin icon="user-secret"></font-awesome-icon>
<font-awesome-icon pulse icon="camera"></font-awesome-icon>
 
    <main class="w-100 min-vh-100 bg-gray8 white sans-serif pa6 flex flex-column justify-center items-center">
      <div class="mw8 center overflow-hidden">
        <h2 class="tc ttu tracked3 b f2 mt0 mb2 teal0 o-30">vue-fontawesome</h2>

        <ul class="list ma0 pa0 flex flex-row flex-wrap teal4">
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-icon icon="coffee" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            flipped <font-awesome-icon :icon="['fas', 'coffee']" flip="horizontal" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            far comment <font-awesome-icon :icon="['far', 'comment']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            child w/circle :mask<font-awesome-icon icon="child" transform="shrink-4 down-2 right-2" :mask="['fas', 'circle']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            twitter <font-awesome-icon :icon="['fab', 'twitter']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            twitter w/circle :mask<font-awesome-icon :icon="['fab','twitter']" transform="shrink-6 down-1 right-1" :mask="['fas', 'circle']" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            queen (computed) <font-awesome-icon :icon="queen" size="4x" />
          </li>
          <li class="pv3 ph2 ma0 link grow">
            <font-awesome-layers full-width class="fa-4x">
              <font-awesome-icon :icon="['fas', 'archive']"/>
              <font-awesome-layers-text class="red8" transform="down-3 shrink-14" value="SECRET"/>
            </font-awesome-layers>
          </li>
          <li class="pv3 ph2 ma0 link grow">
            2x <font-awesome-icon :icon="['fab', 'vuejs']" size="2x" />
          </li>
        </ul>
      </div>
    </main>




<h2>Dynamic Example</h2>
https://github.com/FortAwesome/vue-fontawesome#codesandbox-starter-sample-%F0%9F%9A%80

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
              <!-- <v-icon :name="v">{{v}}</v-icon> -->
              <font-awesome-icon icon="user-secret"></font-awesome-icon>
              <font-awesome-icon icon="camera"></font-awesome-icon>
              <font-awesome-icon>user-secret</font-awesome-icon>
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
 //import 'vue-awesome/icons'
// import IconVue from 'vue-awesome/components/Icon.vue';


// globally (in your main .js file)
// requiring the UMD module
 // var VA_Icon = require('vue-awesome')
 // Vue.component('v-icon', VA_Icon)
 // var FA_Icon = require('vue-fontawesome');
//Vue.component('v-icon', FontAwesomeIcon)

import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

@Component({
  /* props: {
    propMessage: String
  }, */ 
  components: {
    HelloWorld,
  },
  computed: {
    queen () {
      return faChessQueen
    }
  }
})
export default class Home extends Vue {

  // https://github.com/vuejs/vetur/issues/261
  // fa_icons = VA_Icon.icons;
  // fa_icons = FontAwesomeIcon  
 
}

</script>