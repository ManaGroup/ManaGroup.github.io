import {REGISTER_PATH, USER_PATH, LOGIN_PATH, CHANGE_PASSWORD_PATH} from '../../tools/Constants'
import {Url, Header, setToken, removeToken} from '../../tools/Utils';
import {success, error} from '../../tools/Message';

export function userHasError(bool) {
    return {
        type: 'USER_HAS_ERROR',
        hasError: bool
    };
}

export function userIsLoading(bool) {
    return {
        type: 'USER_IS_LOADING',
        isLoading: bool
    };
}

export function registerHasError(bool) {
    return {
        type: 'REGISTER_HAS_ERROR',
        hasError: bool
    };
}

export function registerIsLoading(bool) {
    return {
        type: 'REGISTER_IS_LOADING',
        isLoading: bool
    };
}

export function registerSuccess(bool) {
    return {
        type: 'REGISTER_SUCCESS',
        createSuccess: bool
    };
}

export function userFetchDataSuccess(user) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        user
    };
}

export function isLoggedIn(bool = false) {
    return {
        type: 'IS_LOGGED_IN',
        bool
    };
}

export function logout() {
    removeToken();
    return (dispatch) => {
        dispatch(isLoggedIn(false));
        dispatch(userFetchDataSuccess({}));
    }
}

export function logon(user, save_token = false) {

    if (!user._id) {
        return (dispatch) => {
            dispatch(isLoggedIn(false));
            dispatch(userFetchDataSuccess(user));
        }
    }


    if (save_token) {
        setToken(user.token);
    }

    return (dispatch) => {
        dispatch(isLoggedIn(true));
        dispatch(userFetchDataSuccess(user));
    }
}

export function login(form) {
    return (dispatch) => {
        dispatch(userIsLoading(true));
        fetch(Url(LOGIN_PATH), Header({
            method: 'GET',
            headers: {
                Authorization: btoa(form.user + ":" + form.pass)
            }
        }))
            .then((response) => {
               
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(logon(user, true));
            })
            .catch((e) => {
                console.log(e)
                dispatch(isLoggedIn(false));
                dispatch(userIsLoading(false));
                error('اطلاعات ورودی صحیح نمی باشد.');
            });
    };
}

export function userFetchData() {

    return (dispatch) => {
        dispatch(userHasError(false));

        fetch(Url(USER_PATH), Header())
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(logon(user));
            })
            .catch(() => {
                dispatch(userHasError(true));
                dispatch(userIsLoading(false));
            });
    };
}


export function register(data) {
    return (dispatch) => {
        dispatch(registerIsLoading(true));

        fetch(Url(REGISTER_PATH), Header({
            method: 'POST',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(registerIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(logon(user, true));
                dispatch(registerSuccess(true));
                dispatch(registerSuccess(false));
            })
            .catch((response) => dispatch(registerHasError(true)));
    };
}

export function update(data) {
    return (dispatch) => {
        dispatch(userIsLoading(true));

        fetch(Url(USER_PATH), Header({
            method: 'PUT',
            body: JSON.stringify(data),
        }))
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                success();
                dispatch(userFetchDataSuccess(user));
            })
            .catch((response) => error());
    };
}

export function changePassword(data) {
    return (dispatch) => {
        dispatch(userIsLoading(true));

        let error_message = undefined;

        fetch(Url(CHANGE_PASSWORD_PATH), Header({
            method: 'PUT',
            body: JSON.stringify(data),
        }))
            .then((response) => {

                if (response.status === 422) {
                    error_message = 'رمز وارد شده صحیح نمی‌باشد.';
                }

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(userIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                success();
            })
            .catch((response) => error(error_message));
    };
}