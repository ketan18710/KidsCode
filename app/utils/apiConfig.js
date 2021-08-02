
export const LOCAL_DEV_DOMAIN = 'https://reqres.in';
export const PROD_DOMAIN = 'https://api.loopedincode.com/kidsCode'
export const GOOGLE_CLIENT_ID = 
  process.env.API_ENV ==='production'
    ? process.env.BUILD_ENV === 'production'
      ?'536777760392-q19slhecv1g3dcum0eqo1vb26bumcgtc.apps.googleusercontent.com'
      :'536777760392-q19slhecv1g3dcum0eqo1vb26bumcgtc.apps.googleusercontent.com'
    :'536777760392-q19slhecv1g3dcum0eqo1vb26bumcgtc.apps.googleusercontent.com'

export const LINKEDIN_CALLBACK_URL = 
  process.env.API_ENV === 'production'
    ? 'https://portal.grorapid.com/social-integration-pages/linkedin'
    : process.env.API_ENV === 'dev' ? "http://localhost:4000/social-integration-pages/linkedin"
    : 'https://grorapid.netlify.app/social-integration-pages/linkedin';

export const FACEBOOK_GRAPH_API = 'https://graph.facebook.com';

export const API_PROD_DOMAIN =

  process.env.API_ENV === 'production'
    ? 'https://api.grorapid.com'
    : process.env.API_ENV === 'dev' ? "https://api-dev.grorapid.com"
    : 'https://api-staging.grorapid.com';

export const SITE_KEY =

    process.env.API_ENV === 'production'
      ? '85640ae0-3678-4152-ac44-1b71ed9e557d'
      : process.env.API_ENV === 'dev' ? "6ecfb166-1b79-4532-9a73-d8ca22411e93"
      : '460cb3cd-13f0-4275-9687-b68227d1b61e';

export const BEARER_TOKEN='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTdmOTQ5MmY4YTYwZjIwMDNlOGJkOTY4NzRhNDljNGYwODdiMGY4N2M0NmVlYTI4MDZlMDFlMTc4ZTIzMzk5ZTMyMzlhNTU4MDQyZDU5M2QiLCJpYXQiOjE2MTU1MzU0MjIsIm5iZiI6MTYxNTUzNTQyMiwiZXhwIjoxNjQ3MDcxNDIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.uMskz6byakoSGYmQU59EYleBfnb1v7JLXUxCdTm_sa4p8zx-yuzlOu9wkmASPiUFOGJI1LZCnaFRjn1M0462dfyUceek4qfaTFUW5EVa9q1IIUl7BpaHnlqzW-7RkqQ3LX0VxUPbQzj0b9m1Jb122dzXsnDraql2bH4F7ZVGLxsSuPtaCjqv-lgdD-XHqoRJzE8G_H3t3Z9DubLStY15EyhILhubkYFCA9kLrlgttuFvrexPQjUM6H8iDXXgS6q8kKN7lxie13GfvpS5O8t4UvcA6I2LaWp7pkIiwbwdvuT8E4lQfVf_RnN76bwvA93a44IakWT4HjjrqRdMeq7fYiStxl2Ojt8rwwjC9OvfDGPyztRWObGkCOUz3YrTU-qu7n7nS-rbw4pda8n3uyNTtR7HMvhuPc9CM9c8LYR5UeOlrFZl25FZOomnqrSFCtAkIfIfE9FY_CymlTDjJm5YRos5E0RVhjsC27Lps9UwAjCtm1WAmd3EwUIiLV9Ptq02dExsgPzM7ZfUV0Hw474Cv2FRZW77Hgin40ulYOjHMqRfmRA3BQYxfoLojXvlpKGDAmhKysDFlduLUZnvwAQ-Rd5sNTyT-edfMZRA9bnf5ht7ajR0NaWBcYFB85IxjczYl01ZksMuavwx9uG0_je7gk44NTfsam27Qm6jMp7HgLQ'