import jwt from "jsonwebtoken";

const TOKEN = "token";

/**
 * 로그아웃
 */
const destroySession = (req, res, callback) => {
  req.session.destroy(() => {
    res.clearCookie(TOKEN);
    res.locals.user = null;
    if (callback) callback();
  });
};

/**
 * 인증 Middleware
 */
const middleware = (req, res, next) => {
  const token = req.cookies[TOKEN];
  if (!token) {
    destroySession(req, res, next);
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.session.user = decoded;
      res.locals.user = decoded;
      next();
    } catch (err) {
      destroySession(req, res, next);
    }
  }
};

/**
 * JWT 발급 및 쿠키 발행
 */
const writeCookie = (res, user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 5, // * 60 * 24 * 15, // 15일
  });
};

export { destroySession, middleware, writeCookie };
