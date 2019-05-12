export function formItemIsLoading(state = false, action) {
    switch (action.type) {
        case 'FORM_ITEM_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}


export function FormsItems(state = [], action) {
    switch (action.type) {
        case 'GET_FORMITEMS':
            return action.FormItems;

        default:
            return state;
    }
}

