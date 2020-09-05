import { 
    ADD_ARTICLE,
    ADD_COLUMN,
} from "../constants/action-types";

export function addArticle(payload){
    return { type: ADD_ARTICLE, payload };
}

export function addColumn(payload){
    return { type: ADD_COLUMN, payload };
}