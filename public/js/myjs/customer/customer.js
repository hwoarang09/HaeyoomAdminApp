//
// list_면 list라는 게 아니라, list페이지에서 사용하는 변수라는 뜻
// add_ edit_도 마찬가지
//

//HTML 페이지
var customerListFullHTML = document.getElementById("customerListFullHTML");
var customerAddFullHTML = document.getElementById("customerAddFullHTML");
var customerEditFullHTML = document.getElementById("customerEditFullHTML");

//
//  <왼쪽 메뉴>
//

// <왼쪽 메뉴> selector
var customerLeftUl = document.getElementById("customerLeftUl");
var customerListButton = document.getElementById("customerListButton");
var customerAddButton = document.getElementById("customerAddButton");
var customerEditButton = document.getElementById("customerEditButton");
var pageWrapperMain = document.getElementById("page-wrapper-main");
var customerListRow = document.getElementById("customerListRow");
// <왼쪽메뉴> 이벤트리스너 - 3개 이동코드
customerLeftUl.addEventListener("click", async function (event) {
  var target = event.target;

  if (target.id === "customerListButton") {
    setActiveButton(customerListButton, customerListFullHTML);
    await listFunction("http://127.0.0.1:3001/customer/list", null, "GET");
  } else if (target.id === "customerAddButton")
    setActiveButton(customerAddButton, customerAddFullHTML);
  else if (target.id === "customerEditButton")
    setActiveButton(customerEditButton, customerEditFullHTML);
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
// <손님 목록>
//

// <손님 목록> selector
var list_CustomerName = document.getElementById(
  "customerList_InputCustomerName"
);
var list_Telephone = document.getElementById("customerList_InputTelephone");
var list_MemberShip = document.getElementById(
  "customerList_InputMembershipStateCode"
);

var list_ButtonAdd = document.getElementById("customerList_ButtonAdd");
var list_ButtonList = document.getElementById("customerList_ButtonList");

// <손님 목록> 이벤트리스너 - 버튼 누르면 동작하는 함수
list_ButtonAdd.addEventListener("click", async function () {
  console.log("111");
  await list_FuncButtonAdd();
});
list_ButtonList.addEventListener("click", async function () {
  await list_FuncButtonList();
});
//  <손님 목록>에서 버튼 Onclick함수들
function list_FuncButtonAdd() {
  console.log("Add");
  console.log("손님 이름 : ", list_CustomerName.value);
  console.log("전화번호 : ", list_Telephone.value);
  console.log("멤버쉽 : ", list_MemberShip.value);
  setActiveButton(customerAddButton, customerAddFullHTML);
}
async function list_FuncButtonList() {
  console.log("List");
  console.log("손님 이름 : ", list_CustomerName.value);
  console.log("전화번호 : ", list_Telephone.value);
  console.log("멤버쉽 : ", list_MemberShip.value);

  const data = {
    customer_name: list_CustomerName.value,
    telephone: list_Telephone.value,
    membership_state_code: list_MemberShip.value,
  };

  console.log(data);
  await listFunction("http://127.0.0.1:3001/customer/list", data, "POST");
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
    if (path === "/customer/list") {
      customerListRow.innerHTML = "";
      for (let i = 0; i < res.data.length; i++) {
        customerListRow.innerHTML += `<tr>
        <td>
          <a href="/admin/modify/${res.data[i].customer_id}"
            >${res.data[i].customer_id}</a
          >
        </td>
        <td>${res.data[i].customer_name}</td>
        <td>${res.data[i].telephone}</td>
        <td>${res.data[i].entry_type_code}</td>
        <td>${res.data[i].membership_state_code}</td>
        <td>${res.data[i].manage_designer_id}</td>
        <td>${res.data[i].reg_date}</td>
      </tr>`;
      }
    }
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
//
//  <손님 추가>
//

//  <손님 추가> selector
var add_CustomerName = document.getElementById("customerAdd_InputCustomerName");
var add_Telephone = document.getElementById("customerAdd_InputTelephone");
var add_EntryType = document.getElementById("customerAdd_InputEntryTypeCode");
var add_MemberShip = document.getElementById(
  "customerAdd_InputMembershipStateCode"
);
var add_BirthDate = document.getElementById("customerAdd_InputBirthDate");
var add_RegDate = document.getElementById("customerAdd_InputRegDate");
var add_ManageDesigner = document.getElementById(
  "customerAdd_InputManageDesigner"
);

var add_ButtonSave = document.getElementById("customerAdd_ButtonSave");
var add_ButtonList = document.getElementById("customerAdd_ButtonList");

// <손님 추가> 이벤트리스너 - 버튼 누르면 동작하는 함수
add_ButtonSave.addEventListener("click", async function () {
  await add_FuncButtonSave();
});
add_ButtonList.addEventListener("click", async function () {
  await add_FuncButtonList();
});
//  <손님 추가>에서 버튼 Onclick함수들
async function add_FuncButtonSave() {
  console.log("Save");
  console.log("손님 이름 : ", add_CustomerName.value);
  console.log("전화번호 : ", add_Telephone.value);
  console.log("가입코드 : ", add_EntryType.value);
  console.log("멤버쉽 : ", add_MemberShip.value);
  console.log("생년월일 : ", add_BirthDate.value);
  console.log("등록일자 : ", add_RegDate.value);
  console.log("담당디자이너 : ", add_ManageDesigner.value);

  const data = {
    customer_name: add_CustomerName.value,
    telephone: add_Telephone.value,
    entry_type_code: add_EntryType.value,
    membership_state_code: add_MemberShip.value,
    birth_date: add_BirthDate.value,
    reg_date: add_RegDate.value,
    manage_designer_id: add_ManageDesigner.value,
  };

  console.log(data);
  await listFunction(
    "http://127.0.0.1:3001/customer/create",
    data,
    "POST"
  ).then(() =>
    listFunction("http://127.0.0.1:3001/customer/list", null, "GET")
  );
  setActiveButton(customerListButton, customerListFullHTML);
}

async function add_FuncButtonList() {
  console.log("List");
  console.log("손님 이름 : ", add_CustomerName.value);
  console.log("전화번호 : ", add_Telephone.value);
  console.log("가입코드 : ", add_EntryType.value);
  console.log("멤버쉽 : ", add_MemberShip.value);
  console.log("생년월일 : ", add_BirthDate.value);
  console.log("등록일자 : ", add_RegDate.value);
  console.log("담당디자이너 : ", add_ManageDesigner.value);
  setActiveButton(customerListButton, customerListFullHTML);
  await listFunction("http://127.0.0.1:3001/customer/list", null, "GET");
}
//
//  <손님 수정>
//

//  <손님 수정> selector
var edit_customerId = document.getElementById("customerEdit_InputCustomerId");
var edit_CustomerName = document.getElementById(
  "customerEdit_InputCustomerName"
);
var edit_Telephone = document.getElementById("customerEdit_InputTelephone");
var edit_EntryType = document.getElementById("customerEdit_InputEntryTypeCode");
var edit_MemberShip = document.getElementById(
  "customerEdit_MembershipStateCode"
);
var edit_BirthDate = document.getElementById("customerEdit_InputBirthDate");
var edit_RegDate = document.getElementById("customerEdit_InputRegDate");
var edit_ManageDesigner = document.getElementById(
  "customerEdit_InputManageDesigner"
);

var edit_ButtonSave = document.getElementById("customerEdit_ButtonSave");
var edit_ButtonDelete = document.getElementById("customerEdit_ButtonDelete");
var edit_ButtonList = document.getElementById("customerEdit_ButtonList");

// <손님 수정> 이벤트리스너 - 버튼 누르면 동작하는 함수
edit_ButtonSave.addEventListener("click", async function () {
  await edit_FuncButtonSave();
});
edit_ButtonDelete.addEventListener("click", async function () {
  await edit_FuncButtonDelete();
});
edit_ButtonList.addEventListener("click", async function () {
  await edit_FuncButtonList();
});
//  <손님 수정>에서 버튼 Onclick함수들
async function edit_FuncButtonSave() {
  console.log("Save");
  console.log("손님 번호 : ", edit_customerId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("전화번호 : ", edit_Telephone.value);
  console.log("가입코드 : ", edit_EntryType.value);
  console.log("멤버쉽 : ", edit_MemberShip.value);
  console.log("생년월일 : ", edit_BirthDate.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("담당디자이너 : ", edit_ManageDesigner.value);
}

async function edit_FuncButtonDelete() {
  console.log("Delete");
  console.log("예약번호 : ", edit_customerId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("전화번호 : ", edit_Telephone.value);
  console.log("가입코드 : ", edit_EntryType.value);
  console.log("멤버쉽 : ", edit_MemberShip.value);
  console.log("생년월일 : ", edit_BirthDate.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("담당디자이너 : ", edit_ManageDesigner.value);
}
async function edit_FuncButtonList() {
  console.log("List");
  console.log("예약번호 : ", edit_customerId.value);
  console.log("손님 이름 : ", edit_CustomerName.value);
  console.log("전화번호 : ", edit_Telephone.value);
  console.log("가입코드 : ", edit_EntryType.value);
  console.log("멤버쉽 : ", edit_MemberShip.value);
  console.log("생년월일 : ", edit_BirthDate.value);
  console.log("등록일자 : ", edit_RegDate.value);
  console.log("담당디자이너 : ", edit_ManageDesigner.value);
  setActiveButton(customerListButton, customerListFullHTML);
  await listFunction("http://127.0.0.1:3001/customer/list", null, "GET");
}
