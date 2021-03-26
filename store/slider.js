export default {
  state: {
    NavbarState: 1,
  },
  mutations: {
    addNavbarState(state){
        state.NavbarState ++
    },
    decNavbarState(state) {
        state.NavbarState --
    }
  },
  actions: {
    goNext(ctx){
      ctx.commit('addNavbarState')},
      goBack(ctx){
        ctx.commit('decNavbarState')}
  },
  getters: {
    getNavbarState: (state) => { return state.NavbarState },
  }
}
