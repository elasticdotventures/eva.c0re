notes-es6

Design, Testing, Deployment, and Maintenance of Serverless Applications for IOT & Single Page Interfaces using ES6
May 30th, 2018



*
Foreword
The purpose and scope of this document has been continually changing since I started my descent into the madness that is Javascript ES6, Vue.JS, Lambda Serverless, et al.   Collectively these are some really powerful tools, but the sheer volume of vocabulary, syntaxes, cloud services, and semi-authoritative opinions is a bit challenging.  
Every week there seems to be a new way to do something, and there is never a ‘best’ way to do anything -- this can make coming up to speed on anything really difficult.   
Finding an ‘advanced’ style can be challenging since most examples and tutorials in this ecosystem are highly decoupled, i.e. showing only how to interact with a single isolated piece, in very simple “Hello World” style syntax.   The complexity that derives with large projects, or the empty white expanse of blank canvas “new development” feels like almost completely inverting thought processes from ‘following simple’ to ‘swimming deep’.   

One of the biggest challenges in learning something that moves as fast as technology is decoding your own personal definition of “mastery” on subject topic matter.   To accelerate and measure my progress I did a few things:
I started with a “super-learner” tutorials, I.e. how can I boost my neural plasticity, speed reading, and retention skills.  
I decided to to apply structured breaks of physical exercise, in my case 100,000 pushups in a single calendar year which is roughly 275 a day.  I wanted my mind and body to both be wicked sharp. 
I mixed in an “impossibly difficult” topic to measure, in my case this was “learning chinese”, this is something where numerous progress tests were already built and the language while infinitely complex four tones, mandarin vs. dialects like cantonese & tawainese, traditional vs. romanized pinyin character sets, not to mention the literally thousands of different fonts used and different meanings and similar sounds meant by the time I was speaking Chinese, if I had put the same time into Javascript I’d be a js-fu master even if I didn’t internally feel like one -- but I needed to be ready to converse in either JS or 中文.  
Using tests, measuring study patterns, how frequently should I take breaks -- getting around blocks, adding a good mix of self-help ted talks, podcasts, and like. 

Style
Writing good commit messages



Lambda Layers
AppMesh?
AWS Step Functions
https://aws.amazon.com/step-functions/

Questions - how should the relationship between admin - superuser -- all that will be managed in a slack interface // command line || brilliant!
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
https://paqmind.com/tutorials/async-programming/callbacks/challenges/2.1.qzn/?tab=solution#top

Front
https://acss.io/  atomic css is used for generating atomic stylesheets; but doesn’t play nicely with others. 
https://github.com/lucagez/Debucsser - css debugging
http://getbem.com/naming/
https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
https://github.com/imbrn/v8n

https://gist.github.com/swalkinshaw/3a33e2d292b60e68fcebe12b62bbb3e2
https://github.com/serverless/serverless-graphql

https://cloudacademy.com/blog/how-to-write-graphql-apps-using-aws-lambda/
https://github.com/carlipa/aurora-graphql

https://github.com/oussamahamdaoui/forgJs
Object validation

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

I don’t really know exactly where this paper is going to go -- I’m definitely going to spend a few moments of your time to share with you the benefits of joining the modern ‘es6’ religion. After that I intend to discuss why functional and observable (not object-oriented) programming patterns are amazing, and why they are better at managing “modern” applications than traditional MVC or MVVM models. During this discussion we’ll also talk briefly about EMR which means “Elastic Map Reduce” and why it’s amazing for processing large data-sets. 

Next I suppose we’re going to talk about infinitely scalable serverless application infrastructures “lambda functions” that eliminate an entire layer of complexity called “the server instance” and replace it with a giant cloud based function handler.  That cloud is capable of executing code in dozens of languages, and thousands of frameworks - but ES6 is the winner for full-stack.     We’re going to focus in on Es6 also known as ‘modern javascript’ and we’re going to build a highly maintainable, multi-language friendly (i18n), localized (i10l) supported, that will literally scale as big as the cloud it’s running on, we’re going to do this using vue-js, and we’re also going to use vue-x for managing application state.  

