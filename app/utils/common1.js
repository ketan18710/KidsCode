/**
 * @description Common helpers file for in app.
 */

import history from 'utils/history';
import { AUTH_TOKEN ,PREVIEWDESIGN,PREVIEW_DESIGN,WEBPAGE_PREVIEW_DESIGN,FORM_PREVIEW_DESIGN,CAMPAIGN_PREVIEW_DESIGN, COMMON_NAVIGATION, NAVIGAION_LABELS, APP_ROUTES, routeToExcludeForUserProfileApi } from 'utils/constants';
import { useLocation } from 'react-router-dom';
import { LINKEDIN_CALLBACK_URL } from 'utils/apiConfig';
import { PROD_DOMAIN } from 'utils/apiConfig';
import { toast } from 'react-toastify';


export const redirectToUrl = (endpoint = null) => {
    endpoint ? history.push(endpoint) : null;
}
export const DOWNLOAD_SAMPLE_FILE = 'https://rapidtech.s3.amazonaws.com/portal/Sample.csv';
/// default images for all browse
export const EXPLORE_EMAIL_MEDIA = 'https://rapidtech.s3.amazonaws.com/portal/explore-emails.png'
export const EXPLORE_RECIPE_MEDIA = 'https://rapidtech.s3.amazonaws.com/portal/explore-recipes.png';
export const EXPLORE_WEBPAGE_MEDIA = 'https://rapidtech.s3.amazonaws.com/portal/explore-pages.png';
export const EXPLORE_FORM_MEDIA = 'https://rapidtech.s3.amazonaws.com/portal/explore-forms.png';
export const EXPLORE_WORKFLOW = 'https://rapidtech.s3.amazonaws.com/portal/explore-pages.png';
// common variable for email check //
export const UNVERIFIED_EMAIL = 'Your email is not verified';
/* eslint no-param-reassign: ["error", { "props": false }] */
export const request = (url, options) => {
    if (options.headers) {
      Object.assign(options.headers, { Accept: 'application/json' })
      if (!options.headers.Authorization) {
        options.headers.Authorization = `Bearer ${localStorage.getItem(
          AUTH_TOKEN  ,
        )}`;
      }
    }
    return fetch(url, {
      ...options,
      mode: 'cors',
    })
      .then(response => response.json() || response)
      .then(json => json)
      .catch(err => ({ err }));
  };

export const getResponseFromApiResponse = (data) => {
    const { response, statusCode } = data;
    if(!response) return null;
    if(statusCode === 200 || statusCode === 201) {
      return response;
    }
    if(statusCode === 401 || statusCode === 404 || statusCode === 422 || statusCode === 429){
      return response.errors ? response.errors : response;
    } 
    else if(statusCode === 500 || statusCode === 502) {
      return  response || 'Server Error'
    }
    else{
      return response
    }
}

export const getUserData = (userData) =>{
  if (userData){
    return {
      ...userData,
      brand_id : userData.selectedBrand.id,
      brand_name: userData.selectedBrand.name,
      brand_slug: userData.selectedBrand.slug,
      onboarded :userData.selectedBrand.onboarded ? true: false,
      favicon : userData.selectedBrand.favicon,
      logo : userData.selectedBrand.logo,
      website : userData.selectedBrand.website,
      role:userData.role.name,
    }
  }
}
/**
 * Find exact error message in api's
 */
export const getErrorMessage = (response) =>{
  if(!response) return null;
  const message= Object.values(response.contact || response)
  if(typeof(message && message[0])==='object'){
    if(message[0].length > 1){
      return message[0][0]
    }else{
      const newMessage =  Object.values(message[0]);
      return newMessage[0]
    }
  }
  if(typeof(message && message[0]) === 'string'){
    return message[0];
  }
}

export const checkForAPIStatus = (response) => {
  
}
export const getUrlParams = (options) => {
  if(!options.params) return null;
  return options.params;
}

export const extractParamsFromUrl = () => {
  const params = new URLSearchParams(history.location.search ? history.location.search: history.location.state && history.location.state.from.search ? history.location.state.from.search: parseSessionStorage('firstVisit') && parseSessionStorage('firstVisit').search);
  let obj = {};
  for(let value of params.keys()) {
    obj[value] = params.get(value);
  }
  return obj;
}

export const checkRegisterRedirection = () => {
  const { location } = history;
  const params = extractParamsFromUrl();
  if(params && params.r) {
    return { 
      redirect: true,
      params: location.search ? location.search: location.state && location.state.from.search
    }
  }
  return {
    redirect: false,
  };  
}

export const parseSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
}

export const checkRoute = () => {
  const { location: { pathname } } = history;
  return routeToExcludeForUserProfileApi.find(r => r === pathname);
}

