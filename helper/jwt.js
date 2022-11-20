const { sign, verify } = require("jsonwebtoken");

const signToken = (payload) => sign(payload, 'SINGULARITYSECRET');
const verifyToken = (token) => verify(token, 'SINGULARITYSECRET');

module.exports = {
  signToken,
  verifyToken,
};
