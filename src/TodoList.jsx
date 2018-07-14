import React, { Component } from 'react'
import store from './store'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
// import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM} from './store/actionTypes'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(() => {this.handStoreChange()})
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <Input style={{width: '300px'}}
        value={this.state.inputValue}
        onChange={(e) => {this.handleInputChange(e)}}/>
        <Button onClick={() => {this.handleSubmit()}}>submit</Button>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => {this.deleteItem(index)}}>{item}</List.Item>)}
          style={{width: '300px', marginTop: '20px'}}
        />
      </div>
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
