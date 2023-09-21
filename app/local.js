const getLocalIpAddress = require('./getLocalIpAddress');

const localIpAddress = getLocalIpAddress();
console.log(`Local IP Address: ${localIpAddress}`);