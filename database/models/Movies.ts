module.exports = (sequelize: any, DataTypes: any) => {
  let alias = "Movies";
  let columns = {
    movie_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    director: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    producer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };
  
  let config = {
    tablename: "movies",
    timestamps: false,
  };

  const Trademarks = sequelize.define(alias, columns, config);

  return Trademarks;
};
