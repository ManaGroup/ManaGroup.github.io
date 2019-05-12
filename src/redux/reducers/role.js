export function rolesHasError(state = false, action) {
    switch (action.type) {
        case 'ROLES_HAS_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function rolesIsLoading(state = false, action) {
    switch (action.type) {
        case 'ROLES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function roles(state = [], action) {
    switch (action.type) {
        case 'ROLES':
            return action.roles;

        default:
            return state;
    }
}

export function createRoleHasError(state = false, action) {
    switch (action.type) {
        case 'CREATE_ROLE_HAS_ERROR':
            return action.createHasError;

        default:
            return state;
    }
}

export function createRoleIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_ROLE_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createRoleSuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_ROLE_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deleteRoleIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_ROLE_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}

export function changePermissionIdsLoading(state = [], action) {

    switch (action.type) {
        case 'CHANGE_PERMISSION_IDS_LOADING':
            return action.changeIdsLoading;

        default:
            return state;
    }
}

export function changeAccessIdsLoading(state = [], action) {

    switch (action.type) {
        case 'CHANGE_ACCESS_IDS_LOADING':
            return action.changeIdsLoading;

        default:
            return state;
    }
}