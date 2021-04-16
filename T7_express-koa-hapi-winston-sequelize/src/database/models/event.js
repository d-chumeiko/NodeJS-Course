const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        constraints: true,
        foreignKeyConstraint:true
      });
    }
  }

  Event.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now()
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
      withUser: () => ({
        include: [{
          association: Event.associations.user,
          required: true
        }]
      })
    },
    tableName: 'Events',
    freezeTableName: true,
  });

  return Event;
};