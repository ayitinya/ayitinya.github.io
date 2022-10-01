import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faBars, faXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { fab, faGithub, faTwitter, faLinkedin, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
// import envelop icon 

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas, faGithub, faEnvelope, faTwitter, faLinkedin, faLinkedinIn, fab, faBars, faStackOverflow, faXmark, faHeart)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
