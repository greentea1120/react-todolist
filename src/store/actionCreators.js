import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_ITEM} from './actionTypes'

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