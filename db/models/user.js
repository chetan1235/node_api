'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment,{
      foreignKey: 'userId',
      as: 'comments'
    });

  };
 /* User.sync({ force: true })
  .then(function() {
    console.log("sync done");
  });
*/
  return User;
};