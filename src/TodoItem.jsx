import React, { Component } from 'react'
import { List } from 'antd';

class TodoItem extends Component {
  render() {
    return (
      <List
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {this.props.deleteItem(index)}}>{item}</List.Item>)}
        style={{width: '300px', marginTop: '20px'}}
      />
    )
  }
}

export default TodoItem
