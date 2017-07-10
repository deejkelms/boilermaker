const router = require('express').Router()

// matches GET requests to /api/test/
router.get('/', function (req, res, next) { /* etc */ })

// matches POST requests to /api/test/
router.post('/', function (req, res, next) { /* etc */ })

// matches PUT requests to /api/test/:testId
router.put('/:testId', function (req, res, next) { /* etc */ })

// matches DELTE requests to /api/test/:testId
router.delete('/:testId', function (req, res, next) { /* etc */ })

module.exports = router
