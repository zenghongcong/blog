/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    intro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'article'
  });
};
