import state from "./store/state"

export default {
    namespaced: true,
    state() {
        return {
            something: 'something'
        }
    },
    getters: {
        something() {
            return state.something;
        }
    }
}