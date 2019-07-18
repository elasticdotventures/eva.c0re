https://vuejs.org/v2/guide/reactivity.html

data is the getter/setter

the setter notifies the watcher
render notifies getter then getter notifies watcher
watcher can trigger re-render 

// The getter/setters are invisible to the user, 
but under the hood they enable Vue to perform 
dependency-tracking and change-notification when properties are accessed or modified.

Declaring all reactive properties upfront makes the component code easier to understand when revisited later or read by another developer.
