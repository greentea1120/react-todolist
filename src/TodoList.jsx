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
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          { /* dangerouslySetInnerHTML可以解析HTML */ }
          {
            this.state.list.map((item, index) => {
              return (
                <div>
                  <TodoItem></TodoItem>
                  {/* <li 
                    key={index} 
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}>
                  </li> */}
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default Todolist