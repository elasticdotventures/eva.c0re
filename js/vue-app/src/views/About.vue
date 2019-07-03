



<template>
  <div class="grey lighten-5 pa-3">
    <h1 v-bind:class="{ active: isActive, 'text-danger': hasError }">This is an about page (with alerts)</h1>


    https://vuejs.org/v2/guide/transitions.html

    <v-alert border="top" value="true">
      I'm an alert with a border top
    </v-alert>
    <v-alert
      value="true"
      border="right"
      color="info"
      type="success"
      outlined="true"
      icon="check"
    >
      I'm a dismissable success alert with a border right and color info
    </v-alert>
    <v-alert
      value="true"
      dismissable="true"
      border="bottom"
      dark
    >
      I'm an alert with a border bottom and dark prop
    </v-alert>
    <v-alert
      value="true"
      border="left"
      type="info"
    >
      I'm an alert with a border left type info
    </v-alert>
    
    https://vuejs.org/v2/guide/class-and-style.html
   
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  data:{
      isActive: true,
      hasError: false
    }, 
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>


