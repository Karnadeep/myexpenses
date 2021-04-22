import axios from 'axios'
import { ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTIONS, TRANSACTION_ERROR } from './type'

export const addTransaction = (text, amount) => async dispatach => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const jsonData = JSON.stringify({ text, amount })
        const res = await axios.post('/myexpenses/transaction/add', jsonData, config);
        const res_d = res.data.data
        if (res.data.status) {
            dispatach({
                type: ADD_TRANSACTION,
                payload: res_d[0]
            })
        }
        else {
            dispatach({
                type: TRANSACTION_ERROR,
                payload: res.data.message
            })
        }
    } catch (err) {
        dispatach({
            type: TRANSACTION_ERROR,
            payload: err.message
        })
    }
}

export const deleteTransaction = (id) => async dispatch => {
    console.log('id', id)
    try {
        const res = await axios.delete(`/myexpenses/transaction/remove/${id}`);
        console.log('res.data', res.data)
        dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        })
    } catch (err) {
        console.log('err.message :>> ', err.message);
    }
}

export const displayTransaction = () => async dispatch => {
    try {
        const res = await axios.get('/myexpenses/transaction/');
        //  console.log('res.data.data :>> ', res.data.data);
        dispatch({
            type: GET_TRANSACTIONS,
            payload: res.data.data
        })
    } catch (err) {
        console.log('err.message :>> ', err.message);
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.message
        })
    }
}