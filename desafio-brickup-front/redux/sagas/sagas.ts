import { Console } from 'console';
import { takeEvery, call, put } from 'redux-saga/effects'
import { add, addSucess, startSucess, start, edit, editSucess, del, delSucess } from '../features/tasks-slice'

type TaskType = {
  id: number;
  description: string;
  status: string
}

export function* watchAdd() {
  yield takeEvery(add.type, fetchAdd)
}

export function* watchEdit() {
  yield takeEvery(edit.type, fetchEdit)
}

export function* watchDel() {
  yield takeEvery(del.type, fetchDel)
}

export function* watchStart() {
  yield takeEvery(start.type, fetchStart)
}

function* fetchAdd(action: ReturnType<typeof add>) {
  const { payload } = action;
  const response: Response = yield call(fetch, 'http://localhost:8080/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: payload.description,
      status: payload.status,
    }),
  });
  const data: TaskType[] = yield call([response, 'json']);

  console.log(payload);
  yield put(addSucess(data));
}

function* fetchEdit(action: ReturnType<typeof edit>) {
  const { payload } = action;
  const response: Response = yield call(fetch, 'http://localhost:8080/tasks', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: payload.id,
      description: payload.description,
      status: payload.status,
    }),
  });
  const data: TaskType[] = yield call([response, 'json']);

  console.log(payload);
  yield put(editSucess(data));
}

function* fetchDel(action: ReturnType<typeof edit>) {
  const { payload } = action;
  const response: Response = yield call(fetch, `http://localhost:8080/tasks/${payload.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data: TaskType[] = yield call([response, 'json']);

  console.log(payload);
  yield put(delSucess(data));
}

function* fetchStart() {
  const response: Response = yield call(fetch, 'http://localhost:8080/tasks');
  const data: TaskType[] = yield call([response, 'json']);

  yield put(startSucess(data));
}
