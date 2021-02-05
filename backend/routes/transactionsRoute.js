const express = require('express');
const router = express.Router();

const transactionsController = require('../controllers/transactionsController')

// router.get('/', (req, res) => res.send('Hallo'));
//cambiamos la frase anterior, por esta:
router
   .get('/', transactionsController.transaction_get)
   .post('/', transactionsController.transaction_post); //ó '/add'

router
   .post('/:id/edit', transactionsController.transaction_put)
   .delete('/:id', transactionsController.transaction_delete)

module.exports = router;