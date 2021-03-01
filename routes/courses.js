const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
  const courses = Course.getAll()
  res.render('courses', {
    title: 'Курсы',
    isCourses: true,
    courses
  })
})

module.exports = router