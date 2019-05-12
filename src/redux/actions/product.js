import {PRODUCT_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {fetchProcessResponse,catchProccessor} from './GeneralFetchCatch'
import { success } from '../../tools/Message';



export function productIsLoading(isLoading)
{
    return {
        type: 'PRODUCT_IS_LOADING',
        isLoading,
    }
}


export function getProducts(Products)
{
    return {
        type: 'GET_PRODUCTS',
        Products,
    }
}
export function pushProducts(products) {
    return {
        type: 'PUSH_PRODUCTS',
        products
    };
}
export function pushProduct(product) {
    return {
        type: 'PUSH_PRODUCT',
        product
    };
}

export function loadAllProducts(query = undefined){
    return (dispatch) => {
        dispatch(productIsLoading(true));

        fetchProcessResponse(
            Url(PRODUCT_PATH,query), 
            Header({
                method: 'GET',
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(pushProducts(r)) ;
            dispatch(productIsLoading(false));
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(productIsLoading(false));
            })

        
    };
}


export function loadProduct(_id){
    return (dispatch) => {
        dispatch(productIsLoading(true));
        
        fetchProcessResponse(
            Url(PRODUCT_PATH +'/'+_id), 
            Header({method: 'GET',}))
        .then(r => r.json())
        .then(r => {
            console.log(r)
            //alert('loaded one product')
            dispatch(pushProduct(r)) 
            dispatch(productIsLoading(false)) 
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(productIsLoading(false))
            })  
        
    };
}
export function UpdateProduct(data){
    return (dispatch) => {
        dispatch(productIsLoading(true));

        return  fetchProcessResponse(
            Url(PRODUCT_PATH+'/'+data._id),Header({
                method:'PUT',
                body:JSON.stringify(data)
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(productIsLoading(false)) 
            success()
            return Promise.resolve();
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(productIsLoading(false))
            })  
    };
}
export function addProducts(data){
    return (dispatch) => {
        dispatch(productIsLoading(true));

        return  fetchProcessResponse(
            Url(PRODUCT_PATH),Header({
                method:'POST',
                body:JSON.stringify(data)
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(productIsLoading(false)) 
            success()
            return Promise.resolve();
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(productIsLoading(false))
            })  
    };
}
