const express = require('express')
const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Hello from the workouts route' })
})

// Get one workout
router.get('/:id', (req, res) => {
    res.json({ message: `Hello from the workouts route with id` })
})

// Post a new workout
router.post('/', (req, res) => {
    res.json({ message: 'POST a new workot from the workouts route' })
})


// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: `DELETE a workout from the workouts route with id` })
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: `PATCH a workout from the workouts route with id` })
})
module.exports = router