import { call, all } from 'redux-saga/effects'
import { watchFetchArticles } from './articleSaga'

export default function* rootSaga() {
    yield call(watchFetchArticles)
}