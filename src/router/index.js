import Vue from 'vue'
import Router from 'vue-router'
import NotFoundPage from '@/components/NotFoundPage'
import StartPage from '@/components/StartPage'
import LoginPage from '@/components/LoginPage'
import RegistrationPage from '@/components/RegistrationPage'
import AccountOptions from '@/components/AccountOptions'

Vue.use(Router)

export default new Router({
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
