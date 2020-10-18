import { connect } from 'react-redux' 
import { setTodoText, addTodo } from '../action'
import AddTodo from '../components/AddTodo'



// 将redux中的state映射到react组件的props上
const mapStateToProps = (state) => ({
  text: state.text
})

// 将react中的dispatch映射到redux的action中
const mapDispathchToProps = (dispatch) => ({
  setTodoText: text => dispatch(setTodoText(text)),
  addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispathchToProps)(AddTodo)