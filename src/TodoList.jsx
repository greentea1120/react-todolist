import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem.jsx'
import './style.css'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['learn vue', 'learn react'],
      show: true
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
          onChange={(e) => {this.handleInputChange(e)}} 
          onKeyUp={(e) => {this.handleEnterChange(e)}} 
          ref={(input) => {this.input = input}}/>
          <button onClick={() => {this.handleBtnClick()}}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
        <br />
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={() => {this.handleToggle()}}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
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

  handleEnterChange(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick(e)
    }
  }

  handleInputChange(e) {
    const inputValue = this.input.value
    this.setState(() => ({
      inputValue
    }))
  }

  handleBtnClick(e) {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
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