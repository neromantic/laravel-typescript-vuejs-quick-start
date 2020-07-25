require('./bootstrap');

require('../ts/app.ts');
window.Vue = require('vue');

Vue.component('main-app', require("./components/MainApp.vue").default);
new Vue({
    el: "#app"
});