import { FETCH_ARTICLES, FETCH_SUCCESSED, FETCH_FAILED } from '../actions/actionTypes'

const initialState = {
    articles: [],
    isLoading: false,
};

const articleReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTICLES: 
            return {...state, articles: [], isLoading: true};
        
        case FETCH_SUCCESSED:
            return {...state, articles: action.articles, isLoading: false};

        case FETCH_FAILED:
            return {...state, articles: nil, isLoading: false};

        default:
            return {...state}   

    }
}


export default articleReducers;