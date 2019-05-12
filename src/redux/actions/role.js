import _ from 'lodash';
import {ROLE_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function rolesHasError(bool) {
    return {
        type: 'ROLES_HAS_ERROR',
        hasError: bool
    };
}

export function rolesIsLoading(bool) {
    return {
        type: 'ROLES_IS_LOADING',
        isLoading: bool
    };
}

export function setRoles(roles) {
    return {
        type: 'ROLES',
        roles
    };
}

export function createRoleHasError(bool) {
    return {
        type: 'CREATE_ROLE_HAS_ERROR',
        createHasError: bool
    };
}

export function createRoleIsLoading(bool) {
    return {
        type: 'CREATE_ROLE_IS_LOADING',
        createIsLoading: bool
    };
}

export function createRoleSuccess(bool) {
    return {
        type: 'CREATE_ROLE_SUCCESS',
        createSuccess: bool
    };
}

export function deleteRoleIdsLoading(ids) {
    return {
        type: 'DELETE_ROLE_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function changePermissionIdsLoading(ids = []) {
    return {
        type: 'CHANGE_PERMISSION_IDS_LOADING',
        changeIdsLoading: ids
    };
}

export function changeAccessIdsLoading(ids = []) {
    return {
        type: 'CHANGE_ACCESS_IDS_LOADING',
        changeIdsLoading: ids
    };
}

export function getRoles() {
    return (dispatch) => {
        dispatch(rolesIsLoading(true));

        fetch(Url(ROLE_PATH), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(rolesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setRoles(data));
            })
            .catch(() => dispatch(rolesHasError(true)));
    };
}

export function deleteRoles(ids) {
    return (dispatch, getState) => {
        let loadings = [...ids, ...getState().deleteRoleIdsLoading];
        dispatch(deleteRoleIdsLoading(loadings));

        fetch(Url(ROLE_PATH), Header({
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
                let all = [...getState().roles];
                ids.forEach(id => {_.remove(all, (el) => {return id === el._id})});

                loadings = [...getState().deleteRoleIdsLoading];
                ids.forEach(id => {_.remove(loadings, (el) => {return id === el})});

                success('عملیات موفقیت آمیز بود.');

                dispatch(setRoles(all))
                dispatch(deleteRoleIdsLoading(loadings));
            })
            .catch(() => error('عملیات نا موفق بود.'));
    };
}

export function createRole(data) {
    return (dispatch, getState) => {
        dispatch(createRoleIsLoading(true));

        fetch(Url(ROLE_PATH), Header({
            method: 'POST',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(createRoleIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((role) => {
                dispatch(createRoleSuccess(true));
                dispatch(createRoleSuccess(false));
                dispatch(setRoles([ role, ...getState().roles]));
            })
            .catch((response) => dispatch(createRoleHasError(true)));
    };
}

export function updateRole(_id, index, value) {
    return (dispatch, getState) => {
        dispatch(rolesIsLoading(true));

        let data = {_id};
        data[index] = value;

        fetch(Url(ROLE_PATH), Header({
            method: 'PUT',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(rolesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((role) => {

                let roles = getState().roles;
                const target = roles.find(item => item._id === _id);
                if (target) {
                    target[index] = value;
                    dispatch(setRoles(roles));
                }
            })
            .catch((response) => error('خطا در ارسال اطلاعات'));
    };
}

export function changePermission(_id, permission_id, type) {
    return (dispatch, getState) => {

        let ids = getState().changePermissionIdsLoading;
        ids = [{role_id : _id, permission_id: permission_id}, ...ids];

        dispatch(changePermissionIdsLoading(ids));

        let data = {_id, permission_id};

        fetch(Url(ROLE_PATH + '/' + type + '_permission'), Header({
            method: 'PATCH',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((role) => {


                let roles = [...getState().roles];
                const index = roles.findIndex(item => item._id === _id);
                roles[index] = role;
                dispatch(setRoles(roles));

                let loadings = [...getState().changePermissionIdsLoading];
                _.remove(loadings, (el) => {return (el.role_id === _id && el.permission_id === permission_id)})
                dispatch(changePermissionIdsLoading(loadings));
            })
            .catch((response) => error('خطا در ارسال اطلاعات'));
    };
}

export function changeAccess(_id, access_id, type) {
    return (dispatch, getState) => {

        let ids = getState().changeAccessIdsLoading;
        ids = [{role_id : _id, access_id: access_id}, ...ids];

        dispatch(changeAccessIdsLoading(ids));

        let data = {_id, access_id};

        fetch(Url(ROLE_PATH + '/' + type + '_access'), Header({
            method: 'PATCH',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((role) => {


                let roles = [...getState().roles];
                const index = roles.findIndex(item => item._id === _id);
                roles[index] = role;
                dispatch(setRoles(roles));

                let loadings = [...getState().changeAccessIdsLoading];
                _.remove(loadings, (el) => {return (el.role_id === _id && el.access_id === access_id)})
                dispatch(changeAccessIdsLoading(loadings));
            })
            .catch((response) => error('خطا در ارسال اطلاعات'));
    };
}