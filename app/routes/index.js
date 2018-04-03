const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    data: 'sample data',
    title: 'Hello World !'
  })
})

router.post('/', (req, res) => {
  console.log(req.body)
  let sideNumber = req.body.side_number

  res.render('result', {
    data: 'sample data response',
    title: 'Hello World !',
    side_number: sideNumber
  })
})

module.exports = router
