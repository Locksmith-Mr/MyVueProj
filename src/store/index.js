import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import users from './modules/user'

Vue.use(Vuex)
// 导出 store 对象
export default new Vuex.Store({
  getters,
  actions,
  modules: {
    users
  }
})

// const store = new Vuex.Store ({
//   state: {
//     prducts: [
//       {
//         name: '老李',
//         price: 100,
//       },
//       {
//         name: '老王',
//         price: 10,
//       },
//       {
//         name: '老扎',
//         price: 260,
//       },
//       {
//         name: '丽泽',
//         price: 50,
//       },
//     ],
//     count: 1,
//   },
//   mutations: {
//     add (state) {
//       state.count += 1;
//     },
//     down (state) {
//       state.count -= 1;
//     },
//   },
//   getters: {
//     count: function (state) {
//       return (state.count += 100);
//     },
//   },
//   actions: {
//     addAction ({commit}) {
//         // setTimeout(() => { context.commit('add') }, 3000);
//         // console.log('我比add提前执行');
//       commit ('add', 20);

//     },
//     downAction ({commit}) {
//       commit ('down');
//     },
//   },
// });

// export default store;
