import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Balance = ({ transactions }) => {
    let balance = 0;
    transactions.map(transaction => (
        balance += transaction.amount
    ))
    return (
        <div className="mt-5 items-center">
            <h1 className="m-0 text-center text-xl">YOUR BALANCE</h1>
            <h1 className="text-center"><strong>{balance}</strong></h1>
        </div>
    )
}
Balance.propTypes = {
    transactions: PropTypes.array.isRequired,
}

export const maptStateToProps = (state) => ({
    transactions: state.transaction.transactions
})
export default connect(maptStateToProps, {})(Balance)