require(dotenv).config();
const { sign, verify } = require("jsonwebtoken");
const ACCESS_SECRET = process.env.ACCESS_SECRET;

module.exports = {
  generateAccessToken: (data) => {
    console.log(data);
    const accessToken = sign(data, process.env.ACCESS_SECRET);
    return accessToken;
  },
  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }

    const token = authorization.split(" ")[1];
    try {
      return verify(token, ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
