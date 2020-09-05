import { 
    ADD_ARTICLE,
    ADD_COLUMN,
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
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if(action.type === ADD_COLUMN){
        return Object.assign({}, state, {
            articles: state.columns.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;