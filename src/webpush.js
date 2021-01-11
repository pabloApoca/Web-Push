const webpush = require('web-push')

webpush.setVapidDetails(
    "mailto:pablo_mtv08@hotmail.com", 
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY
    );

module.exports = webpush;