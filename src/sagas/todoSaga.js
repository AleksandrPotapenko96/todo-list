import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../actions/actionsCretor'
import { Api } from '../entries/apiTransport'
// import { push } from 'connected-react-router'
// import { Routes } from '../constants/routes'
// import * as url from '../constants/apiUrl'

const api = Api.getInstance()

function* fetchTodo({ payload, callback }) {
  try {
    // TODO
    const testTodoList = [
      {
        value: '123',
        _id: '123'
      },
      {
        value: '312',
        _id: '321'
      }
    ]

    yield put(actions.FETCH_TODOS.SUCCESS(testTodoList))
    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(actions.FETCH_TODOS.FAILED(err))
  }
}

function* createTodo({ payload, callback }) {
  try {
    // TODO
    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(actions.CREATE_TODO.FAILED(err))
  }
}

function* updateTodo({ payload, callback }) {
  try {
    // TODO
    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(actions.UPDATE_TODO.FAILED(err))
  }
}

function* removeTodo({ payload, callback }) {
  try {
    // TODO
    typeof callback === 'function' && callback()
  } catch (err) {
    yield put(actions.REMOVE_TODO.FAILED(err))
  }
}


export default function* todoWatcher() {
  yield takeLatest(types.FETCH_TODOS.REQUEST, fetchTodo)
  yield takeLatest(types.CREATE_TODO.REQUEST, createTodo)
  yield takeLatest(types.UPDATE_TODO.REQUEST, updateTodo)
  yield takeLatest(types.REMOVE_TODO.REQUEST, removeTodo)
}