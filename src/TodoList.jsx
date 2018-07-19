import React, { Component } from 'react'
import store from './store'
// import axios from 'axios'
// import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
// import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM} from './store/actionTypes'
import TodoListUI from './TodoListUI.jsx'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitListSagaAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {this.handStoreChange()})
  }

  componentDidMount() {
    // redux-thunk

    // const action = getTodoListAction()
    // console.log(action)
    // store.dispatch(action)

    // axios.get('/api/list')
    //   .then(res => {
    //     const data = res.data
    //     const action = getInitListAction(data)
    //     store.dispatch(action)
    //     console.log(data)
    //   })
    const action = getInitListSagaAction()
    store.dispatch(action)
    console.log(action)
  }

  render() {
    return (
      <TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={(e) => {this.handleInputChange(e)}}
      handleSubmit={() => this.handleSubmit()}
      deleteItem={(index) => this.deleteItem(index)}/>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleSubmit() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handStoreChange() {
    this.setState(store.getState())
  }

  deleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
