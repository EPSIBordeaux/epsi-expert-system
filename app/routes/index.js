const router = require('express').Router()

const Solver = require('../entity/solver')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello World !'
  })
})

router.post('/', (req, res) => {
  console.log(req.body)

  let solver = new Solver(req.body)

  res.render('result', {
    title: 'Hello World !',
    result: solver.solve()
  })
})

module.exports = router
