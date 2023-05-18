import Button from "./Button.vue";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("Button", Button);
}


Button.install = install;

export default Button
