const _ = require('lodash');
const ENV_NODE = 'dev';

const apiResponse = (func) => {
  return (req, res, next) => {
    const bindParams = _.assign(req.body, req.params, req.query);

    Promise.resolve()
    .then(() => {
      return func.call(null, bindParams);
    })
    .then((reply) => {
      if (!reply) {
        res.status(404).send({ message: 'Not found' });
      }
      res.status(reply.status).send(reply.data);
    })
    .catch((error) => {
      if (ENV_NODE === 'dev') {
        return next(error);
      }
      res.status(500).send({ message: '무언가 문제가 발생했습니다.' });
    });
  }
};

module.exports = apiResponse;