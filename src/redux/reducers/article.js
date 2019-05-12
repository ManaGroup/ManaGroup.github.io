export function articleIsLoading(state = false, action) {
    switch (action.type) {
        case 'ARTICLE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function article(state = [], action) {
    switch (action.type) {
        case 'ARTICLE':
            return action.article;

        default:
            return state;
    }
}

export function articlesIsLoading(state = false, action) {
    switch (action.type) {
        case 'ARTICLES_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function articles(state = {docs: []}, action) {
    switch (action.type) {
        case 'ARTICLES':
            return action.articles;

        default:
            return state;
    }
}

export function createArticleIsLoading(state = false, action) {
    switch (action.type) {
        case 'CREATE_ARTICLE_IS_LOADING':
            return action.createIsLoading;

        default:
            return state;
    }
}

export function createArticleSuccess(state = false, action) {
    switch (action.type) {
        case 'CREATE_ARTICLE_SUCCESS':
            return action.createSuccess;

        default:
            return state;
    }
}

export function deleteArticleIdsLoading(state = [], action) {
    switch (action.type) {
        case 'DELETE_ARTICLE_IDS_LOADING':
            return action.deleteIdsLoading;

        default:
            return state;
    }
}