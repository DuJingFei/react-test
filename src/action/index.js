import {ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT } from './actionTypes'

let nextTodoId = 0;

/*
 *新增待办事项
 @params {*} text
*/
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

// 更改todo状态
export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

// 设置过滤状态
export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

// 新增todo时的文本信息
export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})