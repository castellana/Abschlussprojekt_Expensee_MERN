const express = require('express');
const router = express.Router()


const authCheck = (req, res, next) => {
   
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}

router.get('/', authCheck, (req, res) => {
    console.log("Profile:", req.user);
    res.render('profile', { data: req.user })
})
module.exports = router