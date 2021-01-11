const { Router } = require('express');
const router = Router();

const webpush = require('../webpush');
let pushSubcription;

router.post("/subscription", async (req, res) => {
    pushSubcription = req.body;
    res.status(200).json();
})

router.post('/new-message', async (req, res) => {

    const { message } = req.body;

    const payload = JSON.stringify( { 
        title: 'My Pablo Notification',
        message: message
    })

    await webpush.sendNotification(pushSubcription, payload)
})


module.exports = router;