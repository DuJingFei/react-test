import todos from './todos'
import filter from './filter'
import text from './text'

import { combineReducers } from 'redux'

export default combineReducers({
  todos,
  filter,
  text
})













/*
import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER } from "../action/actionTypes"

// 初始状态
const initialState = {
  filter: 'all',
  text: '',
  todos: []
}

const todoApp = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false // 新增的待办事项完成肯定时false
          }
        ]
      }
    case TOGGLE_TODO: // 修改待办事项
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.id ? {...todo, completed: !todo.completed } : todo
        )
      }
    case SET_TODO_TEXT: // 设置待办事项文本
      return {
        ...state,
        text: action.text
      }
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

export default todoApp

*/