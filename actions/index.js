import { FETCH_ARTICLES, FETCH_SUCCESSED, FETCH_FAILED } from './actionTypes'

export const fetchArticlesAction = () => {
    return {
        type: FETCH_ARTICLES,
    }
}

export const fetchSuccessAction = (articles) => {
    return {
        type: FETCH_SUCCESSED,
        articles
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}