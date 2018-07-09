import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleChick = this.handleChick.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <div onClick={this.handleChick}>
        {content}
      </div>
    )
  }

  handleChick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

export default TodoItem