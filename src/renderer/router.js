import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// components
import General from './components/pages/General.vue'
import Orders from './components/pages/Orders.vue'
import Customers from './components/pages/Customers.vue'
import Products from './components/pages/Products.vue'
import Sales from './components/pages/Sales.vue'
import AddProduct from './components/pages/AddProduct.vue'

// Routes
const routes = [
    {
        path: '/',
        component: General
    },
    {
        path: '/orders',
        component: Orders,
    },
    {
        path: '/customers',
        component: Customers,
    },
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/sales',
        component: Sales,
    },
    {
        path: '/add-product',
        component: AddProduct
    }
];

export default new VueRouter({
    routes
});