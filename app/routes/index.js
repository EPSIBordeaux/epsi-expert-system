const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    data: 'sample data',
    title: 'Hello World !'
  })
})

module.exports = router
