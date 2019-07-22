import initialState from '../store/initState'
import { createReducer } from '../reducers/reducerCretor'
import { types } from '../actions/actionsCretor'

export default createReducer(initialState.todo, {
  [types.FETCH_TODOS.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.FETCH_TODOS.SUCCESS](state, action) {
    return {
      ...state,
      todoList: [...action.payload]
    }
  },
  [types.FETCH_TODOS.FAILED](state, action) {
    return {
      ...state,
      loading: false
    }
  },
  [types.CREATE_TODO.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.CREATE_TODO.SUCCESS](state, action) {
    return {
      ...state,
      todoList: [...state.todoList].concat(action.payload)
    }
  },
  [types.CREATE_TODO.FAILED](state, action) {
    return {
      ...state,
      loading: false
    }
  },
  [types.CREATE_TODO.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.UPDATE_TODO.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.UPDATE_TODO.SUCCESS](state, action) {
    return {
      ...state,
      todoList: [...state.todoList].map(todo => {
        if (todo._id === action.payload._id) {
          todo = action.payload
        }
        return todo
      })
    }
  },
  [types.UPDATE_TODO.FAILED](state, action) {
    return {
      ...state,
      loading: false
    }
  },
  [types.REMOVE_TODO.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.REMOVE_TODO.SUCCESS](state, action) {
    return {
      ...state,
      todoList: [...state.todoList].filter(todo => todo._id !== action.payload._id)
    }
  },
  [types.REMOVE_TODO.FAILED](state, action) {
    return {
      ...state,
      loading: false
    }
  },
})