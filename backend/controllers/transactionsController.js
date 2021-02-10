const Transaction = require('../models/transactionModel')


const transaction_get = (req, res) => {
    Transaction.find().sort('-date').limit(20)
        .then(transactions => res.json(transactions))
        .catch(err => console.log(err))
}


const transaction_create = (req, res) => {
    console.log(req.body)
    // const newTransaction = new Transaction ({
    //     description: req.body.description,
    //     category: req.body.category,
    //     amount: req.body.amount,
    //     date: req.body.date,
    // })
    const newTransaction = new Transaction (req.body)
    // res.status(201).end(req.body) Postmann
    newTransaction
        .save()
        // .then(result => res.send(result))
        .then(result => {
            res.sendStatus(201)
        })
        .catch(err => console.log(err))
}


//get details of a transaction:
const transaction_getById = (req, res) => {
    console.log(req.params.id)
    // res.send('Get transaction details')
    Transaction.findById(req.params.id)
        .then(transaction => res.json(transaction))
        .catch(err => console.log(err))
}

//edit a transaction: PUT
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
            console.log(result);
            res.sendStatus(204)
        })
        .catch(err => console.log(err))
}


// const currentMonth = (req, res) => {
//     Transaction.aggregate([
//         {$facet: {
//                     sortedByCategory: [
//                         {$match:  
//                             {$expr: 
//                                 {$eq: [{ $month: {"$toDate":"$date"}}, {$month: new Date()}]}
//                             }
//                         },
//                         {$group: {
//                                 _id: "$category", 
//                                 totalCategory: {'$sum': '$amount'},
//                                 }
//                         } 
//                     ],
//                     totalAusgabeEinahme: [
//                         {$match:  
//                             {$expr: 
//                             {$eq: [{ $month: {"$toDate":"$date"}}, {$month: new Date()}]}
//                             }
//                         },
//                         {$group : { _id : "$transactionType", total:  {$sum: "$amount"} } }
//                     ]
        
//                 }
//             },        
//     ])
//     .then(result => {
//         console.log(result);
//         res.json(result)
//     })
//     .catch(err => console.log(err))
// }

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
                    // type1: {$transactionType: "$Einnahme"},
                    // type2: {$transactionType: "$Ausgabe"}
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

