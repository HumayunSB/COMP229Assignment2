import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';
import User from '../models/user.model.js';
import config from '../../config/config.js';

const signin = async (req, res) => {
  const { email, password } = req.body ?? {};
  const user = await User.findOne({ email }).select('+hashed_password +salt');
  if (!user || !user.authenticate(password)) {
    return res.status(401).json({ error: 'Could not sign in.' });
  }

  const token = jwt.sign(
    { _id: user._id.toString() },
    config.jwtSecret,
    { algorithm: 'HS256' }
  );
  res.cookie('t', token);
  return res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email
    }
  });
};

const signout = (_req, res) => {
  res.clearCookie('t');
  return res.json({ message: 'signed out' });
};

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
  requestProperty: 'auth'
});

const hasAuthorization = (req, res, next) => {
  if (
    req.profile &&
    req.auth &&
    String(req.profile._id) === String(req.auth._id)
  ) {
    return next();
  }

  return res.status(403).json({ error: 'User is not authorized' });
};

export default { signin, signout, requireSignin, hasAuthorization };
