/**
 * 
 * Login Messages
 * 
 */

 import { defineMessages } from 'react-intl';

 import { BRAND_TITLE } from 'utils/constants';

 export const scope = 'KidsCode.containers';

 export default defineMessages({
    Header: {
        id: `Login to ${BRAND_TITLE}`,
        defaultMessage:`Login to ${BRAND_TITLE}`
    },
    WelcomeMessage: {
        id: `${scope}.LoginPage.WelcomeMsg`,
        defaultMessage:'Welcome, please login to your account.'
    },
    RememberMe:{
        id: `${scope}.LoginPage.RememberMe`,
        defaultMessage:'Remember me'
    },
    Title: {
        id: `${scope}.LoginPage.Title`,
        defaultMessage:`${BRAND_TITLE}-Login`
    },
    ForgotPassword:{
        id: `${scope}.Common.Forgot_Pass`,
        defaultMessage:'Forgot Password'
    },
    AlreadyHaveAccount:{
        id: `${scope}.Common.AlreadyAccount`,
        defaultMessage:'Already have an account ?'
    }
 })