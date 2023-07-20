module.exports = (sequelize: any, DataTypes: any) => {
  let alias = "Users";
  let columns = {
    users_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles",
        key: "roles_id",
      },
    },
  };
  
  let config = {
    tablename: "users",
    timestamps: false,
  };

  const Users = sequelize.define(alias, columns, config);

  Users.associate = (models: any) => {
    Users.belongsTo(models.Roles, {
      as: "role",
      foreignKey: "role_id",
    });
  };

  return Users;
};
