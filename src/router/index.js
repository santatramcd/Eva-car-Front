import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import Work from '../views/work/work.vue'
import Contact from '../views/contact/contact.vue'
import Cgv from '../views/Notice/Cgv.vue'
import Reserve from '../views/Reserve/Reserve.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/cgv',
        name: 'cgv',
        component: Cgv
    },
    {
        path: '/reserve',
        name: 'reserve',
        component: Reserve
    },
]

const router = createRouter({
    history: createWebHistory(''),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router