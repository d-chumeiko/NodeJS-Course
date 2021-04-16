const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Event, {
        foreignKey: 'eventId',
        as: 'event',
        constraints: true,
        foreignKeyConstraint: true
      });

      Booking.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        constraints: true,
        foreignKeyConstraint:true
      });
    }
  }

  Booking.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    eventId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
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
      withModels: () => ({
        include: [
          {
            association: Booking.associations.user,
            required: true
          },
          {
            association: Booking.associations.event,
            required: true
          }
        ]
      })
    },
    tableName: 'Bookings',
    freezeTableName: true,
  });

  return Booking;
};