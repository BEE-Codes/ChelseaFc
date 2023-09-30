import './assets/main.css'
// export default router
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faUserSecret);

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

const app = createApp(App)

// app.use(router)

app.mount('#app')
