const express = require('express')
const router = express.Router()

router.post('/send-email', (req, res) => {
    const {name, email, phone, message} = req.body
    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
    </ul>
    <p>${message}</p>
    `
    console.log(contentHTML)
    res.send('Recibido')
})

module.exports = router;