import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects'
import { add, addSucess, startSucess, start, edit, editSucess, del, delSucess, Task } from '../features/tasks-slice'

type TaskType = {
  id: number;
  description: string;
  status: string;
  image: string
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
  let formData = new FormData();
  formData.append('description', payload.description!);
  formData.append('status', payload.status!);
  formData.append('imagePath', payload.image!);

  const response: Response = yield call(axios.post, 'http://localhost:8080/tasks', formData, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data: Task[] = yield call([response, 'json']);

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
  const data: Task[] = yield call([response, 'json']);

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
  const data: Task[] = yield call([response, 'json']);

  console.log(payload);
  yield put(delSucess(data));
}

function* fetchStart() {
  const response: Response = yield call(fetch, 'http://localhost:8080/tasks');
  const data: Task[] = yield call([response, 'json']);

  yield put(startSucess(data));
}
