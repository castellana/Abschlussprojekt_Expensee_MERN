require('dotenv').config({path: './config/.env'})
require('./config/passport-setup')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const PORT = process.env.PORT || 5000

const cookieSession = require('cookie-session')

const passport = require('passport')




const transactionsRoute = require('./routes/transactionsRoute');
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//login code start
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 1000 * 60 * 60 * 24 
}))

app.use(passport.initialize());
app.use(passport.session());
// login code end


mongoose.connect(process.env.dbUri,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("Connected");
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err));

 
app.get('/', (req, res) => res.render('index'))

app.use('/transactions', transactionsRoute)

/* app.use((req, res) => {
    res.status(404).render('404')
}) */

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

