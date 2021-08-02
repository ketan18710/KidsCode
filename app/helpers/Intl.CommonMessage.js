/**
 * 
 * Common Messages
 * 
 */

import { defineMessages } from 'react-intl';

export const scope = 'grorapid.containers';

export default defineMessages({
   RememberMe:{
       id: `${scope}.Common.RememberMe`,
       defaultMessage:'Remember me'
   },
   ForgotPassword:{
       id: `${scope}.Common.ForgotPass`,
       defaultMessage:'Forgot Password'
   },
   AlreadyHaveAccount:{
       id: `${scope}.Common.AlreadyAccount`,
       defaultMessage:'Already have an account?'
   },
   DontHaveAccount: {
        id: `${scope}.Common.DontHaveAccount`,
        defaultMessage:"Don't have an account?"
   }
})