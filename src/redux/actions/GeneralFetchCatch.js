import {error} from '../../tools/Message'

export function fetchProcessResponse(_str,_header,cb,...args){
    return fetch(_str, _header)
    .then(response => {
        if (!response.ok) {
            throw Error(response.status);
        }
        if(cb && typeof(cb)==='function')
            cb.call(this,...args)

        return response;
    })
}

export function catchProccessor(e,options={}){

    if(Object.getOwnPropertyNames(options).length>0){
        options[e.message] && options[e.message]()
    }
    else{
        catchOptions[e.message] && catchOptions[e.message]()
        !catchOptions[e.message] && error('NOT IMPLIMENTED: '+e.message+" ERROR CODE")
    }
    
}
export const catchOptions={
    400:()=>{error('400 cath Options')},
    401:()=>{error('401 cath Options')},
    403:()=>{error('403 cath Options')},
    404:()=>{error('404 cath Options')},
}