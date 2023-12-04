import { createStore } from 'vuex'

const store = createStore({
  state: {
    list: [
      {
        type: 'INCOME',
        value: 200,
        comment: 'Some Comment',
        id: 1
      },
      {
        type: 'OUTCOME',
        value: -50,
        comment: 'Outcome comment',
        id: 2
      }
    ],
    currentID: 2
  },
  getters: {
    budgetList: (state) => state.list
  },

  actions: {
    addNewListItem({ commit }, item) {
      const newItem = { ...item, id: this.state.currentID + 1 }
      commit('ADD_NEW_ITEM', newItem)
    },
    removeListItem({ commit }, id) {
      const indexToRemove = this.state.list.findIndex((item) => item.id === id)
      if (indexToRemove !== -1) {
        commit('REMOVE_LIST_ITEM', indexToRemove)
      }
    }
  },

  mutations: {
    ADD_NEW_ITEM(state, newItem) {
      state.list.push(newItem)
      state.currentID++
    },
    REMOVE_LIST_ITEM(state, idx) {
        state.list.splice(idx, 1);
    }
  }
})

export default store
