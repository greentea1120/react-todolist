import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  const res = yield axios.get('/api/list')
  const action = getInitListAction(res.data)
  yield put(action)
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;