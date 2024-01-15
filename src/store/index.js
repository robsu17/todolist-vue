import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      state.todos.push(payload)
    },
    storeRemoveTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id)
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
        .then((response) => {
          commit('storeTodos', response.data)
        })
    },
    addTodo({ commit }, todoTask) {
      return axios.post('http://localhost:3000/todos', todoTask)
        .then((response) => {
          commit('storeTodo', response.data)
        })
    },
    removeTodo({ commit }, todoTask) {
      return axios.delete(`http://localhost:3000/todos/${todoTask.id}`)
        .then((response) => {
          commit('storeRemoveTodo', response.data)
        })
    }
  },
  modules: {
  }
})
