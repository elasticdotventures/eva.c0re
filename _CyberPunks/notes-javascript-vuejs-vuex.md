notes-javascript-vue

// https://github.com/lazorfuzz/liowebrtc


Vue Component Standards:  A component should be in a hierarchy; i.e. a filesystem based on it’s interface role & responsibility.  

EV uses vue-property-decorator (whenever possible)
    @Emit
    https://www.telerik.com/blogs/how-to-emit-data-in-vue-beyond-the-vuejs-documentation

    @Inject
    @Model
    @Prop
    @Provide
    @Watch





I want to avoid generic names like “modal_box” as much as possible and just farm those out to a “common” area.  
In order for a module to be in /common it must share at least two dependencies.     

Large groups of components will be organized in “subsystems” i.e. “farm management”; and they shall have unit tests declaring what modules they individually 
require i.e. the subsystem level gets it’s own ‘jargon’ word.  

Vuetify is a "strategy" in Javascript terminology. 
Strategy: A decorator lets you change the skin of an object; a strategy lets you change the guts. 
These are two alternative ways of changing an object.

Unit testing; upcoming discussion. 

!todo javascript animation
https://www.youtube.com/watch?v=0aG2hhvS1sM

!todo https://sentry.io/for/vue/

SLOTS tutorial:
BEST
https://www.smashingmagazine.com/2019/07/using-slots-vue-js/?utm_source=mybridge&utm_medium=blog&utm_campaign=read_more

serverless application is in /projects/eva.core/aws/contact-form-api/

