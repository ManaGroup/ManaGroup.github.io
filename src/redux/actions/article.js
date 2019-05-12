import _ from 'lodash';
import {ARTICLE_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function articleIsLoading(bool) {
    return {
        type: 'ARTICLE_IS_LOADING',
        isLoading: bool
    };
}

export function setArticle(article) {
    return {
        type: 'ARTICLE',
        article
    };
}

export function articlesIsLoading(bool) {
    return {
        type: 'ARTICLES_IS_LOADING',
        isLoading: bool
    };
}

export function setArticles(articles) {
    return {
        type: 'ARTICLES',
        articles
    };
}

export function createArticleIsLoading(bool) {
    return {
        type: 'CREATE_ARTICLE_IS_LOADING',
        createIsLoading: bool
    };
}

export function createArticleSuccess(bool) {
    return {
        type: 'CREATE_ARTICLE_SUCCESS',
        createSuccess: bool
    };
}

export function deleteArticleIdsLoading(ids) {
    return {
        type: 'DELETE_ARTICLE_IDS_LOADING',
        deleteIdsLoading: ids
    };
}

export function getArticle(article_id) {
    return (dispatch) => {
        dispatch(setArticle({}));
        dispatch(articleIsLoading(true));

        fetch(Url(ARTICLE_PATH + '/' + article_id), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setArticle(data));
                dispatch(articleIsLoading(false));
            })
            .catch(() => error());
    };
}

export function getArticles(query = undefined) {
    return (dispatch) => {
        dispatch(articlesIsLoading(true));

        fetch(Url(ARTICLE_PATH, query), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(articlesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setArticles(data));
            })
            .catch(() => error());
    };
}

export function deleteArticles(ids) {
    return (dispatch, getState) => {
        let loadings = [...ids, ...getState().deleteArticleIdsLoading];
        dispatch(deleteArticleIdsLoading(loadings));

        fetch(Url(ARTICLE_PATH), Header({
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

                let all = {...getState().articles};
                ids.forEach(id => {_.remove(all.docs, (el) => {return id === el._id})});

                loadings = [...getState().deleteArticleIdsLoading];
                ids.forEach(id => {_.remove(loadings, (el) => {return id === el})});

                success();
                dispatch(deleteArticleIdsLoading(loadings));

                all.docs.length ? dispatch(setArticles(all)) : dispatch(getArticles());
            })
            .catch(() => error());
    };
}

export function createArticle(data, method = 'POST') {
    return (dispatch) => {
        dispatch(createArticleIsLoading(true));

        fetch(Url(ARTICLE_PATH), Header({
            method: method,
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(createArticleIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((article) => {
                dispatch(createArticleSuccess(true));
                dispatch(createArticleSuccess(false));
                success();
            })
            .catch((response) => error());
    };
}