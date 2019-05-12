import {FORM_ITEM_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {fetchProcessResponse,catchProccessor} from './GeneralFetchCatch'

export function formItemIsLoading(isLoading)
{
    return {
        type: 'FORM_ITEM_IS_LOADING',
        isLoading,
    }
}

export function getFormsItems(FormItems)
{
    return {
        type: 'GET_FORMITEMS',
        FormItems,
    };
}

export function addFormItem(title,itemType,placeholder,value_){
    return (dispatch) => {

        dispatch(formItemIsLoading(true));


        return fetchProcessResponse(
            Url(FORM_ITEM_PATH), 
            Header({method: 'POST',
                body:JSON.stringify({
                    title,
                    itemType,
                    placeholder,
                    value:value_,
                })
            }))
        .then(r => r.json())
        .then( r => {
            dispatch(formItemIsLoading(false)) 
            return Promise.resolve('ok')
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formItemIsLoading(false)) 
            })  
    };
}

export function loadAllFormsItems(){
    return (dispatch) => {
        dispatch(formItemIsLoading(true));


        fetchProcessResponse(
            Url(FORM_ITEM_PATH), 
            Header({method: 'GET',}))
        .then(r => r.json())
        .then(r => {
            dispatch(getFormsItems(r)) 
            dispatch(formItemIsLoading(false)) 
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formItemIsLoading(false)) 
            })  
    };
}

