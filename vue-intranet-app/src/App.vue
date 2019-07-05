<template>
  <v-app>
<!--
  <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
-->
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/svg">SVG Demo</router-link> | 
      <router-link to="/Material">Material Test</router-link> | 
      <router-link to="/nescss">NesCSS</router-link> | 
      <router-link to="/pokey">Pokey</router-link>
    </div>
    
    <router-view/>
  </div>
  </v-app>
</template>


<style>

/* 
<head>
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
</head>
*/
/* https://matsp.github.io/material-components-vue/guide/#import-components */
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

  
/* default vue-cli styles */

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;  */
  font-family: 'Roboto', Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  /* text-align: left;
  color: #2c3e50; */
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
