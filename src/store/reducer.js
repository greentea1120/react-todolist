import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM, INIT_LIST} from './actionTypes'

const defaultState = {
  inputValue: '999',
  list: [1,2]
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }

  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.list
    return newState
  }

  return state
}