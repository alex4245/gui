import { application } from './endpoints'

export function getStartPage() {
    return application.get('start_page')
}

export function loginToSystem(params) {
    return application.post('login', params)
}

export function registrationToSystem(params) {
    return application.post('registration', params)
}

export function refreshToken() {
    return application.post('token_refresh')
}

export function getUserData() {
    return application.get('get_user_data')
}

export function getAccountOptions() {
    return application.get('account_options')
}

export function postAccountOptions(params) {
    return application.patch('account_options', params)
}
