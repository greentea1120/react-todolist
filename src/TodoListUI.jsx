import React from 'react'
import { Input, Button, List} from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{padding: '20px'}}>
      <Input style={{width: '300px'}}
      value={props.inputValue}
      onChange={(e) => {props.handleInputChange(e)}}/>
      <Button onClick={() => {props.handleSubmit()}}>submit</Button>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
        style={{width: '300px', marginTop: '20px'}}
      />
    </div>
  )
}

export default TodoListUI