import { 
    ADD_ARTICLE,
    ADD_COLUMN,
    ADD_CARD,
    DELETE_CARD,
    TOGGLE_VEIL,
} from "../constants/action-types";

export function addArticle(payload){
    return { type: ADD_ARTICLE, payload };
}

export function addColumn(payload){
    return { type: ADD_COLUMN, payload };
}

export function addCard(payload){
    return { type: ADD_CARD, payload };
}

export function deleteCard(payload){
    return { type: DELETE_CARD, payload };
}

export function toggleVeil(payload){
    return { type: TOGGLE_VEIL, payload };
}