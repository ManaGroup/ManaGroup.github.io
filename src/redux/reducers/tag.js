export function tagIsLoading(state = false, action) {
    switch (action.type) {
        case 'TAG_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function tag(state = [], action) {
    switch (action.type) {
        case 'TAG':
            return action.tag;

        default:
            return state;
    }
}

export function tagsIsLoading(state = false, action) {
    switch (action.type) {
        case 'TAGS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function tags(state = [], action) {
    switch (action.type) {
        case 'TAGS':
            return action.tags;

        default:
            return state;
    }
}

export function createTagIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_TAG_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createTagSuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_TAG_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deleteTagIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_TAG_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}