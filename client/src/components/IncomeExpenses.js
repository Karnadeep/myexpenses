import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const IncomeExpenses = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount)
    console.log('amount :>> ', amount);
    let income = 0
    let expenses = 0
    amount.map(item => {
        if (Math.sign(item) === 1) {
            income += item
        }
        else {
            expenses += item
        }
    })
    const i = amount.filter(item => Math.sign(item) === 1 && item)
    const e = amount.filter(item => Math.sign(item) === -1 && item)
    console.log('income :>> ', income);
    console.log('expenses :>> ', expenses);
    return (
        <div className="flex bg-white mt-5 justify-evenly relative px-2 border">
            <div className="p-2 px-5 m-1">
                <h4 className="uppercase text-center">Income</h4>
                <p className="text-green-400 text-center">{income}</p>
            </div>
            <div className="p-2 m-1">
                <h4 className="uppercase text-center">Expenses</h4>
                <p className="text-red-400 text-center">{Math.abs(expenses)}</p>
            </div>
        </div>
    )
}

IncomeExpenses.propTypes = {
    transactions: PropTypes.array.isRequired,
}

export const maptStateToProps = (state) => ({
    transactions: state.transaction.transactions
})

export default connect(maptStateToProps, {})(IncomeExpenses)