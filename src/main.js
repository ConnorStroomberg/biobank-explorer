import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
// @ts-ignore
import i18n from '@molgenis/molgenis-i18n-js';
import { sync } from 'vuex-router-sync';
// @ts-ignore
import VueAnalytics from 'vue-analytics';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { INITIAL_STATE } from './store/state';
Vue.config.productionTip = false;
if (INITIAL_STATE.GA_KEY) {
    Vue.use(VueAnalytics, {
        id: INITIAL_STATE.GA_KEY,
        router,
        // TODO Use MOLGENIS settings for this
        set: [
            { field: 'forceSSL', value: true },
            { field: 'anonymizeIp', value: true },
        ],
        autoTracking: {
            transformQueryString: true,
        },
    });
}
sync(store, router);
// @ts-ignore
if (window.__webpack_public_path__) {
    /* eslint-disable no-undef, camelcase */
    // @ts-ignore
    __webpack_public_path__ = window.__webpack_public_path__;
    /* eslint-enable */
}
Vue.use(i18n, {
    lng: INITIAL_STATE.lng,
    fallbackLng: INITIAL_STATE.fallbackLng,
    namespace: 'biobank-explorer',
    callback() {
        new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount('#app');
    },
});
Vue.use(BootstrapVue);
//# sourceMappingURL=main.js.map