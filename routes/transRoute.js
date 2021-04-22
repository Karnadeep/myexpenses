const express = require('express')
const router = express.Router();
const { insertnewTransaction, removeTrans, transactionStatement } = require('../controller/transController')

router.post('/add', insertnewTransaction);
router.delete('/remove/:id', removeTrans);
router.get('/', transactionStatement);

module.exports = router