Then we’re going to look at some of the new frameworks and tools for designing mobile and desktop applications, and how we can take all that vue.js and vue-x code and package it for the windows desktop, along with the android and ios app store.  
Modern javascript with some libraries like rx-js, and nuxt can shorten development time and reducing code footprints (and bugs) by a factor of 10, also reducing development costs by the same.  So what previously would have taken hundreds of thousands of lines of code can now be done in  just a few dozen .. it was quite intimidating how powerful these patterns are when I first saw them.   Now, that’s the good part -- the bad part is there’s no ‘right way’ to do anything, and good luck trying finding a demo that shows a how to build something with this level of complexity?   No, that doesn’t exist -- it’s a secret, until now. ..  because you can’t cut and paste your way through this stuff, you need to be able to ‘think’ and apply these abstract patterns to real business problems.  

This is where things get tricky, because historically these areas were managed by separate teams that needed to independently reimplement huge bits of logic.  If the application is built properly, with test cases,  that person will be the “IT guy (or gal)” .. the “IT” stands for “IT” as in, all of “IT”, with logging and debugging, and looped in customer service.   I’m talking about literally replacing the need for hundreds of developers with just a few. In a word: every developer can be a superstar if they know how to use these tools properly.   And that person will be the last programmer in an organization, until their role is finally assimilated by a sentient AI. 

Next, we’re going to discuss a refactoring pattern for migrating existing server side monolithic applications into this style.   In this example we’re going to use PHP since it’s not natively supported on lambda, but the same basic pattern can be used for other legacy languages like perl, or java. 

However if the application is not planned properly then it will be ‘rigid’ need to go through countless rewrites to add what will appear to be trivial functionality. Teams will be in a continual state of ‘churn’ of modules, designs, etc. while business and customer requirements are set aside to deal with infrastructure.    Along the way I’ll probably spend some time lambasting Agile and Scrum patterns in favor of a forgotten art known as “tandem” or “pair programming” which was a critical component of “xtreme programming” -- the predecessor to the standardized ‘agile’ method. 
Finally, I’m going to spend a few chapters explaining to you why my opinions are correct and some stories from the trenches I’ve learned.   I’m doing this last because I think it’ll be a better use of our time together to jump right into the subject matter and then I’ll talk about my experiences and my qualifications after we’re better acquainted.  But suffice to say, I’ve done your job -- i’ve held every major role in the IT field including pc technician, system admin, network engineer, database administrator, programmer, CTO, cloud architect, CEO, and then back to lowly code monkey with no responsibility.   I’m a serial entrepreneur, a hacker, a renaissance man,  a puzzle solver, and an efficiency enthusiast.   I hope my work will speak for itself. 
This paper is going to over a lot of territory, from design methodology to real world configurations. The most talented technical people are also the laziest and that isn’t necessarily a bad thing.  These new patterns let us create new complex products so easily.  In my particular case, I designed this stack so that I would need substantially fewer people, and the talent of those people would be lower (making them easier to hire, and more expendable).   The more engineers, the lazier they will individually become -- it’s like this in any big company really. “It’s not my job”, but nobody really know’s who’s job anything is anymore?   
Nothing without a cost
Everything costs ‘something’ but the question is ‘how much’ and ‘when will the check come’.  Cloud applications are particular

