const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactionsController')

router.get('/', transactionsController.transaction_get)
   
router.post('/', transactionsController.transaction_create); //ó '/add'

router.get('/:id', transactionsController.transaction_getById)

router.put('/:id/', transactionsController.transaction_put)

router.delete('/:id', transactionsController.transaction_delete)

   //Route wo die gespeicherte Transaktionen vom user sind:

//    router.route('/transactions')
//    .get('/', )
module.exports = router;