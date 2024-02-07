module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customer",
    {
      customer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "손님고유번호",
      },
      customer_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "이름",
      },
      profile_img_path: {
        type: DataTypes.STRING(300),
        allowNull: true,
        comment: "프로필이미지경로",
      },
      telephone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "전화번호",
      },
      entry_type_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "가입유형코드",
      },
      membership_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "멤버쉽상태코드",
      },
      birth_date: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: "생년월일",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },
      reg_designer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "첫등록디자이너번호",
      },
      manage_designer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "담당디자이너번호",
      },
      edit_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정일시",
      },

      used_yn_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "삭제여부",
      },
    },
    {
      sequelize,
      tableName: "customer",
      timestamps: false,
      comment: "손님정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "customer_id" }],
        },
      ],
    }
  );
};
