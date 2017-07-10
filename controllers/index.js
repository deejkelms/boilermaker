const router = require('express').Router()

// example
// router.use('/users', require('./users'))
// router.use('/puppies', require('./puppies'))
// router.use('/kittens', require('./kittens'))

// 404
router.use(function (req, res, next) {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
