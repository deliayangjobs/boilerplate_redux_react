import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state={}, action) {
    switch(action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            const post = action.payload.data;
            // not create array here, [] is key interpretion, put id as key
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            // lodash mapKeys function args [{id:1, name:'dd'}, ...]
            // return {"1": {the whole object}, ...}
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
