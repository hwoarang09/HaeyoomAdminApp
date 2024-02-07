//
// list_면 list라는 게 아니라, list페이지에서 사용하는 변수라는 뜻
// add_ edit_도 마찬가지
//

//HTML 페이지
var reservationListFullHTML = document.getElementById(
  "reservationListFullHTML"
);
var reservationAddFullHTML = document.getElementById("reservationAddFullHTML");
var reservationEditFullHTML = document.getElementById(
  "reservationEditFullHTML"
);

//
//  <왼쪽 메뉴>
//

// <왼쪽 메뉴> selector
var reservationLeftUl = document.getElementById("reservationLeftUl");
var reservationListButton = document.getElementById("reservationListButton");
var reservationAddButton = document.getElementById("reservationAddButton");
var reservationEditButton = document.getElementById("reservationEditButton");
var pageWrapperMain = document.getElementById("page-wrapper-main");
var reservationListRow = document.getElementById("reservationListRow");

// <왼쪽메뉴> 이벤트리스너 - 3개 이동코드
reservationLeftUl.addEventListener("click", async function (event) {
  var target = event.target;

  if (target.id === "reservationListButton") {
    setActiveButton(reservationListButton, reservationListFullHTML);
    await listFunction("http://127.0.0.1:3001/reservation/list", null, "GET");
  } else if (target.id === "reservationAddButton")
    setActiveButton(reservationAddButton, reservationAddFullHTML);
  else if (target.id === "reservationEditButton")
    setActiveButton(reservationEditButton, reservationEditFullHTML);
});
//  <왼쪽메뉴> 함수
function setActiveButton(button, htmlContent) {
  var siblingsButton = button.parentElement.children;
  var siblingsMainWrapper = pageWrapperMain.children;

  for (var i = 0; i < siblingsButton.length; i++)
    siblingsButton[i].classList.remove("active");
  for (var i = 0; i < siblingsMainWrapper.length; i++)
    siblingsMainWrapper[i].classList.add("nodisplay");
  button.classList.add("active");
  htmlContent.classList.remove("nodisplay");
  htmlContent.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
}

//
// <예약 목록>
//

// <예약 목록> selector
var list_CustomerName = document.getElementById(
  "reservationList_InputCustomerName"
);
var list_DesignerName = document.getElementById(
  "reservationList_InputDesignerName"
);
var list_State = document.getElementById(
  "reservationList_InputReservationState"
);

var list_ButtonAdd = document.getElementById("reservationList_ButtonAdd");
var list_ButtonList = document.getElementById("reservationList_ButtonList");

// <예약 목록> 이벤트리스너 - 버튼 누르면 동작하는 함수
list_ButtonAdd.addEventListener("click", async function () {
  await list_FuncButtonAdd();
});
list_ButtonList.addEventListener("click", async function () {
  await list_FuncButtonList();
});
//  <디자이너 목록>에서 버튼 Onclick함수들
function list_FuncButtonAdd() {
  setActiveButton(reservationAddButton, reservationAddFullHTML);
}
async function list_FuncButtonList() {
  const data = {
    customer_name: list_CustomerName.value,
    designer_name: list_DesignerName.value,
    reservation_state: list_State.value,
  };

  console.log(data);
  await listFunction("http://127.0.0.1:3001/reservation/list", data, "POST");
}

async function listFunction(url, data, method) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(method === "POST" && { body: JSON.stringify(data) }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    console.log("Response data:", res);
    const urlString = new URL(url);
    const path = urlString.pathname;
    console.log("path ", path);
    if (path === "/reservation/list") {
      reservationListRow.innerHTML = "";
      for (let i = 0; i < res.data.length; i++) {
        reservationListRow.innerHTML += `<tr>
        <td>
          <a href="/admin/modify/${res.data[i].reservation_id}"
            >${res.data[i].reservation_id}</a
          >
        </td>
        <td>${res.data[i].customer_name}</td>
        <td>${res.data[i].designer_name}</td>
        <td>${res.data[i].reservation_state}</td>
        <td>${res.data[i].memo}</td>
        <td>${res.data[i].reg_date}</td>
      </tr>`;
      }
    }
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}

//
//  <예약 추가>
//

//  <예약 추가> selector
var add_CustomerName = document.getElementById(
  "reservationAdd_InputCustomerName"
);
var add_DesignerName = document.getElementById(
  "reservationAdd_InputDesignerName"
);
var add_State = document.getElementById("reservationAdd_InputReservationState");
var add_Memo = document.getElementById("reservationAdd_InputMemo");
var add_CutStyle = document.getElementById("reservationAdd_InputCutStyle");
var add_Price = document.getElementById("reservationAdd_InputPrice");
var add_RegDate = document.getElementById("reservationAdd_InputRegDate");
var add_StartDate = document.getElementById(
  "reservationAdd_InputReservationStartDate"
);
var add_EndDate = document.getElementById(
  "reservationAdd_InputReservationEndDate"
);

var add_ButtonSave = document.getElementById("reservationAdd_ButtonSave");
var add_ButtonList = document.getElementById("reservationAdd_ButtonList");

