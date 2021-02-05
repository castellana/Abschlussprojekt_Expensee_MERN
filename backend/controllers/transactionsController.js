//Wir importieren unser Model:
const Transaction = require('../models/Transaction')

//route GET/transactions
const transaction_get = (req, res) => {
    console.log(req.params.id)
    Transaction.findById(req.params.id)
    .then(result => res.render('index', { transaction: result}))
    .catch(err => console.log(err))
}


//add a new transaction, with POST
const transaction_post = (req, res) => {
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


//edit a transaction: PUT
const transaction_put = (req, res) => {
    console.log(req.body)
    const updatedTransaction = {
        description: req.body.description,
        category: req.body.category,
        amount: req.body.amount,
        date: req.body.date,
    }
    Transaction.findByIdAndUpdate(req.params.id,  updatedTransaction)
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
            console.log(response);
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
}

module.exports = {
    transaction_get,
    transaction_post,
    transaction_put,
    transaction_delete
}

