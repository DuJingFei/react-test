import { connect } from 'react-redux' 
import { setFilter } from '../action'
import Footer from '../components/Footer'



// 将redux中的state映射到react组件的props上
const mapStateToProps = (state) => ({
  filter: state.filter
})

// 将react中的dispatch映射到redux的action中
const mapDispathchToProps = (dispatch) => ({
  setFilter: text => dispatch(setFilter(text))
})

export default connect(mapStateToProps, mapDispathchToProps)(Footer)