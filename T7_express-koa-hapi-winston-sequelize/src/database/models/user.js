const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Event, {
        foreignKey: 'userId',
        as: 'createdEvents',
        onDelete: 'CASCADE',
      });
    }

    static setSaltAndPassword = (user) => {
      if (user.changed('password')) {
        user.salt = User.generateSalt();
        user.password = User.encryptPassword(user.password(), user.salt());
      }
    }

    static encryptPassword = (plainText, salt) => {
      return crypto
        .createHash('RSA-SHA256')
        .update(plainText)
        .update(salt)
        .digest('hex')
    }

    static generateSalt = () => {
      return crypto.randomBytes(16).toString('base64');
    }

    correctPassword = (enteredPassword) => {
      return User.encryptPassword(enteredPassword, this.salt()) === this.password();
    }
  }

  User.init({
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      get() {
        return(() => this.getDataValue('password'))
      }
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return(() => this.getDataValue('salt'))
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: Date.now()
    }
  }, {
    sequelize,
    scopes: {
      withEvents: () => ({
        include: [{
          association: User.associations.createdEvents,
          required: true
        }]
      })
    },
    tableName: 'Users',
    freezeTableName: true,
    hooks: {
      beforeCreate: (user) => User.setSaltAndPassword(user),
      beforeUpdate: (user) => User.setSaltAndPassword(user),
    }
  });

  return User;
};
