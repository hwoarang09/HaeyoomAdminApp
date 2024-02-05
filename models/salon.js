module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "salon",
    {
      salon_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "혜윰 가맹점 번호",
      },
      salon_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "혜윰 가맹점 이름",
      },
      telephone: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "가맹점 전화번호",
      },

      used_yn_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "폐업 여부",
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "가맹점 주소",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },
    },
    {
      sequelize,
      tableName: "salon",
      timestamps: false,
      comment: "가맹점 정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "salon_id" }],
        },
      ],
    }
  );
};
