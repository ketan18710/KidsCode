/**
 * 
 * Login Messages
 * 
 */

 import { defineMessages } from 'react-intl';

 export const scope = 'grorapid.containers';

 export default defineMessages({
    Header: {
        id: `${scope}.ForgotPassword.header`,
        defaultMessage:'Reset Password'
    },
    WelcomeMessage: {
        id: `${scope}.ForgotPassword.WelcomeMsg`,
        defaultMessage:"We'll email you instructions on how to reset your password"
    },
    ReturnToLogin : {
        id:`${scope}.ReturnToLogin`,
        defaultMessage:"Return to login screen"
    },
    EmailSendDoneHeader : {
        id:`${scope}.EmailSendDoneHeader`,
        defaultMessage:"Done! Check your inbox!"
    },
    EmailSendDoneDescription :{
        id:`${scope}.EmailSendDoneDescription`,
        defaultMessage:"We have sent an email with password reset instructions. If it doesn’t show up soon, check your spam folder."
    },
    PasswordResetHeader :{
        id:`${scope}.PasswordResetHeader`,
        defaultMessage:"Reset Password"
    },
    PasswordResetDescription :{
        id:`${scope}.PasswordResetDescription`,
        defaultMessage:" Enter your new password and you are good to go"
    }
 })