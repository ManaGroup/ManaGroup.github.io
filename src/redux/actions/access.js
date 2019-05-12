import _ from 'lodash';
import {ACCESS_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function accessHasError(bool) {
    return {
        type: 'ACCESS_HAS_ERROR',
        hasError: bool
    };
}

export function accessIsLoading(bool) {
    return {
        type: 'ACCESS_IS_LOADING',
        isLoading: bool
    };
}

export function access(access) {
    return {
        type: 'ACCESS',
        access
    };
}

export function accessesHasError(bool) {
    return {
        type: 'ACCESSES_HAS_ERROR',
        hasError: bool
    };
}

export function accessesIsLoading(bool) {
    return {
        type: 'ACCESSES_IS_LOADING',
        isLoading: bool
    };
}

export function accesses(accesses) {
    return {
        type: 'ACCESSES',
        accesses
    };
}

export function createAccessHasError(bool) {
    return {
        type: 'CREATE_ACCESS_HAS_ERROR',
        createHasError: bool
    };
}

export function createAccessIsLoading(bool) {
    return {
        type: 'CREATE_ACCESS_IS_LOADING',
        createIsLoading: bool
    };
}

export function createAccessSuccess(bool) {
    return {
        type: 'CREATE_ACCESS_SUCCESS',
        createSuccess: bool
    };
}

export function deleteAccessIdsLoading(ids = []) {
    return {
        type: 'DELETE_ACCESS_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function getAccess(id) {
    return (dispatch) => {
        dispatch(accessesIsLoading(true));

        fetch(Url(ACCESS_PATH + '/' + id), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(accessesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((access) => dispatch(access(access)))
            .catch(() => dispatch(accessHasError(true)));
    };
}

export function getAccesses() {
    return (dispatch) => {
        dispatch(accessesIsLoading(true));

        fetch(Url(ACCESS_PATH), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(accessesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(accesses(data));
            })
            .catch(() => dispatch(accessesHasError(true)));
    };
}

export function saveChangesAccesses(data) {
    return (dispatch) => {
        dispatch(accessesIsLoading(true));

        fetch(Url(ACCESS_PATH + '/save_changes'), Header({
            method: 'POST',
            body: JSON.stringify({data}),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(accessesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((accesses) => dispatch(accesses(accesses)))
            .catch(() => dispatch(accessesHasError(true)));
    };
}

export function deleteAccesses(ids) {
    return (dispatch, getState) => {
        dispatch(deleteAccessIdsLoading(ids));

        fetch(Url(ACCESS_PATH), Header({
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
                let all = getState().accesses;
                ids.forEach(id => {_.remove(all, (el) => {return id === el._id})});

                success('عملیات موفقیت آمیز بود.');
                dispatch(deleteAccessIdsLoading([]));
                dispatch(accesses(all))
            })
            .catch(() => error('عملیات نا موفق بود.'));
    };
}

export function createAccess(data, method = 'POST') {
    return (dispatch, getState) => {
        dispatch(accessesIsLoading(true));

        fetch(Url(ACCESS_PATH), Header({
            method: method,
            body: JSON.stringify(data),
        }))
            .then((response) => {
                dispatch(accessesIsLoading(false));

                if (response.status === 409) {
                    error('این مشخصات قبلا ثبت شده است.');
                }

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((access) => {
                success('عملیات موفقیت آمیز بود.');
                dispatch(accesses([ access, ...getState().accesses]));
            })
            .catch((response) => dispatch(createAccessHasError(true)));
    };
}

export function updateAccess(_id, index, value) {
    return (dispatch, getState) => {
        dispatch(accessesIsLoading(true));

        let data = {_id};
        data[index] = value;

        fetch(Url(ACCESS_PATH), Header({
            method: 'PUT',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(accessesIsLoading(false));

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