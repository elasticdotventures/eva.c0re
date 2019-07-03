 <template v-slot:items="props">
 <!--
     In Vuetify, the v-app component and the app help bootstrap your application with the proper sizing around v-content. This allows you to create truly unique interfaces without the hassle of managing your layout. The v-app component is REQUIRED for all applications. This is the mount point for many of Vuetify's components and functionality.
-->
 <v-app>


  <h1>Material Design (Vuetify Layout)</h1>
  <a href='https://vuetifyjs.com/en/framework/grid'>https://vuetifyjs.com/en/framework/grid</a>
  <p>
      v-container &gt; v-layout &gt; v-flex &gt; v-spacer
  </p>
    
    <h2>v-layout (row, wrap)</h2>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">xs12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">xs6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">xs4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">xs3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">xs2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">xs1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>


    <h2>Fluid Container</h2>
  <v-container fluid>
    <v-layout row>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="green darken-3"
        >
          <v-card-text>#1 Im a Grow Flex</v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        shrink
        pa-1
      >
        <v-card
          dark
          color="green darken-1"
        >
          <v-card-text>#2 Im a Shrink Flex</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="green darken-1"
        >
          <v-card-text>#1 Im a Grow Flex</v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        shrink
        pa-1
      >
        <v-card
          dark
          color="green lighten-1"
        >
          <v-card-text>#2 Im a Shrink Flex</v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="green darken-4"
        >
          <v-card-text>#3 Im a Grow Flex</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
        shrink
        pa-1
      >
        <v-card
          dark
          color="green darken-3"
        >
          <v-card-text>#1 Im a Shrink Flex</v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="green"
        >
          <v-card-text>#2 Im a Grow Flex</v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        shrink
        pa-1
      >
        <v-card
          dark
          color="green lighten-1"
        >
          <v-card-text>#3 Im a Shrink Flex</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

    <h1>v-spacer</h1>
    <v-spacer />
    
    <h1>v-container gridlist (offers gutter control)</h1>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon alt="arrow_back">arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>v-toolbar-title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader>v-subhead</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>v-subhead</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
              <img :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-footer class="mt-5"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>






</v-app>
</template>



<!--
<script>
  import Button from 'material-components-vue/dist/button'
</script>

<style>
  @import "material-components-vue/dist/button/button.min.css";
</style>
-->
<!--
<script>
import Button from 'material-components-vue/dist/button'
Vue.use(Button)

export default {
  // ...
}
</script>

<style lang="scss">
  @import "material-components-vue/dist/button/styles";
</style>
-->
