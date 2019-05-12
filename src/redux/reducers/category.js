export function categoryIsLoading(state = false, action) {
    switch (action.type) {
        case 'CATEGORY_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function category(state = [], action) {
    switch (action.type) {
        case 'CATEGORY':
            return action.category;

        default:
            return state;
    }
}

export function categoriesIsLoading(state = false, action) {
    switch (action.type) {
        case 'CATEGORIES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function categories(state = {docs: []}, action) {
    switch (action.type) {
        case 'CATEGORIES':
            return action.categories;

        default:
            return state;
    }
}

export function createCategoryIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_CATEGORY_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createCategorySuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_CATEGORY_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deleteCategoryIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_CATEGORY_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}