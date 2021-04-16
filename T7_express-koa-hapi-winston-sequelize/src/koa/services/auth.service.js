const jwt = require('jsonwebtoken');

class AuthService {
  constructor(model) {
    this.model = model;
  }

  login = async (email, password) => {
    try {
      const user = await this.model.findOne({ where: { email } });

      if (!user || !user.correctPassword(password)) {
        throw new Error('Invalid creds');
      }

      const token = jwt.sign(
        {
          email: user.email,
          userId: user.id
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h'
        }
      );

      return {
        userId: user.id,
        token,
        tokenExpiration: 1
      };
    } catch (err) {
      throw new Error(err);
    }

  }

  signup = async (email, password) => {
    try {
      return await this.model.create({ email, password });
    } catch (err) {
      throw new Error(err);
    }
  }

}

module.exports = AuthService;