// <디자이너 추가> 이벤트리스너 - 버튼 누르면 동작하는 함수
add_ButtonSave.addEventListener("click", async function () {
  await add_FuncButtonSave();
});
add_ButtonList.addEventListener("click", async function () {
  await add_FuncButtonList();
});
//  <디자이너 추가>에서 버튼 Onclick함수들
async function add_FuncButtonSave() {
  console.log("Save");
  console.log("손님 이름 : ", add_CustomerName.value);
  console.log("디자이너 이름 : ", add_DesignerName.value);
  console.log("상태 : ", add_State.value);
  console.log("메모 : ", add_Memo.value);
  console.log("스타일 : ", add_CutStyle.value);
  console.log("가격 : ", add_Price.value);
  console.log("등록일자 : ", add_RegDate.value);
  console.log("예약시작 : ", add_StartDate.value);
  console.log("예약종료 : ", add_EndDate.value);

  const data = {
    designer_name: add_CustomerName.value,
    customer_name: add_DesignerName.value,
    reservation_state: add_State.value,
    memo: add_Memo.value,
    cut_style: add_CutStyle.value,
    price: add_Price.value,
    reg_date: add_RegDate.value,
    resrevation_start_date: add_StartDate.value,
    reservation_end_date: add_EndDate.value,
  };

  console.log(data);
  await listFunction(
    "http://127.0.0.1:3001/reservation/create",
    data,
    "POST"
  ).then(() =>
    listFunction("http://127.0.0.1:3001/reservation/list", null, "GET")
  );
  setActiveButton(reservationListButton, reservationListFullHTML);
}

async function add_FuncButtonList() {
  console.log("List");
  console.log("손님 이름 : ", add_CustomerName.value);
  console.log("디자이너 이름 : ", add_DesignerName.value);
  console.log("상태 : ", add_State.value);
  console.log("메모 : ", add_Memo.value);
  console.log("스타일 : ", add_CutStyle.value);
  console.log("가격 : ", add_Price.value);
  console.log("등록일자 : ", add_RegDate.value);
  console.log("예약시작 : ", add_StartDate.value);
  console.log("예약종료 : ", add_EndDate.value);
  setActiveButton(reservationListButton, reservationListFullHTML);
  await listFunction("http://127.0.0.1:3001/reservation/list", null, "GET");
}
//
//  <디자이너 수정>
//

//  <예약 추가> selector
var edit_ReservationId = document.getElementById(
  "reservationEdit_InputReservationId"
);
var edit_CustomerName = document.getElementById(
  "reservationEdit_InputCustomerName"
);
var edit_DesignerName = document.getElementById(
  "reservationEdit_InputDesignerName"
);
var edit_State = document.getElementById(
  "reservationEdit_InputReservationState"
);
var edit_Memo = document.getElementById("reservationEdit_InputMemo");
var edit_CutStyle = document.getElementById("reservationEdit_InputCutStyle");
var edit_Price = document.getElementById("reservationEdit_InputPrice");
var edit_RegDate = document.getElementById("reservationEdit_InputRegDate");
var edit_StartDate = document.getElementById(
  "reservationEdit_InputReservationStartDate"
);
var edit_EndDate = document.getElementById(
  "reservationEdit_InputReservationEndDate"
);

var edit_ButtonSave = document.getElementById("reservationEdit_ButtonSave");
var edit_ButtonDelete = document.getElementById("reservationEdit_ButtonDelete");
var edit_ButtonList = document.getElementById("reservationEdit_ButtonList");

// <디자이너 추가> 이벤트리스너 - 버튼 누르면 동작하는 함수
edit_ButtonSave.addEventListener("click", async function () {
  await edit_FuncButtonSave();
});
edit_ButtonDelete.addEventListener("click", async function () {
  await edit_FuncButtonDelete();
});
edit_ButtonList.addEventListener("click", async function () {
  await edit_FuncButtonList();
});
//  <디자이너 추가>에서 버튼 Onclick함수들
async function edit_FuncButtonSave() {
  console.log("Save");
  console.log("예약번호 : ", edit_ReservationId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("디자이너 이름 : ", edit_DesignerName.value);
  console.log("상태 : ", edit_State.value);
  console.log("메모 : ", edit_Memo.value);
  console.log("스타일 : ", edit_CutStyle.value);
  console.log("가격 : ", edit_Price.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("예약시작 : ", edit_StartDate.value);
  console.log("예약종료 : ", edit_EndDate.value);
}

async function edit_FuncButtonDelete() {
  console.log("Delete");
  console.log("예약번호 : ", edit_ReservationId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("디자이너 이름 : ", edit_DesignerName.value);
  console.log("상태 : ", edit_State.value);
  console.log("메모 : ", edit_Memo.value);
  console.log("스타일 : ", edit_CutStyle.value);
  console.log("가격 : ", edit_Price.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("예약시작 : ", edit_StartDate.value);
  console.log("예약종료 : ", edit_EndDate.value);
}
async function edit_FuncButtonList() {
  console.log("List");
  console.log("예약번호 : ", edit_ReservationId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("디자이너 이름 : ", edit_DesignerName.value);
  console.log("상태 : ", edit_State.value);
  console.log("메모 : ", edit_Memo.value);
  console.log("스타일 : ", edit_CutStyle.value);
  console.log("가격 : ", edit_Price.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("예약시작 : ", edit_StartDate.value);
  console.log("예약종료 : ", edit_EndDate.value);
  setActiveButton(reservationListButton, reservationListFullHTML);
  await listFunction("http://127.0.0.1:3001/reservation/list", null, "GET");
}
