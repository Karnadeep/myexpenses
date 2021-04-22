import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTransaction } from '../actions/transaction'

const Transaction = ({ transaction, deleteTransaction }) => {
    const amount = transaction.amount
    let sign = ''
    if (Math.sign(amount) === 1) {
        sign = '+';
    }
    else {
        sign = '-';
    }
    //console.log('typeof(amount) :>> ', typeof (amount));
    return (
        <div className="flex">
            <li key={transaction.id}
                className={sign == '+' ? "w-11/12 mt-2 bg-white border-r-4 border-green-500"
                    : "w-11/12 mt-2 bg-white border-r-4 border-red-500"}>
                <div className="flex justify-between ">
                    <p className="px-1 py-2">{transaction.text} </p>
                    <p className="px-1 py-2 object-right-top">{sign}${Math.abs(transaction.amount)}</p>
                </div>


            </li>
            <div>
                <button className=" cursor-pointer w-8 h-10  px-2 py-2 text-center text-white bg-red-600"
                    onClick={(e) => deleteTransaction(transaction.id)}
                >X</button>

            </div>
        </div>
    )
}

Transaction.propTypes = {
    deleteTransaction: PropTypes.func.isRequired,
}
export default connect(null, { deleteTransaction })(Transaction)
