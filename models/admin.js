module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "admin",
    {
      admin_member_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "관리자 고유 번호",
      },
      admin_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "관리자 계정 아이디",
      },
      admin_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "관리자  이름",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "관리자 계정 이메일",
      },
      admin_password: {
        type: DataTypes.STRING(500),
        allowNull: false,
        comment: "관리자 계정 암호",
      },
      telephone: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "관리자 전화번호",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },
    },
    {
      sequelize,
      tableName: "admin",
      timestamps: false,
      comment: "관리자 정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "admin_member_id" }],
        },
      ],
    }
  );
};
