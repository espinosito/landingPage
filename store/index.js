import Vuex from 'vuex';
const createStore = () => {
    return new Vuex.Store({
        state: {
      counter: 0,
      theme: 'light',
      fromOtherPage:false,
    },
    
  })
}
  export default createStore;