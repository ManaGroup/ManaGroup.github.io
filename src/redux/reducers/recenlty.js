export function recentlyIsLoading(state = false, action) {
    switch (action.type) {
        case 'RECENTLY_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
export function recentlyActivityFromChat(state = [], action) {
    switch (action.type) {
        case 'RECENTLY_ACTIVITY_FROM_CHAT':
            return action.recentlyActivityFromChat;

        default:
            return state;
    }
}
