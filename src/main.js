import './assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { http, path, adminPath } from '@/api';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.provide('http', http);
app.provide('path', path);
app.provide('adminPath', adminPath);

app.component('Button', Button);
app.component('Input', Input);
app.component('Label', Label);

app.mount('#app');
