import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem.jsx'
import './style.css'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['learn vue', 'learn react']
    }
  }

  render() {
    return (
      <Fragment>
        {/* 注释是这样写的 */}
        <div>
          <label htmlFor="input">输入内容</label>
          <input className="input" id="input"
          value={this.state.inputValue}
          onChange={(e) => {this.handleInputChange(e)}} />
          <button onClick={() => {this.handleBtnClick()}}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete.bind(this)}>
        </TodoItem>
      )
    })
  }

  handleInputChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
}

export default Todolist