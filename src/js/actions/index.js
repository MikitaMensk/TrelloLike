import { 
    ADD_ARTICLE,
    ADD_COLUMN,
    ADD_CARD,
    DELETE_CARD,
    SET_CURRENT_COLUMN,
    TOGGLE_VEIL,
    TOGGLE_ADD_COLUMN,
    TOGGLE_ADD_CARD,
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

export function setCurrentColumn(payload){
    return { type: SET_CURRENT_COLUMN, payload };
}

export function toggleVeil(payload){
    return { type: TOGGLE_VEIL, payload };
}

export function toggleAddColumn(payload){
    return { type: TOGGLE_ADD_COLUMN, payload };
}

export function toggleAddCard(payload){
    return { type: TOGGLE_ADD_CARD, payload };
}