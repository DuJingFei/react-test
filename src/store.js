import { createStore } from 'redux'
import rootReducer from './reducers'
import { addTodo, toggleTodo, setFilter, setTodoText } from './action'

const store = createStore(rootReducer); // createStore接收reducer参数以创建store

// 初始state
console.log(store.getState())

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// 发生 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0)) // 0为要更改的todo项目的id

store.dispatch(setFilter('active'))

store.dispatch(setTodoText('djf'))


// 取消订阅
// unsubscribe()

// export default store