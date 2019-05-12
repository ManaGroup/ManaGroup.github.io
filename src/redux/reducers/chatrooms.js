export function chatroomOfUserIsLoading(state = false, action) {
    switch (action.type) {
        case 'CHATROOM_LOADING':
            return action.loading;

        default:
            return state;
    }
}
export function statesButtons(state = [], action) {
    switch (action.type) {
        case 'MENU_BUTTON_STATUS':
            return action.buttons;
        default:
            return state;
    }
}
export function loadedMessages(state = [], action) {
    switch (action.type) {
        case 'LOADED_MESSAGES':
            return action.messages;
        default:
            return state;
    }
}
export function catchFetchError(state = false, action) {
    switch (action.type) {
        case 'CATCH_ERROR':
            return action.hasError;

        default:
            return state;
    }
}



export function retrivechatid(state = '', action) {
    switch (action.type) {
        case 'RETRIVE_CHATID':
            return action.chatroomId;

        default:
            return state;
    }
}
export function pushChatroom(state = [], action) {
    switch (action.type) {
        case 'PUSH_CHATROOMS':
            return action.chatrooms;

        default:
            return state;
    }
}

export function getstatus(state = 'initial', action) {
    switch (action.type) {
        case 'GET_STATUS':
            return action.status;

        default:
            return state;
    }
}
