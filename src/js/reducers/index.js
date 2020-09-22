import { 
    ADD_ARTICLE,
    ADD_COLUMN,
    ADD_CARD,
    DELETE_CARD,
} from "../constants/action-types";

const initialState = {
    articles: [],
    columns: [
        {
            title: 'Stuff To Try (this is a list)',
            cards: [
                {
                    title: 'This is the card. Drag it to the ...',
                    image: '',
                    date: ''
                },
                {
                    title: 'This is another card.',
                    image: '',
                    date: ''
                },
            ],
        }
    ],
    isAddCardOpen: false,
    isAddColumnOpen: false,
    isEditColumnOpen: false,
    isEditCardOpen: false,
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    else if(action.type === ADD_COLUMN){
        return Object.assign({}, state, {
            columns: state.columns.concat(action.payload)
        });
    }
    else if(action.type === ADD_CARD){
        let columnsCopy = state.columns.slice();
        let thisColumn = columnsCopy[action.payload.index];
        let cards = thisColumn.cards;
        cards.push(action.payload.cardBody);
        return Object.assign({}, state, {
            columns: columnsCopy
        });
    } 
    else if(action.type === DELETE_CARD){
        let columnsCopy = state.columns.slice();
        let thisColumn = columnsCopy[action.payload.columnIndex];
        let cards = thisColumn.cards;
        cards.splice(action.payload.cardIndex, 1);
        return Object.assign({}, state, {
            columns: columnsCopy
        });
    }  
    return state;
}

export default rootReducer;