const { sign, verify } = require("jsonwebtoken");

const createTokens = (user) => {
  const { id, stdId, permission } = user;
  const accessToken = sign({ id, stdId, permission }, process.env.JWT_SECRET);
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken =
    req.header("Authentication") || req.cookies["access-token"];
  if (!accessToken) {
    return res
      .status(403)
      .send({ sucess: false, error: "user not authenticated !" });
  }

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);

    req.user = validToken;
    if (validToken) {
      req.user.authenticated = true;
      return next();
    }
  } catch (err) {
    return res
      .status(401)
      .send({ sucess: false, error: `Invalid Token - ${err}` });
  }
};

module.exports = { createTokens, validateToken };
