import { createStore } from 'vuex'

export default createStore({
  state:()=>({
    screenWidth: screen.width,
  }),
  getters: {
    getScreenWidth(state){
      //нигде не используется но добавлю ( для маштабируемости, если нужно будет )
      return state.screenWidth
    },
    isMobile(state){
      return state.screenWidth < 321
    }
  },
  mutations: {
    setScreenWidth(state){
      state.screenWidth = screen.width
    }
  },
  actions: {
  },
})
