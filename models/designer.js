module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "designer",
    {
      designer_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "디자이너 고유 번호",
      },
      designer_name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "디자이너 이름",
      },
      position: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "디자이너 직책",
      },
      designer_img_path: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "대표 이미지",
      },
      designer_desc: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "디자이너 간략 소개",
      },
      email: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "email",
      },
      telephone: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "전화번호",
      },
      designer_state_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "재직 상태",
      },

      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },

      used_yn_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "삭제여부",
      },
    },
    {
      sequelize,
      tableName: "designer",
      timestamps: false,
      comment: "디자이너 정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "designer_id" }],
        },
      ],
    }
  );
};
