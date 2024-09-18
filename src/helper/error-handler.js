const errorHandler = (err, req, res, next) => {
  if (err.name === 'ErrorNotFound') {
    res.status(404).json({ message: 'Data Not Found', data: null });
  } else if (err.name === 'BadRequest') {
    res.status(400).json({ message: 'Bad Request', data: null });
  } else if (err.name === 'FailedDelete') {
    res.status(400).json({ message: 'Failed Delete', data: null });
  } else if (err.name === 'FailedUpdate') {
    res.status(400).json({ message: 'Failed Update', data: null });
  } else {
    res.status(500).json({ message: 'Internal Server Error', data: null });
  }
};

module.exports = errorHandler;
