module.exports = (sequelize: any, DataTypes: any) => {
  let alias = "Roles";
  let columns = {
    roles_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };
  
  let config = {
    tablename: "roles",
    timestamps: false,
  };

  const Roles = sequelize.define(alias, columns, config);

  Roles.associate = (models: any) => {
    Roles.hasMany(models.Users, {
      as: "role",
      foreignKey: "role_id",
    });
  };

  return Roles;
};
