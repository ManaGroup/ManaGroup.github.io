import _ from 'lodash';
import {TAG_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function tagIsLoading(bool) {
    return {
        type: 'TAG_IS_LOADING',
        isLoading: bool
    };
}

export function setTag(tag) {
    return {
        type: 'TAG',
        tag
    };
}

export function tagsIsLoading(bool) {
    return {
        type: 'TAGS_IS_LOADING',
        isLoading: bool
    };
}

export function setTags(tags) {
    return {
        type: 'TAGS',
        tags
    };
}

export function createTagIsLoading(bool) {
    return {
        type: 'CREATE_TAG_IS_LOADING',
        createIsLoading: bool
    };
}

export function createTagSuccess(bool) {
    return {
        type: 'CREATE_TAG_SUCCESS',
        createSuccess: bool
    };
}

export function deleteTagIdsLoading(ids) {
    return {
        type: 'DELETE_TAG_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function getTag(tag_id) {
    return (dispatch) => {
        dispatch(tagIsLoading(true));

        fetch(Url(TAG_PATH + '/' + tag_id), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(tagIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setTag(data));
            })
            .catch(() => error());
    };
}

export function getTags(query = undefined) {
    return (dispatch) => {
        dispatch(tagsIsLoading(true));

        fetch(Url(TAG_PATH, query), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(tagsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setTags(data));
            })
            .catch(() => error());
    };
}

export function deleteTags(ids) {
    return (dispatch, getState) => {
        let loadings = [...ids, ...getState().deleteTagIdsLoading];
        dispatch(deleteTagIdsLoading(loadings));

        fetch(Url(TAG_PATH), Header({
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
                let all = {...getState().tags};
                ids.forEach(id => {_.remove(all.docs, (el) => {return id === el._id})});

                loadings = [...getState().deleteTagIdsLoading];
                ids.forEach(id => {_.remove(loadings, (el) => {return id === el})});

                success();
                dispatch(deleteTagIdsLoading(loadings));

                all.docs.length ? dispatch(setTags(all)) : dispatch(getTags());
            })
            .catch(() => error());
    };
}

export function createTag(data, method = 'POST') {
    return (dispatch) => {
        dispatch(createTagIsLoading(true));

        fetch(Url(TAG_PATH), Header({
            method: method,
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(createTagIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((tag) => {
                dispatch(createTagSuccess(true));
                dispatch(createTagSuccess(false));
                success();
            })
            .catch((response) => error());
    };
}