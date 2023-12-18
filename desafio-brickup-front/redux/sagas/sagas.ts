import { takeEvery, call, put } from 'redux-saga/effects'
import { add, addSucess, startSucess, start } from '../features/tasks-slice'

type JokeType = {
  icon_url:string;
  id:string; 
  url:string; 
  value:string;
}

export function* watchAdd() {
  yield takeEvery(add.type, fetchAdd)
}

export function* watchStart() {
  yield takeEvery(start.type, fetchStart)
}

function* fetchAdd(action: ReturnType<typeof add>) {
  const { payload } = action;
  const response: Response = yield call(fetch, 'https://api.chucknorris.io/jokes/random');
  const data: JokeType = yield call([response, 'json']);

  console.log(payload);
  yield put(addSucess(data.value));
}

function* fetchStart() {
  // const response: Response = yield call(fetch, 'https://api.chucknorris.io/jokes/random');
  // const data: JokeType = yield call([response, 'json']);

  const data = [{
    id: 1,
    name: 'teste',
    status: 'teste'    
  },
  {
    id: 2,
    name: 'teste',
    status: 'teste'    
  },
]

  yield put(startSucess(data));
}
