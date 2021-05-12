const db = require('../models');

module.exports.getTransactionHistory = async (req,res, next)=>{
  try {
    const {params:{id}} = req;
    const transactionHistory = await db.transactionHistory.findOne(
      {
        where:{userId: id}
      }
    )
    res.status(201).send(transactionHistory)
  } catch (err) {
    next(err)
  }

}