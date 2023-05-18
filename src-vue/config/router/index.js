import * as VueRouter from "vue-router";
const routes = [
    { path: '/', component: () => import("../views/Home.vue") },
    { path: '/button', component:() => import("../views/Button.vue")  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router;
