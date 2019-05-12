import _ from 'lodash';
import {CATEGORY_PATH} from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function categoryIsLoading(bool) {
    return {
        type: 'CATEGORY_IS_LOADING',
        isLoading: bool
    };
}

export function setCategory(category) {
    return {
        type: 'CATEGORY',
        category
    };
}

export function categoriesIsLoading(bool) {
    return {
        type: 'CATEGORIES_IS_LOADING',
        isLoading: bool
    };
}

export function setCategories(categories) {
    return {
        type: 'CATEGORIES',
        categories
    };
}

export function createCategoryIsLoading(bool) {
    return {
        type: 'CREATE_CATEGORY_IS_LOADING',
        createIsLoading: bool
    };
}

export function createCategorySuccess(bool) {
    return {
        type: 'CREATE_CATEGORY_SUCCESS',
        createSuccess: bool
    };
}

export function deleteCategoryIdsLoading(ids) {
    return {
        type: 'DELETE_CATEGORY_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function getCategory(category_id) {
    return (dispatch) => {
        dispatch(categoryIsLoading(true));

        fetch(Url(CATEGORY_PATH + '/' + category_id), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(categoryIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCategory(data));
            })
            .catch(() => error());
    };
}

export function getCategories(query = undefined) {
    return (dispatch) => {
        dispatch(categoriesIsLoading(true));

        fetch(Url(CATEGORY_PATH, query), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(categoriesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCategories(data));
            })
            .catch(() => error());
    };
}

export function deleteCategories(ids) {
    return (dispatch, getState) => {
        let loadings = [...ids, ...getState().deleteCategoryIdsLoading];
        dispatch(deleteCategoryIdsLoading(loadings));

        fetch(Url(CATEGORY_PATH), Header({
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
                let all = {...getState().categories};
                ids.forEach(id => {_.remove(all.docs, (el) => {return id === el._id})});

                loadings = [...getState().deleteCategoryIdsLoading];
                ids.forEach(id => {_.remove(loadings, (el) => {return id === el})});

                success();
                dispatch(deleteCategoryIdsLoading(loadings));

                all.docs.length ? dispatch(setCategories(all)) : dispatch(getCategories());
            })
            .catch(() => error());
    };
}

export function createCategory(data, method = 'POST') {
    return (dispatch) => {
        dispatch(createCategoryIsLoading(true));

        fetch(Url(CATEGORY_PATH), Header({
            method: method,
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(createCategoryIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((category) => {
                dispatch(createCategorySuccess(true));
                dispatch(createCategorySuccess(false));
                success();
            })
            .catch((response) => error());
    };
}