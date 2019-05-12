export function formIsLoading(state = false, action) {
    switch (action.type) {
        case 'FORM_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function Form(state = [], action) {
    switch (action.type) {
        case 'GET_FORM':
            return action.Form;

        default:
            return state;
    }
}
export function Forms(state = [], action) {
    switch (action.type) {
        case 'GET_FORMS':
            return action.Forms;

        default:
            return state;
    }
}
