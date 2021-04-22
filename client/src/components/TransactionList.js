import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { displayTransaction } from '../actions/transaction'
import Transaction from './Transaction'


const TransactionList = ({ displayTransaction, transactions }) => {
    useEffect(() => {
        displayTransaction();
    }
        , [])

    return (
        <div className="px-2">
            <h1 className="text-xl mt-5">History</h1>
            <hr className="border-gray-400" />
            <ul className="mt-3">
                {transactions.map((transaction) => (

                    <Transaction key={transaction.id} transaction={transaction} />
                    /* <p className="px-1 py-2">{transaction.text} </p>
                    <p className="px-1 py-2 object-right-top">+${transaction.amount}</p> */

                    //         <Transaction key={index} value={transaction} />
                ))}

            </ul>
        </div>
    )
}
TransactionList.propTypes = {
    displayTransaction: PropTypes.func.isRequired,
    transactions: PropTypes.array.isRequired,
}

export const mapStateToProps = (state) => ({
    transactions: state.transaction.transactions
})

export default connect(mapStateToProps, { displayTransaction })(TransactionList)