<template>
  <!-- Section: intro -->
  <section id="intro" class="intro">
    <h1>The Developer Playground</h1>
    <p>time: {{myvar}}</p>
    <ul>
        <li><router-link to="/eva">Go to Eva</router-link></li>
    </ul>
    
<h1>Jitsi</h1>

<div id="example-1">
  <button v-on:click="GoGoJitsi();">Jitsi</button>
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>


   </section>
  <!-- /Section: intro -->
  </template>

<script type="ts">




export default {
  // components: { Cookie }
  el: '#example-1',
  methods: {
    GoGoJitsi : () => {
        alert('helloox');
    }
  },
  data: ()=> {
    return {
      myvar : 'hello',
      counter : 0
    }
  }
}

</script>


<!--

CAKE:
https://flaviocopes.com/vue-components/

-->
