const express = require('express');
const router = express.Router();
const passport = require('passport');
//  const { default: Login } = require('../../frontend/src/components/login');
const { response } = require('express');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    console.log('Callback', req.user);
    res.redirect('http://localhost:3003/Transactions');
  }
);
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
