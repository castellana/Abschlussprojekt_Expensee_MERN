const mongoose = require('mongoose');

//so..
// const Schema = mongoose.Schema
// const transactionSchema = new Schema({ ...})

//oder simplificado so:
const TransactionSchema = new mongoose.Schema({
    title: {
        type: 'string',
        trim: true, //Das ist um unnötige Leerspaces in der String ins Mongo zu vermeiden " hello" wird als"hello" gespeichert
        required: true
    },
    amount: {
        type: 'number',
        required: true
    },
    category: {
        type: String, 
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
}
, {timestamps: true});


//wir müssen nun das Model in einem Schema verwandeln:
const Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = Transaction

//oder so:
// module.exports = mongoose.model('Transaction', TransactionSchema);