import { connect } from 'react-redux' 
import { toggleTodo } from '../action'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      return new Error('Unknown filter:' + filter)
  }
}

// 将redux中的state映射到react组件的props上
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

// 将react中的dispatch映射到redux的action中
const mapDispathchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispathchToProps)(TodoList)