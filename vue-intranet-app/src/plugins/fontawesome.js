import Vue from 'vue'

// 
import { library, icon, config, parse } from '@fortawesome/fontawesome-svg-core'
// https://fontawesome.com/how-to-use/with-the-api/methods/parse-transform
// parse.transform('grow-2 left-4 rotate-15')

// https://fontawesome.com/how-to-use/with-the-api/setup/configuration
// console.log(config.autoA11y) // true


// Solid icons have prefix “fas” and use <i class=”fas fa-flag”>
import { fas } from '@fortawesome/free-solid-svg-icons'
// Regular icons have prefix “far” and use <i class=”far fa-flag”>
import { far } from '@fortawesome/free-regular-svg-icons'
// Brands icons have prefix “fab” and use <i class=”fab fa-font-awesome”>
import { fab } from '@fortawesome/free-brands-svg-icons'

// COMMERCIAL:
// Light icons have prefix “fal” and use <i class=”fal fa-flag”>

// for transitions/layers
// https://fontawesome.com/how-to-use/with-the-api/methods/layer


// https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText  } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)
// dom.i2svg()

Vue.component('font-awesome-icon', FontAwesomeIcon)

// import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


