
import {CHATROOM_PATH,CHAT_PATH } from '../../tools/Constants'
import {fetchProcessResponse,catchProccessor} from './GeneralFetchCatch'

import {Url, Header} from '../../tools/Utils';

export function chatroomOfUserIsLoading(bool) {
    return {
        type: 'CHATROOM_LOADING',
        loading: bool
    };
}
export function getStatus(status)
{
    return {
        type:'GET_STATUS',
        status,
    }
}
export function menuButtons(buttons)
{
    return {
        type:'MENU_BUTTON_STATUS',
        buttons,
    }
}
export function pushChatroom(chatrooms) {
    return {
        type: 'PUSH_CHATROOMS',
        chatrooms
    };
}
export function retriveChatroomId(chatroomId) {
    
    return {
        type: 'RETRIVE_CHATID',
        chatroomId
    };
}
export function upsertChatroom(userid,productId,history){
    return (dispatch) => {
        
        
        dispatch(chatroomOfUserIsLoading(true));
        fetchProcessResponse(
            Url(CHATROOM_PATH), 
            Header({
                method: 'PATCH',
                body: JSON.stringify({userid, productId}),
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
            
            history.push("/chatrooms/"+r)
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })
      
    };
}
export function connect2Chatroom(userInfo,chatroomId){
    return (dispatch) => {
        
        
        dispatch(chatroomOfUserIsLoading(true));
          
       return fetchProcessResponse(
            Url(CHATROOM_PATH + '/'+chatroomId), 
            Header({
                method: 'PATCH',
                body:JSON.stringify({userInfo,chatroomId})
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.resolve()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.reject()
            })

      
    };
}
export function loadAllChatroom(userid,query = undefined) {
    return (dispatch,getState) => {
        dispatch(chatroomOfUserIsLoading(true));
        fetchProcessResponse(
            Url(CHATROOM_PATH + '/user/'+userid,query),
            Header())
        .then(r => r.json())
        .then(r => {
            dispatch(pushChatroom(r)) ;
            dispatch(chatroomOfUserIsLoading(false));
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })
       
    };
}
export function formSendToAdmin(userId,formId,data,chatroomId) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));
        
        fetchProcessResponse(
            Url(CHAT_PATH + '/form_admin/'+formId), 
            Header({
                method: 'POST',
                body: JSON.stringify({userId,data, chatroomId}),
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })


     
    };
}
export function formSendToClient(userId,formId,chatroomId,fn) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));
 
        fetchProcessResponse(
            Url(CHAT_PATH + '/form_client/'+formId), 
            Header({
                method: 'POST',
    
                body: JSON.stringify({userId, chatroomId}),
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
            fn()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })
     
    };
}
export function getPureChatroomStatusName(chatroomId) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));

        return fetchProcessResponse(Url(CHATROOM_PATH + '/status/name/'+chatroomId), Header())
        .then(r => r.json())
        .then(r => {
            dispatch(getStatus(r))
            //dispatch(menuButtons(r))
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.resolve(r)
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })

    
    };
}
export function getChatroomStatus(chatroomId) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));

        return fetchProcessResponse(Url(CHATROOM_PATH + '/status/'+chatroomId), Header())
        .then(r => r.json())
        .then(r => {
            //dispatch(getStatus(r))
            dispatch(menuButtons(r))
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.resolve(r)
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            })

    
    };
}
export function loadAllMessage(chatroomId) {
    return  (dispatch) => {
         dispatch(chatroomOfUserIsLoading(true));

         return fetchProcessResponse(Url(CHAT_PATH + '/'+chatroomId), Header({}))
         .then(r => r.json())
         .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.resolve(r)
         })
         .catch((e) =>{
             catchProccessor(e)
             dispatch(chatroomOfUserIsLoading(false));
             })
 
     };
   
}
export function setChatroomStatus(chatroomId,stat) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));

        return fetchProcessResponse(Url(CHATROOM_PATH + '/status'), Header({
            method:'POST',
            body:JSON.stringify({
                status:stat,
                _id:chatroomId,
             }),
        }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.resolve()
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(chatroomOfUserIsLoading(false));
            return Promise.reject(e)
            })
   
    };
}
export function send2server(msg) {
    return (dispatch) => {

        dispatch(chatroomOfUserIsLoading(true));

        fetchProcessResponse(Url(CHAT_PATH ), Header({
            method:'POST',
            body:JSON.stringify({
                sender:         msg.sender,
                chatroomId:     msg.chatroomId,
                type:           msg.type,//Form, Message
                mode:           msg.mode,//monocast , broadcast
                createdAt:      msg.createdAt,
                text:           msg.text,
             }),
        }))
        .then(r => r.json())
        .then(r => {
            dispatch(chatroomOfUserIsLoading(false));
        })
        .catch((e) =>{
            dispatch(chatroomOfUserIsLoading(false));
            catchProccessor(e)
            })
        
          
      
        return Promise.resolve()
    };
}