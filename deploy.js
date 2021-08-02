const netLifySiteId = require('./.netlify/state.json');
const ACTIVE_DEPLOY_ID = process.env.PLATFORM_SITE_ID;
const fs = require('fs');

const ACTIVE_SITE_ID = {
	"siteId": ACTIVE_DEPLOY_ID || ""
}
//Write Active ENV Site id 
fs.writeFileSync('./.netlify/state.json', JSON.stringify(ACTIVE_SITE_ID));

