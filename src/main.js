import { createApp } from "vue";
import App from "./App.vue";

// ****** Font-Awesome Dependencies ************* //
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faBars,
  faFile,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faBars, faFile, faGlobe);
// ****** Font-Awesome Dependencies ************* //

// ****** Material Icons Dependencies ************* //
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
// ****** Material Icons Dependencies ************* //

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(mdiVue, {
  icons: mdijs,
});
app.mount("#app");
