import { FETCH_NEWS } from "../actions";

export default function(state = {}, action) {
    switch(action.type){
        case FETCH_NEWS: {
            return action.payload.data;
        }
    }

    return state;
}