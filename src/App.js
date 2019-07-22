import React from 'react';
import { connect } from 'react-redux'
import { actions } from './actions/actionsCretor'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoValue: ''
    }
  }

  componentDidMount() {
    const { fetchTodos } = this.props
    fetchTodos()
  }

  handleTodo = ({ target: { name, value } }) => this.setState({ [name]: value })

  addNewTodo = () => {
    const { todoValue } = this.state
    const { createTodo } = this.props

    createTodo(todoValue, () => {
      // TODO
    })
  }
  
  render() {
    const { todoValue } = this.state
    const { todoList } = this.props

    return (
      <React.Fragment>
        <h2>TODO List</h2>
        <input type="text" placeholder="Add todo" name="todoValue" value={todoValue} onChange={this.handleTodo} />
        <button onClick={this.addNewTodo}>Add ToDo</button>
        <ul>
          {todoList.map(todo => <li key={todo._id}>{todo.value}</li>)}
        </ul>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    todoList: state.todoReducer.todoList
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(actions.FETCH_TODOS.REQUEST()),
  createTodo: (data, callback) => dispatch(actions.CREATE_TODO.REQUEST(data, callback)),
  updateTodo: (data, callback) => dispatch(actions.UPDATE_TODO.REQUEST(data, callback)),
  removeTodo: (data, callback) => dispatch(actions.REMOVE_TODO.REQUEST(data, callback))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
