import React, { Fragment, useState } from 'react'
import { addTransaction } from '../actions/transaction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const AddTransaction = ({ addTransaction }) => {
    const [formData, setFormData] = useState({
        text: '',
        amount: 0
    })
    const { text, amount } = formData

    const OnChange = (e) => setFormData({
        ...formData, [e.target.name]: e.target.value
    })

    const OnSubmit = e => {
        e.preventDefault();
        const num = parseInt(amount)
        console.log('typeof(amount) :>> ', typeof (amount));
        console.log('typeof(num) :>> ', typeof (num));
        addTransaction(text, num);

    }

    return (
        <Fragment>
            <form onSubmit={e => OnSubmit(e)}>
                <div className="px-2">
                    <h1 className="text-xl mt-5">Add new transaction</h1>
                    <hr className="border-gray-400" />
                    <div className="mt-4">
                        Text
                    <br />
                        <input
                            className="mt-2 mb-2 border-gray-300 border-solid border bg-blue-100 w-full px-2 py-2"
                            value={text} onChange={e => OnChange(e)}
                            type="text" name="text" placeholder="Enter Text"></input>
                Amount<br />(negative-expense, positive-income)
                <br />
                        <input className=" px-2 py-2 w-full bg-blue-100" type="text" name="amount"
                            value={amount} onChange={e => OnChange(e)} placeholder="Enter amount"></input>
                    </div>
                </div>
                <button className=" m-3 w-3/4 bg-indigo-300  py-2 mt-4 px-2">Add Transaction</button>
            </form>
        </Fragment>
    )
}

AddTransaction.propTypes = {
    addTransaction: PropTypes.func.isRequired,
}

export default connect(null, { addTransaction })(AddTransaction)