Overview	2
“use strict”;	6
Arrow functions () => { }	6
Control variable hoisting: var, let, const	7
Variable interpolation using backticks	8
filter(), map(), reduce(), scan()	8
functors 'map'	8
anonymous functions	8
.bind()	9
spread operator ...	9
native promises means NO MORE CALLBACKS!	9
Streams	10
Monads and flatMap() // Promises and then() // Streams and bind() or chain()	10
Object & Class creation	10
Chain Operator	11
Unit test	11
Generators	11
Vue.js	12
vue-x	12
I18n -- internationalization support	12
* lodash i.e. '_';	13
* rxjs	13
* webpack	13
* desktop apps via electron	13
* Cordova // phonegap vs nativescript	13
Lorem ipsum dolor sit	17
Lorem ipsum dolor sit amet, consectetuer adipiscing elit!	18


Es6
coding in modern es6 vs es5 (and earlier versions of javascript)


And if you’re like me -- you probably never really liked javascript .. I don’t blame you, in my opinion it was a language that was incredibly messy due some early design flaws, and it had grown into this unwieldy monstrosity that I loathed.  The early MVC callback patterns and the compatibility across browsers was frustrating, my procedural code models could not be implemented -- but the asynchronous patterns in JS always seemed to make my code either suck at error handling, or end up in nested in 26 layers of ‘callback hell’.   Then the automatic variable hoisting caused global variables, and the lack of libraries without a packager, not to mention having to debug code in a browser and support multiple browsers .. seriously, fuck apple’s safari.  Then to solve these -- there was this explosion of half-baked frameworks like angular, angular 2, mustache, handlebars, react, redux, and the packagers browserify, webpack, and polyfill modules like lodash that exploded and it seemed like a new package or helper library came out every week, and most of them where bug ridden or had big donut holes, or incompatibilities, and these religious holy wars started and it was too much and so i just sorta tapped out right after facebook released react and jsx .. i was like ‘fckdish1t’ 

But then something happened in the last year or so, and it happened right under my nose. It wasn’t until I was developing a new IOT project and needed a way to design a few easily scalable AWS lambda functions that I decided to wade back into the node.js pool and give javascript another chance … the allure of being able to master a language that could do backend ‘serverless’ lambda, serverless front-end single page (via vue.js or redux), mobile (via cordova, phonegap), and cross platform desktop (via electron which is what spotify, and slack are built in) was appealing.   

I ended up burning 6 months of my life studying and trying new libraries, coding patterns, and basically forcing myself to ‘forget’ everything i new about programming and start over as a noob. It’s been quite a humbling journey, and honestly one of the most rewarding in my life ..  (to be fair, I also learned Chinese at the same time -- and Chinese *might* have been easier)

But i’m putting together this guide with the intention and hopes that it will inspire you to see that javascript has changed -- and that internally we should be using more javascript.   Es6 specifically produces some of the most robust ‘composable’ code i’ve seen in any language.  

I remember making the jump from the procedural styles to object oriented about 12 years ago, thinking in object oriented designs really simplified a lot.  Moving from object oriented to functional is a similar jump in terms of complexity and new patterns -- basically you’ll need to forget most of the object oriented stuff you know  (no more code and data together) .. but when dealing with more complex interact applications and giant data-sets functional programming is hands down the winner in terms of composable and robust code. 

Composable code should be the goal -- it’s a lot of functionality, with maximum clarity, with minimal effort which should be the measurement of ‘the best’ way to do anything in programming.  

Without further delay ..   (btw i’m not positively sure all this stuff is es6, it might be es5, or es4 or whatever .. but the point is .. it’s usable now) … also i link a lot to funfunfunction youtube, i really like mpj --  i spent many hours (around 60) in udemy doing es6, react, redux, etc. and also scouring youtube and watching lots of people give conflicting advice -- but i really like the funfunfunction format -- it’s small, silly, easy to parse over morning coffee.   It became part of my daily routine and i’ll go back to them when i want a reference.  
“use strict”;
This enables es6 syntax - use this. 


Read Stuff from the Environment
Not specifically es6, but something that’s handy to know early on. 
https://flaviocopes.com/node-environment-variables/
Arrow functions () => { }
Small, inline, single purpose.  These are syntax sugar, they aren’t required -- however they make the code much more readable. 

