//Wir importieren unser Model:
const Transaction = require('../models/transactionModel')

//route GET/transactions
const transaction_get = (req, res) => {
    // console.log('req',req)
    // res.send('Get transactions') funktioniert
    Transaction.find().sort('-date').limit(20)
        // .then(result => {
        // res.render('index', { transaction: result})
        // Enlugar de la frase anterior, ahora le decimos al server er soll die empfangenen Daten als JSON zurücksenden:
        .then(transactions => res.json(transactions))
        // console.log(JSON.stringify(transactions))
        // console.log('transactions: ', transactions)
        //  return res.status(200).json({ 
        //      success: true,
        //      result: transactions
         //})
    .catch(err => console.log(err))
}
// collection.find().sort('-date').exec(function(err, collectionItems)
//add a new transaction, with POST
const transaction_create = (req, res) => {
    console.log(req.body)
    // const newTransaction = new Transaction ({
    //     description: req.body.description,
    //     category: req.body.category,
    //     amount: req.body.amount,
    //     date: req.body.date,
    // })
    //wenn die "name" Felder in html genauso gebaut haben wie die Felder in unser Schema, dann können wir den Code oben reduzieren, und einfach nur req.body schreiben (weil in den body ist ehe schon alles drinnen):
    const newTransaction = new Transaction (req.body)
    // res.status(201).end(req.body) Postmann
    newTransaction
        .save()
        // .then(result => res.send(result))
        .then(result => {
            // res.redirect('/')
            //Man muss etwas antworten, sonst hängt der Browser/Postmann
            //HIer geben wir den Statuscode für "Erstellt" zurück)
            res.sendStatus(201)
    })
    .catch(err => console.log(err))
    // res.end()
}


//get details of a transaction:
const transaction_getById = (req, res) => {
    console.log(req.params.id)
    // res.send('Get transaction details')
    Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    // .then(result => {
    //     //hierres.send('Get transactions')
    //     // res.render('index', { transaction: result})
    //      return res.status(200).json
    // })
    .catch(err => console.log(err))
}

//edit a transaction: PUT
const transaction_put = (req, res) => {
    console.log(req.body)
    Transaction.findByIdAndUpdate(req.params.id,  req.body)
    .then(result => {
        // res.redirect(`/transactions/${req.params.id}`)
        res.sendStatus(204)
    })
    .catch(err => console.log(err))
}


//delete a transaction (wir brauchen ein id, um zu wissen welcher Trasaktion wir löschen wollen)
const transaction_delete = (req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
        .then(result => {
            //hier können wir kein redirect machen, da fetch ein AJAX request ist und JSON /Text erwartet. D.h. wir müssen JSON zurücksenden und den redirect im Frontend lösen. 
            // res.json({ 
            //     redirect: '/'  //oder '/transactions'
            // })
            
            //oder halt: 
            console.log(result);
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
}

module.exports = {
    transaction_get,
    transaction_create,
    transaction_getById,
    transaction_put,
    transaction_delete
}

