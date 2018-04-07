import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_POSTS:
            // lodash mapKeys function args [{id:1, name:'dd'}, ...]
            // return {"1": {the whole object}, ...}
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
