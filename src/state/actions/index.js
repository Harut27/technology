import * as types from "../types";

const setNews = (news) => {
    return {
        type: types.SET_NEWS,
        payload:news
    }
}

const addSingleNews = (news) => {
    return {
        type:types.ADD_NEWS,
        payload:news
    }
}

export {
    setNews,
    addSingleNews
}