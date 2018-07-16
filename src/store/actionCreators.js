import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM, INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_LIST
})

export const getDeleteItemAction = (value) => ({
  type: DELETE_ITEM,
  value
})

export const getInitListAction = (list) => ({
  type: INIT_LIST,
  list
})

export const getTodoListAction = () => {
  return () => {
    axios.get('/api/list')
      .then(res => {
        console.log(res)
        const data = res.data
        const action = getInitListAction(data)
        store.dispatch(action)
      })
  }
}