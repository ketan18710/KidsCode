/**
 * @description Validation helpers deals with all types of in app validation
 */

import {LOGIN_FORM_CONSTANTS,FORM_ERROR_MESSAGES} from 'utils/constants';

const errorValidation = {};

const ValidationHelpers = {
  isRequired: value => {
    if (value===null) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value==="null") return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (value===undefined) return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    if (typeof value === 'number' || typeof value === 'boolean') {
      return value ? null : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    }
    return value.trim().length > 0
      ? null
      : FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  isEmpty: value => {
    if (value && value.length >0) {
      return null;
    }
    return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  checkEmail: value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_EMAIL_ADDRESS;
    }
    return null;
  },
  checkFullName: value => {
    const regex = /[a-zA-Z0-9'-]\s{0,}/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkFirstName : value =>{
    const regex = /^[a-zA-Z\s]{0,30}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkPhoneNumber: value =>{
    const regex = /^[0-9]{0,12}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NUMBER;
    }
    return null;
  },
  checkNumber : value =>{
    const regex = /^[0-9]{0,}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkImageFile : value =>{
    const regex = /.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkExcelFile : value =>{
    const regex = /^.+\.(xlsx|xls|csv)$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkPassword: value => {
    if (value && value.length < 8) {
      return FORM_ERROR_MESSAGES.PASSWORD_CRITERIA;
    }
    return null;
  },
  checkDomain : value => {
    const regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
    if (value && !regex.test(String(value).toLowerCase())){
      return FORM_ERROR_MESSAGES.INVALID_DOMAIN
    }
  },
  handleLoginFormValidation(values) {
    const errors = {};
    errors[LOGIN_FORM_CONSTANTS.USERNAME] = this.isEmpty(values[LOGIN_FORM_CONSTANTS.USERNAME]);
    errors[LOGIN_FORM_CONSTANTS.PASSWORD] = this.isEmpty(values[LOGIN_FORM_CONSTANTS.PASSWORD]) || this.checkPassword(values[LOGIN_FORM_CONSTANTS.PASSWORD]);
    return errors; 
  },
};

export default ValidationHelpers;
