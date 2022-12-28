require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// Create express instance (app)
const app = express()

// middleware
app.use(express.json()) // for parsing application/json
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('App listening on port 4001')
})



