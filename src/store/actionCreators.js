import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM, INIT_LIST, GET_INIT_LIST} from './actionTypes'
// import axios from 'axios'

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

// export const getTodoListAction = () => {
//   return (dispatch) => {
//     axios.get('/api/list')
//       .then(res => {
//         const data = res.data
//         const action = getInitListAction(data)
//         dispatch(action)
//         console.log(data)
//       })
//   }
// }

export const getInitListSagaAction = () => ({
  type: GET_INIT_LIST
})