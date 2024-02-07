module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "reservation",
    {
      reservation_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "예약번호",
      },
      designer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약 디자이너 번호",
      },
      designer_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "예약 디자이너 이름",
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "예약 손님 번호",
      },
      customer_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "예약 손님 이름",
      },
      reservation_state: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: "예약 상태", //예약, 완료, 예약취소
      },
      memo: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: "예약 메모",
      },
      cut_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "시술 타입",
      },
      price: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        comment: "가격",
      },
      reg_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "등록일시",
      },
      reservation_start_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "예약시작시간",
      },
      reservation_end_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "예약종료시간",
      },
      used_yn_code: {
        type: DataTypes.TINYINT,
        allowNull: false,
        comment: "삭제여부",
      },
    },
    {
      sequelize,
      tableName: "reservation", //이게 찐 테이블명
      timestamps: false,
      comment: "채널채팅이력정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "reservation_id" }], //여러개의 컬럼이 프라미어리 키인경우 차가하여 설정가능
        },
      ],
    }
  );
};
