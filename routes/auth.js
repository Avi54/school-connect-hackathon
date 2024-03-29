const express = require('express')
const passport = require('passport')
const router = express.Router()

// auth, GET /auth/google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// callbacl page, route: GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/dashboard')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router