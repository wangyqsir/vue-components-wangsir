import AdminSpin from './src/components/adminSpin/adminSpin'
import _Vue from 'vue'
const components = {
  AdminSpin
}
const install = function(Vue, opts = {}) {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
};

export default API;
