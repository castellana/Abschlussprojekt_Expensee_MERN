const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactionsController')

router.get('/', transactionsController.transaction_get)
   
router.post('/', transactionsController.transaction_create); 

router.get('/:id', transactionsController.transaction_getById)

router.put('/:id', transactionsController.transaction_put)

router.delete('/:id', transactionsController.transaction_delete)

router.get('/monthly/current', transactionsController.currentMonth)



module.exports = router;

