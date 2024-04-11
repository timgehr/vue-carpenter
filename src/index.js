import Carpenter from "./components/Carpenter.vue";

export default {
    install: (app, options) => {
        app.component("vue-carpenter", Carpenter);
    }
};
export { default as Carpenter } from "./components/Carpenter.vue";