https://www.youtube.com/watch?v=6sQDTgOqh-I

(function(event) {  return event.type }) 

But also the even more abbreviated version which doesn’t 
.filter( event => event.type === ‘attack ‘ );

Is the same as:

.filter( function (event) {
    Return event.type === ‘attack’
})

But finally the ability to assign functions to verb named variables is also pretty cool 
const reduceTotal = (prev,x) => (prev || 0) + x


const isAttack = e => e.type === ‘attack’
// then just use:
.filter(isAttack)

Control variable hoisting: var, let, const
Variable hosting, where variables once declared become global regardless of scope was obnoxious.  Use ‘’let’ instead of ‘var’ and this problem goes away (variables stay within their scoped context)

https://www.youtube.com/watch?v=sjyJBL5fkp8

const preserves mutable state by preventing reassignment, but does not prevent mutations to internal state (ex: you can change keys inside a const hash) .. by minimizing mutable state it helps the compiler (and other future developers) optimize and understand the code. 

Variable interpolation using backticks
Old way:   ‘this will output a ‘+ variable + ‘ okay?’;
New way: `this will output a ${variable} okay?`;

filter(), map(), reduce(), scan()
filter()  https://www.youtube.com/watch?v=BMUiFMZr7vk
map() https://www.youtube.com/watch?v=bCqtb-Z5YGQ
reduce() https://www.youtube.com/watch?v=Wl98eZpkp-c

functors 'map'
A “Functor” (that’s the right name) is an object, array or tree that supports a ‘map()’ function.  A map() function that iterates through the object and returns a new object (of the same type)  with the function applied.   Technically filter() is not a functor, but it’s often grouped in with functors.  

https://www.youtube.com/watch?v=YLIH8TKbAh4&index=8&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84

Functors return the same type, so they can be chained.   Streams are also functors, but they can be applied to time which is really cool.

https://www.youtube.com/watch?v=9QveBbn7t_c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=11
anonymous functions 

 () => { };  ability to return two+ operators from a single function! 

.bind() 
Realizing that javascript is both a functional and object oriented programming language -- and that you can use both code patterns (without severe tradeoffs) is pretty cool.  
So .bind() and the “this” variable. 
https://www.youtube.com/watch?v=GhbhD1HR5vk

More examples of this and bind()
https://www.youtube.com/watch?v=PIkA60I0dKU


spread operator ...
… copies a hash, array, or whatever 

https://eloquentjavascript.net/10_modules.html


native promises means NO MORE CALLBACKS!
return new Promise((resolve,reject) => {
   // resolve == call with success value
   // reject == call with failure-error value
});

Promise.all([
	loadImage('images/cat1.jpg');
]).then( (images)=>{
}).catch( (error)=>{
});


Error Handling
https://flaviocopes.com/node-exceptions/


Streams
The ability to process time series data as it arrive is a feature called a stream, it’s very cool. Streams can be connected to a variety to data-sources such as reading very large files where it simply isn’t possible to load it all into memory. 

https://www.youtube.com/watch?v=UD2dZw9iHCc&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=10

I’m a currenlty fan of rxjs -- my crash course was this video:
https://www.youtube.com/watch?v=AslncyG8whg

I still plan to study bacon.js 
Monads and flatMap() // Promises and then() // Streams and bind() or chain()
flatMap() simply waits for a promise to resolve, so now there can be all this unresolved data flying around in the application -- but when you need to use it (i.e. save it to a database) you can call flatMap() and you’ll get the resolved value. 

Object & Class creation

https://www.youtube.com/watch?v=GhbhD1HR5vk

Prototypes vs Classes (part 2):
** i love the explanation of the ‘Class’ keyword, why it’s in es6, why prototypes are still relevant, and how it’s like  “giving needles to drug addicts” -- brilliant! 
https://www.youtube.com/watch?v=YkoelSTUy7A

