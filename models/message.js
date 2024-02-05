module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "message",
    {
      message_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "예약메세지 고유 번호",
      },
      message_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약메세지 타입 : 예약, 상담,취소, 에러 등등",
      },
      reservation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "묶인 예약 번호",
      },
      designer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약 디자이너 번호",
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약 손님 번호",
      },
      message_text: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "예약 메세지 텍스트",
      },

      reg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },
    },
    {
      sequelize,
      tableName: "message",
      timestamps: false,
      comment: "메세지",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "message_id" }],
        },
      ],
    }
  );
};
