import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import PDFObjectPlugin from 'pdfobject-vue';

const app = createApp(App);

app.use(router);
app.use(PDFObjectPlugin);

app.mount('#app')
