const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGOUT = "LOGOUT"
const LOGIN_FAILED = "LOGIN_FAILED"
const GET_USER_DATA = "GET_USER_DATA"

export default {
    namespaced: true,
    state: {
        isLoggedIn: !!localStorage.getItem('access_token'),
        username: '',
    },
    mutations: {
        [LOGIN] (state) {
            state.pending = true
        },
        [LOGIN_SUCCESS] (state) {
            state.isLoggedIn = true
            state.pending = false
        },
        [LOGIN_FAILED] (state) {
            state.pending = false
        },
        [LOGOUT] (state) {
            state.isLoggedIn = false
            state.username = ''
        },
        [GET_USER_DATA] (state, payload) {
            state.username = payload.username
        }
    },
    actions: {
        login({ commit }, jwt) {
            commit(LOGIN)
            if (jwt.data.access_token && jwt.data.refresh_token) {
                return new Promise(resolve => {
                    localStorage.setItem("access_token", jwt.data.access_token)
                    localStorage.setItem("refresh_token", jwt.data.refresh_token)
                    commit(LOGIN_SUCCESS)
                    resolve()
                })
            } else {
                commit(LOGIN_FAILED)
            }
        },
        logout({ commit }) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            commit(LOGOUT)
        },
        getUserData({ commit }, userData) {
            commit(GET_USER_DATA, userData)
        }
    },
    getters: {
        isLoggedIn: state => {
            return state.isLoggedIn
        },
        username: state => {
            return state.username
        }
    }
}
