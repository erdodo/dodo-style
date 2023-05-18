import Dialog from "./Dialog.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Dialog", Dialog);
}


Dialog.install = install;

export default Dialog
