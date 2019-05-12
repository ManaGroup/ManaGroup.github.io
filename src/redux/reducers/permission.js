export function permissionHasError(state = false, action) {
    switch (action.type) {
        case 'PERMISSION_HAS_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function permissionIsLoading(state = false, action) {
    switch (action.type) {
        case 'PERMISSION_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function permission(state = [], action) {
    switch (action.type) {
        case 'PERMISSION':
            return action.permission;

        default:
            return state;
    }
}

export function permissionsHasError(state = false, action) {
    switch (action.type) {
        case 'PERMISSIONS_HAS_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function permissionsIsLoading(state = false, action) {
    switch (action.type) {
        case 'PERMISSIONS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function permissions(state = [], action) {
    switch (action.type) {
        case 'PERMISSIONS':
            return action.permissions;

        default:
            return state;
    }
}

export function createPermissionHasError(state = false, action) {
    switch (action.type) {
        case 'CREATE_PERMISSION_HAS_ERROR':
            return action.createHasError;

        default:
            return state;
    }
}

export function createPermissionIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_PERMISSION_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createPermissionSuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_PERMISSION_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deletePermissionIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_PERMISSION_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}
