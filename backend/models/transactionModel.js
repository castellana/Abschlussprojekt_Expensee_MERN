const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    title: {
        type: 'string',
        trim: true,
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
        // default: Date.now
    },
    transactionType: {
        type: String,
        required: true
    }
}
, {timestamps: true});


const Transaction = mongoose.model('Transaction', TransactionSchema)
module.exports = Transaction

//oder so:
// module.exports = mongoose.model('Transaction', TransactionSchema);