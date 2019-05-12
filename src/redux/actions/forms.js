import {FORM_PATH} from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils'
import {fetchProcessResponse,catchProccessor} from './GeneralFetchCatch'




export function formIsLoading(isLoading)
{
    return {
        type: 'FORM_IS_LOADING',
        isLoading,
    }
}

export function getForms(Forms)
{
    return {
        type: 'GET_FORMS',
        Forms,
    };
}
export function loadedFormById(Form)
{
    return {
        type: 'GET_FORM',
        Form,
    };
}

export function loadAllForms(){
    return (dispatch) => {
        dispatch(formIsLoading(true));

        return fetchProcessResponse(
            Url(FORM_PATH), 
            Header({method: 'GET',}))
        .then(r => r.json())
        .then(r => {
            dispatch(getForms(r)) 
            dispatch(formIsLoading(false)) 
            return Promise.resolve()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formIsLoading(false)) 
            })  

      
       
    };
}

export function addForms(header,newForm,fn){
    return (dispatch) => {
        dispatch(formIsLoading(true));
        
        fetchProcessResponse(
            Url(FORM_PATH),Header({
                method:'POST',
                body:JSON.stringify({
                    header,
                    formItems:newForm.map(item=>item._id)
                  })
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(formIsLoading(false)) 
            fn()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formIsLoading(false)) 
            })    
    };
}
export function loadFormId(id){
    return (dispatch) => {
        dispatch(formIsLoading(true));
        
       return fetchProcessResponse(
            Url(FORM_PATH+'/'+id),Header({
                method:'GET',
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(formIsLoading(false)) 
            loadedFormById(r)
            return Promise.resolve(r)
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formIsLoading(false)) 
            })    
    };
}
export function updateFormId(id,header,newForm,fn){
    return (dispatch) => {
        dispatch(formIsLoading(true));
        
        fetchProcessResponse(
            Url(FORM_PATH+'/'+id),Header({
                method:'PUT',
                body:JSON.stringify({
                    header,
                    formItems:newForm.map(item=>item._id)
                  })
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(formIsLoading(false)) 
            fn()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(formIsLoading(false)) 
            })    
    };
}
