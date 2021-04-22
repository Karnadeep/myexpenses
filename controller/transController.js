const Transaction = require('../model/Transaction')

// @desc : Add a new Transaction to the database
// @route : /myexpenses/transaction/add/

exports.insertnewTransaction = async (req, res) => {
    const transaction = new Transaction();
    const { text, amount } = req.body;
    // console.log('text :>> ', text);
    // console.log('amount :>> ', amount);
    let numOfTrans = await transaction.countNumOfTrans();

    const { count } = numOfTrans.data

    let tranStatus = await transaction.addTransaction(parseInt(count), text, amount)

    res.json(tranStatus)


    // console.log('numOfTrans :>> ', numOfTrans);
    // console.log('count :>> ', count);
}

exports.removeTrans = async (req, res) => {
    const id = req.params.id
    const trans = new Transaction();

    const transStatus = await trans.deleteTransaction(parseInt(id));
    if (transStatus) {
        res.json(transStatus)
    }
}

exports.transactionStatement = async (req, res) => {
    const trans = new Transaction();
    let transationStatus = await trans.displayTransactions()
    if (transationStatus.status) {
        const listOfTrans = transationStatus.data
        res.json(transationStatus)
    }
}