const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(" ");
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedToken;
    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).send("Invalid token!");
  }
};
