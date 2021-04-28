module.exports = (err, req, res, next) => {
  console.log(err);
  if (!err.message || !err.code) {
    return res.status(500).send('Server Error');
  }
  res.status(err.code).send(err.message);
};
