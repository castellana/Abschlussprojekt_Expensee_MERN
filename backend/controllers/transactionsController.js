const Transaction = require('../models/transactionModel')


const transaction_get = (req, res) => {
    Transaction.find().sort('-date').limit(20)
        .then(transactions => res.json(transactions))
        .catch(err => console.log(err))
}


const transaction_create = (req, res) => {
    console.log(req.body)
 
    const newTransaction = new Transaction (req.body)
    // res.status(201).end(req.body) Postmann
    newTransaction
        .save()
        .then(result => {
            res.send(result).sendStatus(201)
        })
        .catch(err => console.log(err))
}


const transaction_getById = (req, res) => {
    console.log(req.params.id)
    Transaction.findById(req.params.id)
        .then(transaction => res.json(transaction))
        .catch(err => console.log(err))
}


const transaction_put = (req, res) => {
    console.log(req.body)
    Transaction.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            // res.redirect(`/transactions/${req.params.id}`)
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
}


const transaction_delete = (req, res) => {
    Transaction.findByIdAndDelete(req.params.id)
        .then(result => {
            console.log("result :", result);
            // res.send(result).sendStatus(204)
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
}


const currentMonth = (req, res) => {
    Transaction.aggregate([
        {$match:  
            {$expr: 
                {$eq: [{ $month: {"$toDate":"$date"}}, {$month: new Date()}]}
            }
        },

        {$group : 
            { _id : { 
                    transactionType: "$transactionType", 
                    category: "$category" },
                    count:  {$sum: "$amount"},
            }
        },

        {$group: 
            { _id: "$_id.transactionType", 
            total: {$sum: "$count"},
            totalCategory: {
                        $push: {
                                sum: '$count',
                                category: "$_id.category"},
                             } 
            //{
            // $addFields : {
            //     sent : {$subtract: [ "$maxValue", "$minValue" ]}
            // }
        //}    
            }},
        // { $subtract: [ total, $count ] }    
    ])    

    .then(result => {
        console.log(result);
        res.json(result)
    })
    .catch(err => console.log(err))
}

module.exports = {
    transaction_get,
    transaction_create,
    transaction_getById,
    transaction_put,
    transaction_delete,
    currentMonth
}

