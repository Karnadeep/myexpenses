const db = require('../config/db');

class Transaction {

    async countNumOfTrans() {
        let q1 = `SELECT COUNT(*) FROM public.transaction`

        try {
            let res_d = await db.query(q1);
            return {
                status: true, data: res_d[0][0]
            }
        }
        catch (err) {
            return {
                status: fasle, message: err.message
            }
        }
    }


    async addTransaction(count, text, amount) {

        const id = count + 1
        let q1 = `INSERT INTO public.transaction(
            id, text, amount)
            VALUES ((:id),(:text),(:amount))
            RETURNING id,text,amount;`

        try {
            let res_d = await db.query(q1, { replacements: { id, text, amount } })
            return { status: true, messgae: 'Transaction added', data: res_d[0] }

        }
        catch (err) {
            return {
                status: false, message: 'err.message'
            }
        }
    }

    async deleteTransaction(id) {
        let q1 = `DELETE FROM public.transaction
        WHERE id= (:id);`

        try {
            let res_d = await db.query(q1, { replacements: { id } });
            console.log('res_d', res_d);
            return {
                status: true, message: 'Transaction deleted'
            }

        } catch (err) {
            return {
                status: fasle, message: err.message
            }
        }
    }

    async displayTransactions() {
        let q1 = `SELECT * FROM public.transaction ORDER BY id desc`
        try {
            let res_d = await db.query(q1);
            if (res_d[0].length == 0) {
                return { status: false, message: 'no Transactions found' }
            }
            return {
                status: true, message: 'Transactions found', data: res_d[0]
            }
        } catch (err) {
            return {
                status: false, message: err.message
            }
        }
    }
}

module.exports = Transaction
