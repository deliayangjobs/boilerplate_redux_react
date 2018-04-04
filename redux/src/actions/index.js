export function selectBook(book) {
    //return an action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
