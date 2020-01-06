import Vue from 'vue'
import Router from 'vue-router'
import NotFoundPage from '@/components/NotFoundPage'
import StartPage from '@/components/StartPage'
import LoginPage from '@/components/LoginPage'
import RegistrationPage from '@/components/RegistrationPage'
import AccountOptions from '@/components/AccountOptions'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '*',
            component: NotFoundPage
        },
        {
            path: '/start_page',
            name: 'StartPage',
            component: StartPage
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/registration',
            name: 'RegistrationPage',
            component: RegistrationPage
        },
        {
            path: '/account_options',
            name: 'AccountOptions',
            component: AccountOptions
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(1)
    if (!localStorage.getItem('access_token') && to.path !== '/login') {
        next({
            path: '/login',
            name: 'LoginPage',
            component: LoginPage,
            params: { nextUrl: to.fullPath }
        })
        location.reload()
    } else {
        next()
    }
})

export default router
