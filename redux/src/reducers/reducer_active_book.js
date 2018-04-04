// state here is only the piece this reducer is responsible for
// set default to null here
export default function(state=null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