export const getAuthRoute = () => {
  const { redirect, params } =  checkRegisterRedirection();
  return redirect ? `${APP_ROUTES.REGISTER}${params}` : `${APP_ROUTES.LOGIN}`
} 

/**
 * Convert specials chachters used in name into slug
 */
export const convertToSlug = (Text) =>
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}
/**
 * Filter preview images for all containers
 */
export const filterPreviewMedia = (allMedia)=>{
  if(allMedia.length<=0) return null
  const previewValuesArray = [PREVIEW_DESIGN,WEBPAGE_PREVIEW_DESIGN,FORM_PREVIEW_DESIGN,CAMPAIGN_PREVIEW_DESIGN]
  const media = allMedia.find(media => previewValuesArray.includes(media.group) )
  return media
}
/**
 * Filter preview images for recipe containers
 */
export const filterPreviewMediaRecipes = (allMedia)=>{
  if(allMedia.length<=0) return null
  allMedia = allMedia.reverse()
  const previewValuesArray = [PREVIEW_DESIGN,WEBPAGE_PREVIEW_DESIGN,FORM_PREVIEW_DESIGN,CAMPAIGN_PREVIEW_DESIGN]
  const media = allMedia.find(media => previewValuesArray.includes(media.group) )
  return media
}
/**
 * Filter extension for media or doc files
 */
export const changeMimetypeToUppercase = (str) =>{
 // const res = str.match(/png|jpg|jpeg|docx|pdf|xlsx|csv|ppt|pptx|tiff|tif|gif|psd|eps|raw|odt|ods|txt/g);
  const res = str.match(/\..\w{0,}/g);
  const newRes = res && res[0].replace(/\./g,'')
  const uppercase = newRes && newRes.toUpperCase();
  return uppercase ? uppercase : '';
}
/**
 * Get last location visited before login route
 */
export const getLastLocationVisited = (location) => {
  return {
    fullpath: location && location.state && location.state.from && `${location.state.from.pathname}${location.state.from.search || ''}`,
    pathname: location && location.state && location.state.from && location.state.from.pathname
  }
}

/**
 * Get All Brands List based on roles
 */
export const getBrandsList = (userData) => {
  if(!userData) return [];
  const { brands: { data: BRANDS }, roles } = userData;
  if(!roles.data || !roles.data.length) return [];
  const allRoleBrandIds = roles.data.map(role => role && role.brand_id);
  return BRANDS && BRANDS.filter(b => {
    if(allRoleBrandIds.includes(b.id)) return true;
  })
}

const getSelectedBrand = (data, brandId) => {
  if(!data) return null;
  const bId = brandId || localStorage.getItem('selectedBrand');
  const brand =  (data.brands && data.brands.data.find(b => b.id === bId)) || data.brands && data.brands.data && data.brands.data[0];
  return singleBrandSchema(brand, data);
}

const singleBrandSchema = (brand = null, userData) => {
  const role =  userData && userData.roles && userData.roles.data.find(role => role.brand_id === brand.id);
  return {
    ...brand,
    navLogo: brand && brand.logo.data && brand.logo.data.length && brand.logo.data[brand.logo.data.length - 1] && brand.logo.data[brand.logo.data.length - 1].url,
    role,
    navigation : getRoleBasedNavigationObj(role && role.name)
  }
}
export const getMatchedRole = (roles, userData, brandId) => {
  return roles.find(role => role.brand_id === getSelectedBrand(userData, brandId).id)   
}

export const commonUserDataStructure = (userData, brandId) => {
  if(!userData) return null;
  const { me:{ data } } = userData;
  const { roles: { data: allRoles = [] } } = data; 
  // debugger
  return {
      brands: data.brands && data.brands.length >0 &&data.brands.data.map(brand => (
        { 
          name: brand.name, 
          onboarded: brand.onboarded, 
          id: brand.id, 
          slug: brand.slug, 
          industry: brand.industry_code , 
          website : brand.website, 
          logo:brand.logo , 
          favicon:brand.favicon ,
          p_key : brand.p_key,
          site_code_verified : brand.site_code_verified,
          site_code : brand.site_code 
        }
      )),
      email: data.email,
      countryCode: data.country_code || data.countryCode,
      email_verified: data.email_verified || data.email_verified,
      firstName: data.first_name || data.firstName,
      lastName: data.lastName || data.last_name,
      phone: data.phone,
      id: data.id,
      role: getMatchedRole(allRoles, data, brandId),
      roles: allRoles,
      selectedBrand: getSelectedBrand(data, brandId),
      permissions: allRoles && getSelectedBrand(data, brandId) && getMatchedRole(allRoles, data, brandId) && getMatchedRole(allRoles, data, brandId).permissions && getMatchedRole(allRoles, data, brandId).permissions.data && getMatchedRole(allRoles, data, brandId).permissions.data.reduce((acc, perm) => ({ ...acc, [perm.name] : perm && perm.name }), {}),
      currentBrands:  getBrandsList(data),
  }   
}

