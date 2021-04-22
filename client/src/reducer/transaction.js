import { ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTIONS, TRANSACTION_ERROR } from '../actions/type'
const initialState = {
    transactions: [],
    transaction: {},
    loading: true,
    error: null
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [payload, ...state.transactions]
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(tran => tran.id !== payload)
            }
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: payload
            }
        case TRANSACTION_ERROR:
            return {
                error: payload
            }
        default:
            return state;
    }
}