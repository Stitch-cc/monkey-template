import { createApp } from 'vue';
import App from './App.vue';

import { setupPlugins } from './plugins';
import { GM_addElement } from '$';

const app = createApp(App);
setupPlugins(app);

import 'uno.css';

GM_addElement('script', { src: 'https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js' })
GM_addElement('link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' })

app.mount(
  (() => {
    const app = document.createElement('div');
    document.body.append(app);
    return app;
  })(),
);
