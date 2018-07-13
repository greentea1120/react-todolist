import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <Input style={{width: '300px'}}
        onChange={(e) => {this.changInputValue(e)}}
        onKeyUp={(e) => {this.keyUpAddList(e)}}
        value={this.state.inputValue}/>
        <Button onClick={() => {this.addList()}}>submit</Button>
        <TodoItem list={this.state.list} deleteItem={(index) => {this.clickDeleteItem(index)}}/>
      </div>
    )
  }

  changInputValue(e) {
    const inputValue = e.target.value
    this.setState(() => {
      return {
        inputValue
      }
    }, () => {
      // console.log(this.state.inputValue)
    })
  }

  keyUpAddList(e) {
    if (e.keyCode === 13) {
      this.addList()
    }
  }

  addList() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    }, () => {
      console.log(this.state.list)
    })
  }

  clickDeleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
