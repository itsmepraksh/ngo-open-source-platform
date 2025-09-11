const express = require('express')

const router = express.Router()


router.get('/',(req,res)=>{
    res.send('its working')
})

router.post('/',(req,res)=>{
    let { name , email } = req.body;
    res.json({
        message:"data fetched",
        name : name,
        email:email
    })
})

module.exports = router;