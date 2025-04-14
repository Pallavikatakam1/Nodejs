module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'username' // maps to DB column
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password' // maps to DB column
      }
    }, {
      tableName: 'usertable',  // explicitly set your table name
      timestamps: false        // disable createdAt/updatedAt if not using them
    });
  
    return User;
  };
  