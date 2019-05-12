import _ from 'lodash';
import {PERMISSION_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function permissionHasError(bool) {
    return {
        type: 'PERMISSION_HAS_ERROR',
        hasError: bool
    };
}

export function permissionIsLoading(bool) {
    return {
        type: 'PERMISSION_IS_LOADING',
        isLoading: bool
    };
}

export function permission(permission) {
    return {
        type: 'PERMISSION',
        permission
    };
}

export function permissionsHasError(bool) {
    return {
        type: 'PERMISSIONS_HAS_ERROR',
        hasError: bool
    };
}

export function permissionsIsLoading(bool) {
    return {
        type: 'PERMISSIONS_IS_LOADING',
        isLoading: bool
    };
}

export function permissions(permissions) {
    return {
        type: 'PERMISSIONS',
        permissions
    };
}

export function createPermissionHasError(bool) {
    return {
        type: 'CREATE_PERMISSION_HAS_ERROR',
        createHasError: bool
    };
}

export function createPermissionIsLoading(bool) {
    return {
        type: 'CREATE_PERMISSION_IS_LOADING',
        createIsLoading: bool
    };
}

export function createPermissionSuccess(bool) {
    return {
        type: 'CREATE_PERMISSION_SUCCESS',
        createSuccess: bool
    };
}

export function deletePermissionIdsLoading(ids = []) {
    return {
        type: 'DELETE_PERMISSION_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function getPermission(id) {
    return (dispatch) => {
        dispatch(permissionsIsLoading(true));

        fetch(Url(PERMISSION_PATH + '/' + id), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(permissionsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((permission) => dispatch(permission(permission)))
            .catch(() => dispatch(permissionHasError(true)));
    };
}

export function getPermissions() {
    return (dispatch) => {
        dispatch(permissionsIsLoading(true));

        fetch(Url(PERMISSION_PATH), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(permissionsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(permissions(data));
            })
            .catch(() => dispatch(permissionsHasError(true)));
    };
}

export function saveChangesPermissions(data) {
    return (dispatch) => {
        dispatch(permissionsIsLoading(true));

        fetch(Url(PERMISSION_PATH + '/save_changes'), Header({
            method: 'POST',
            body: JSON.stringify({data}),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(permissionsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((permissions) => dispatch(permissions(permissions)))
            .catch(() => dispatch(permissionsHasError(true)));
    };
}

export function deletePermissions(ids) {
    return (dispatch, getState) => {
        dispatch(deletePermissionIdsLoading(ids));

        fetch(Url(PERMISSION_PATH), Header({
            method: 'DELETE',
            body: JSON.stringify({ids: ids}),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                let all = getState().permissions;
                ids.forEach(id => {_.remove(all, (el) => {return id === el._id})});

                success('عملیات موفقیت آمیز بود.');
                dispatch(deletePermissionIdsLoading([]));
                dispatch(permissions(all))
            })
            .catch(() => error('عملیات نا موفق بود.'));
    };
}

export function createPermission(data, method = 'POST') {
    return (dispatch, getState) => {
        dispatch(permissionsIsLoading(true));

        fetch(Url(PERMISSION_PATH), Header({
            method: method,
            body: JSON.stringify(data),
        }))
            .then((response) => {
                dispatch(permissionsIsLoading(false));

                if (response.status === 409) {
                    error('این مشخصات قبلا ثبت شده است.');
                }

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((permission) => {
                success('عملیات موفقیت آمیز بود.');
                dispatch(permissions([ permission, ...getState().permissions]));
            })
            .catch((response) => dispatch(createPermissionHasError(true)));
    };
}

export function updatePermission(_id, index, value) {
    return (dispatch, getState) => {
        dispatch(permissionsIsLoading(true));

        let data = {_id};
        data[index] = value;

        fetch(Url(PERMISSION_PATH), Header({
            method: 'PUT',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(permissionsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((role) => {

                let roles = getState().roles;
                const target = roles.find(item => item._id === _id);
                if (target) {
                    target[index] = value;
                    success('عملیات موفقیت آمیز بود.');
                    dispatch(roles(roles));
                }
            })
            .catch((response) => error('خطا در ارسال اطلاعات'));
    };
}