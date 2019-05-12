export function accessHasError(state = false, action) {
    switch (action.type) {
        case 'ACCESS_HAS_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function accessIsLoading(state = false, action) {
    switch (action.type) {
        case 'ACCESS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function access(state = [], action) {
    switch (action.type) {
        case 'ACCESS':
            return action.access;

        default:
            return state;
    }
}

export function accessesHasError(state = false, action) {
    switch (action.type) {
        case 'ACCESSES_HAS_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function accessesIsLoading(state = false, action) {
    switch (action.type) {
        case 'ACCESSES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function accesses(state = [], action) {
    switch (action.type) {
        case 'ACCESSES':
            return action.accesses;

        default:
            return state;
    }
}

export function createAccessHasError(state = false, action) {
    switch (action.type) {
        case 'CREATE_ACCESS_HAS_ERROR':
            return action.createHasError;

        default:
            return state;
    }
}

export function createAccessIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_ACCESS_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createAccessSuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_ACCESS_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deleteAccessIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_ACCESS_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}