Prototypes allow chained delegation
Object.setPrototypeOf(someVar, thePrototype)

The function.prototype.property exists on every function!
function Dog() {} 
Dog.prototype.breed = ‘something’;
let myDoggie = new Dog()
myDoggie.breed // is something
Chain Operator
https://www.youtube.com/watch?v=FKRVqtP8o48
Some.?property.?that.?wasnt.?defined

But with the chain operator .? this won’t crash anymore! 
Unit test
WHY https://www.youtube.com/watch?v=Eu35xM76kKY
WHAT https://www.youtube.com/watch?v=XsFQEUP1MxI

Generators
The co library creates generators which are basically a lazy coders way to make certain bits of code appear that they’re running synchronously (when they’re not really) using the yield method.

const co = require(‘co’)

co( function *() {
    const x = yield someAsyncPromise()
    const y = yield x.someOtherAsyncPromise()
    console.log(y.someValue);  // magic!
})

https://www.youtube.com/watch?v=ategZqxHkz4









Vue.js
vue-x
Basically vue-x provides a central data repository for managing data and state, and then all components pull from that (versus storing the data in each component)
SHIT (overview) https://www.youtube.com/watch?v=2CSr2vBApSI
https://youtu.be/BGAu__J4xoc
Interesting +1 https://www.youtube.com/watch?v=kiSEmYio_k8

Use a “store.js” file
 import Vue from ‘vue’;
 Import Vuex from ‘vuex’; 
I18n -- internationalization support
Vue.js has a great i18n library called vue-i18n
https://kazupon.github.io/vue-i18n/en/

* lodash i.e. '_';
* rxjs
* webpack 
* desktop apps via electron
* Cordova // phonegap vs nativescript
https://itnext.io/getting-started-with-building-mobile-apps-with-nativescript-and-vue-js-59a7dcf24cd


I’m using twomon usb connected to my phone. 


Es6 cheatsheet
https://github.com/DrkSephy/es6-cheatsheet


-----

Without further delay -- here is how i setup a brand new project.

npm install -g @vue/cli

First, a diagram -- what the major data components and how will they interact, blah blah ..??
I am using mocha + nightwatch for E2E (and that is reflected in my presets) without typescript. 

Now the old fashion way is to setup everything by hand -- ain’t nobody got time for that.  npm init
npm install --save vue vuex blah balh …

vue create myprojectname

After this i should have a basic spa (single page app) which i can access by running 
npm run serve

Access the new page at http://localhost:8080
Next, let’s install vue-i18n via the vuex-i18n and internationalize the sample (yay!)

instructions:
https://github.com/dkfbasel/vuex-i18n

** note: i put this in the store.js file, since this uses vue-i18n underneath the hood (it just optimizes it for vue-x) 

<select v-bind:

Todo:
** tests for i18n



Setup lambda api --







There is no “right” way
There are lots of opinions - which one is right?
The ‘new’ stack vs. ‘old’s stack
The ‘new’ opportunities:  Single Page vs.
Considering the hidden costs // Identifying Winners
Recyclability of a ‘core’
Application maintenance is 96% of the total cost
Understanding Test-driven-development (TDD)
Procedural vs. Object-Oriented vs. Functional & Objective programming patterns
What exactly is “State” of an application
Thinking about “State” as a distributed 
Documentation
Modern Application Components: Cloud & Interfaces
Why ‘Javascript’’ -- can be summed up with two words: “localization” and “i18n”
But what about “python”, “java”, “perl”, blah blah blah
GraphQL vs. API’s
Choosing a “Cloud Infrastructure”
AWS
Google
Azure
Oracle
I really dislike Oracle, on a personal level for their heavy handed and often dubiously-ethical  business practices stemming from Database licensing.  If you are dumb enough to get locked into their cloud, somebody in your organization is probably getting a kickback.  Send a letter your state attorney. 
javascript classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Eva {
   constructor() {
   }
}
