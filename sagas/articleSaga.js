import { FETCH_ARTICLES, FETCH_SUCCESSED, FETCH_FAILED } from '../actions/actionTypes'
import { put, takeLatest } from 'redux-saga/effects'
import { Api } from './Api'

function* fetchArticles() {
    try {
        const articles = yield Api.getDataFromApi()
        yield put({type: FETCH_SUCCESSED, articles: articles})
    } catch(error) {
        yield put({FETCH_FAILED, error})
    }
}

export function* watchFetchArticles() {
    yield takeLatest(FETCH_ARTICLES, fetchArticles)
}