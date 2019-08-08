Author: @b

EV Reactive development with Vue.js - there's a lot under the hood of modern javascript.
Vue-x [notes-vuex] maintain state "source of truth" in the application.
state is modified by "committing mututations"  each commit, like in GIT creates a new state.


https://vuejs.org/v2/guide/reactivity.html

# Implementation
Note: a number number of vue notes are in App.vue inside elastic.ventures

data is the getter/setter

the setter notifies the watcher
render notifies getter then getter notifies watcher
watcher can trigger re-render 

// The getter/setters are invisible to the user, 
but under the hood they enable Vue to perform 
dependency-tracking and change-notification when properties are accessed or modified.

Declaring all reactive properties upfront makes the component code easier to understand when revisited later or read by another developer.


# slots

