import * as types from "../types";

const setNews = (news) => {
    return {
        type: types.SET_NEWS,
        payload:news
    }
}

export {
    setNews
}