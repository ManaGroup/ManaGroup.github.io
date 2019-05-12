import {RECENTLY_NOTIFIER_PATH } from '../../tools/Constants'
import {Url, Header} from '../../tools/Utils';
import {success} from '../../tools/Message';
import {fetchProcessResponse,catchProccessor} from './GeneralFetchCatch'



export function recentlyIsLoading(isLoading) {
    return {
        type: 'RECENTLY_IS_LOADING',
        isLoading,
    };
}
export function getAllRecentFromChatroom(data) {
    return {
        type: 'RECENTLY_ACTIVITY_FROM_CHAT',
        recentlyActivityFromChat: data
    };
}

//TODO
export function recentlyNotifiterFind(chatroomId) {
    return (dispatch) => {
        dispatch(recentlyIsLoading(true));

        fetchProcessResponse(
            Url(RECENTLY_NOTIFIER_PATH+`/${chatroomId}`), Header({}))
        .then(r => r.json())
        .then(r => {
            dispatch(recentlyIsLoading(false));
            success('notify find successfull')
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(recentlyIsLoading(false));
            })  

      
    };
}

export function findRecentlyFromChatroomByUser(userId) {
    return (dispatch) => {

        dispatch( recentlyIsLoading(true));
        fetchProcessResponse(
            Url(RECENTLY_NOTIFIER_PATH), Header({
                method:'POST',
                body:JSON.stringify({
                    userId,
                })
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(recentlyIsLoading(false));
            success('request fetched find user chatroom recently successfull')
            dispatch(getAllRecentFromChatroom(r))
            return r
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(recentlyIsLoading(false));
            })  
    };
}
export function recentlyNotifiterUpdate(chatroomId,title,description,status) {
    return (dispatch) => {

        dispatch(recentlyIsLoading(true));

        fetchProcessResponse(
            Url(RECENTLY_NOTIFIER_PATH), Header({
                method:'PUT',
                body:JSON.stringify({
                    status,
                    chatroomId,
                    title,
                    description
                })
            }))
        .then(r => r.json())
        .then(r => {
            dispatch(recentlyIsLoading(false));
            success('notify update successfull')
        })
        .catch((e) =>{
            catchProccessor(e)
            dispatch(recentlyIsLoading(false));
            })  


      
    };
}