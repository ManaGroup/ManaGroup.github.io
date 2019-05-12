import { combineReducers } from 'redux';
import {user, isLoggedIn, userHasError, userIsLoading, registerSuccess, registerHasError, registerIsLoading} from './user';
import {permissions, permissionsHasError, permissionsIsLoading, createPermissionHasError, createPermissionIsLoading, createPermissionSuccess, deletePermissionIdsLoading} from './permission'
import {accesses, accessesHasError, accessesIsLoading, createAccessHasError, createAccessIsLoading, createAccessSuccess, deleteAccessIdsLoading} from './access'
import {roles, rolesHasError, rolesIsLoading, createRoleSuccess, createRoleHasError, createRoleIsLoading, deleteRoleIdsLoading, changePermissionIdsLoading, changeAccessIdsLoading} from './role';
import {person, personIsLoading, persons, personsIsLoading, createPersonIsLoading, createPersonSuccess, deletePersonIdsLoading} from './person';
import {catchFetchError,pushChatroom,chatroomOfUserIsLoading,retrivechatid,loadedMessages,getstatus,statesButtons} from './chatrooms';
import {Form,Forms,formIsLoading} from './forms';
import {FormsItems,formItemIsLoading} from './formsItem';
import {Products,productIsLoading,pushProducts,pushProduct} from './product';
import {recentlyActivityFromChat,recentlyIsLoading} from './recenlty';
import {article, articleIsLoading, articles, articlesIsLoading, createArticleIsLoading, createArticleSuccess, deleteArticleIdsLoading} from './article';
import {category, categoryIsLoading, categories, categoriesIsLoading, createCategoryIsLoading, createCategorySuccess, deleteCategoryIdsLoading} from './category';
import {tag, tagIsLoading, tags, tagsIsLoading, createTagIsLoading, createTagSuccess, deleteTagIdsLoading} from './tag';

export default combineReducers({
    user,
    isLoggedIn,
    userHasError,
    userIsLoading,
    registerSuccess,
    registerHasError,
    registerIsLoading,
    permissions,
    permissionsHasError,
    permissionsIsLoading,
    createPermissionHasError,
    createPermissionIsLoading,
    createPermissionSuccess,
    deletePermissionIdsLoading,
    accesses,
    accessesHasError,
    accessesIsLoading,
    createAccessHasError,
    createAccessIsLoading,
    createAccessSuccess,
    deleteAccessIdsLoading,
    roles,
    rolesHasError,
    rolesIsLoading,
    createRoleSuccess,
    createRoleHasError,
    createRoleIsLoading,
    deleteRoleIdsLoading,
    changePermissionIdsLoading,
    changeAccessIdsLoading,
    person,
    personIsLoading,
    persons,
    personsIsLoading,
    createPersonIsLoading,
    createPersonSuccess,
    deletePersonIdsLoading,
    //chatrooms
    catchFetchError,
    pushChatroom,
    pushProducts,
    pushProduct,
    chatroomOfUserIsLoading,
    retrivechatid,
    loadedMessages,
    getstatus,
    statesButtons,
    //form
    Form,
    Forms,
    formIsLoading,
    //products
    Products,
    productIsLoading,
    //formItems
    FormsItems,
    formItemIsLoading,
    //recently
    recentlyActivityFromChat,
    recentlyIsLoading,
    //
    article,
    articleIsLoading,
    articles,
    articlesIsLoading,
    createArticleIsLoading,
    createArticleSuccess,
    deleteArticleIdsLoading,
    category,
    categoryIsLoading,
    categories,
    categoriesIsLoading,
    createCategoryIsLoading,
    createCategorySuccess,
    deleteCategoryIdsLoading,
    tag,
    tagIsLoading,
    tags,
    tagsIsLoading,
    createTagIsLoading,
    createTagSuccess,
    deleteTagIdsLoading,
});