const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "5I8iXSaK#4ZKlIPS1j_GyFt9Hn5oZ62tuIokYnz5lYxrrrr-buvA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Hnsk23/hnsk/blob/main/images/HANSA%20md.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 VIMA-MD Is Alive Now😍*",
BOT_OWNER: '94789706579',  // Replace with the owner's phone number



};
 
 