export const getRoleBasedNavigationObj = (role) => {
  if(!role) return null;
  const loopKeys = Object.keys(COMMON_NAVIGATION);
  //First filter nav based on role
  const roleFilteredNav = loopKeys
    .filter(nav => COMMON_NAVIGATION[nav].restrictedRoles 
      && !COMMON_NAVIGATION[nav].restrictedRoles.includes(role));
  if(!roleFilteredNav) return null;

  //Map Navigation labels and suboptions based on role
 return roleFilteredNav.map(r => {
    const subOptions = COMMON_NAVIGATION[r].subOptions;
    const isNavlabelPresent = NAVIGAION_LABELS[role]; //Role base navigation(check constants file)
    const defaultNavigation = NAVIGAION_LABELS['DEFAULT'] && NAVIGAION_LABELS['DEFAULT'][r]; //Default Navigation
    
    let updatedSuboption = null;//Intialise suboption as null
    if(subOptions) {
      updatedSuboption = subOptions
        .filter(option => option && !option.restrictedRoles.includes(role))
        .map(newOption => {
          
          if(isNavlabelPresent) {
            const navLabelWithRole = NAVIGAION_LABELS[role][r];
            return {
              ...newOption,
              name: navLabelWithRole && navLabelWithRole[newOption.key] && navLabelWithRole[newOption.key].LABEL,
              path: navLabelWithRole && navLabelWithRole[newOption.key] && navLabelWithRole[newOption.key].path
            }
          } else if(defaultNavigation) {
            return {
              ...newOption,
              name:defaultNavigation[newOption.key] &&defaultNavigation[newOption.key].LABEL,
              path:defaultNavigation[newOption.key] &&defaultNavigation[newOption.key].path
            }
          }
          return obj;
        })
    }
   
     COMMON_NAVIGATION[r].subOptions = updatedSuboption || null;
    if(!isNavlabelPresent) {
      COMMON_NAVIGATION[r].path = defaultNavigation && defaultNavigation.path;
      COMMON_NAVIGATION[r].name = defaultNavigation && defaultNavigation.LABEL;
    } else {
      COMMON_NAVIGATION[r].path = isNavlabelPresent[r] && isNavlabelPresent[r].path
      COMMON_NAVIGATION[r].name = isNavlabelPresent[r] && isNavlabelPresent[r].LABEL
    }
    return COMMON_NAVIGATION[r];
  });
}

export const goBack = () => {
  if(!history.length || history.length <=2) {
    history.push(APP_ROUTES.DASHBOARD)
  } else {
    history.goBack()
  }
}

export const filterActiveAndInactiveData = (data,status) =>{
  const newData = data ;
  const filteredData = newData && newData.filter((items)=>items.status === status );
  return filteredData
} 

export const LINKEDIN_CONNECT_URL =  (`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${'77f2c5acgg07f1'}&redirect_uri=${LINKEDIN_CALLBACK_URL}&state=DCEeFWf45A53sdfKef424&scope=r_liteprofile%20r_emailaddress%20w_member_social%20w_organization_social%20rw_organization_admin%20r_organization_social`)

export const getTwitterRedirectUrl = (brand_id,setTwitterRedirectUrl) =>{
  let route = null;
  const url = `${PROD_DOMAIN}/api/integration/twitterauth?buuid=${brand_id}`;
  const headers = new Headers();
  headers.append('Content-Type', 'text/html');
  headers.append(
    'X-CSRF-TOKEN',
    document.querySelector('meta[name="csrf-token"]').content,
  );
  headers.append(
    'Authorization',
    `Bearer ${localStorage.getItem('authenticationToken')}`,
  );
  const options = {
    method: 'GET',
    headers,
    mode: 'cors',
  };
  fetch(url, options)
    .then(response => response.text())
    .then(resp =>{ 
      setTwitterRedirectUrl(resp);
    })
    .catch(err => console.log(err));
}
export const copyToClipboard = (text) => {
  var textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  toast.success('Copied to clipboard')
  textField.remove();
}
//go back from builder currently configred for recipes
export const goBackFromBuilder = (goBack) => {
  const url = window.location.search
  const urlParams = new URLSearchParams(url)
  const recipe_id = urlParams.get('recipe_id')
  const sid = urlParams.get('sid')
  const type = urlParams.get('type')
  if(recipe_id){
    redirectToUrl(
      type && type === 'edit' 
      ? `${APP_ROUTES.EDIT_RECIPE_ALIAS}/${recipe_id}?sid=${sid}` 
      :  `${APP_ROUTES.PREVIEW_RECIPE_ALIAS}/${recipe_id}?sid=${sid}`
    )
  }else{
    goBack()
  }
}
