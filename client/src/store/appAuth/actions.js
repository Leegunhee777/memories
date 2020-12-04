import { action } from 'typesafe-actions';

import {
    // Init
    INIT_ALL,
    INIT_AUTH_DATA,
    INIT_USER_DATA,
    // User
    UPDATE_USER_CODILIST,
    UPDATE_USER_BASKET,
    UPDATE_USER_DATA,
    UPDATE_USER_EMAIL,
    UPDATE_USER_PHONE,
    // Auth
    UPDATE_AUTH_STATE,
    UPDATE_AUTH_TOKEN,

    UPDATE_MAP_IS_SHOW
} from './constants';

export const updateConfigData = {
    updateIsShowDialForMap: (isShow) => action(
        UPDATE_MAP_IS_SHOW,
        isShow
    )
};


export const initAuthState = {
    initAuthData: () => action(
        INIT_AUTH_DATA
    ),

    initUserData: () => action(
        INIT_USER_DATA
    )
};

export const updateUserData = {
    updateUserData: (data) => action(
        UPDATE_USER_DATA,
        data
    ),
    updateUserEmail: (email) => action(
        UPDATE_USER_EMAIL,
        email
    ),
    updateUserPhone: (phone) => action(
        UPDATE_USER_PHONE,
        phone
    ),
    updateUsercodilist: (codilist) => action(
        UPDATE_USER_CODILIST,
        codilist
    ),
    updateUserbasket: (basket) => action(
        UPDATE_USER_BASKET,
        basket
    ),
   
}

export const updateAuthData = {
    updateAuthToken: (token) => action(
        UPDATE_AUTH_TOKEN,
        token
    ),
    updateAuthState: (state) => action(
        UPDATE_AUTH_STATE,
        state
    ),
}
