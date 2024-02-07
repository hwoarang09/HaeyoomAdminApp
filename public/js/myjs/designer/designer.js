//
// list_면 list라는 게 아니라, list페이지에서 사용하는 변수라는 뜻
// add_ edit_도 마찬가지
//

//HTML 페이지
var designerListFullHTML = document.getElementById("designerListFullHTML");
var designerAddFullHTML = document.getElementById("designerAddFullHTML");
var designerEditFullHTML = document.getElementById("designerEditFullHTML");

//
//  <왼쪽 메뉴>
//

// <왼쪽 메뉴> selector
var designerLeftUl = document.getElementById("designerLeftUl");
var designerListButton = document.getElementById("designerListButton");
var designerAddButton = document.getElementById("designerAddButton");
var designerEditButton = document.getElementById("designerEditButton");
var pageWrapperMain = document.getElementById("page-wrapper-main");
var designerListRow = document.getElementById("designerListRow");
// <왼쪽메뉴> 이벤트리스너 - 3개 이동코드
designerLeftUl.addEventListener("click", async function (event) {
  var target = event.target;

  if (target.id === "designerListButton") {
    setActiveButton(designerListButton, designerListFullHTML);
    await listFunction("http://127.0.0.1:3001/designer/list", null, "GET");
    // fetch() 함수를 사용하여 POST 요청을 보냅니다.
  } else if (target.id === "designerAddButton")
    setActiveButton(designerAddButton, designerAddFullHTML);
  else if (target.id === "designerEditButton")
    setActiveButton(designerEditButton, designerEditFullHTML);
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
// <디자이너 목록>
//

// <디자이너 목록> selector
var list_Name = document.getElementById("designerList_InputDesignerName");
var list_Position = document.getElementById(
  "designerList_InputDesignerPosition"
);
var list_StateCode = document.getElementById(
  "designerList_InputDesignerStateCode"
);

var list_ButtonAdd = document.getElementById("designerList_ButtonAdd");
var list_ButtonList = document.getElementById("designerList_ButtonList");

// <디자이너 목록> 이벤트리스너 - 버튼 누르면 동작하는 함수
list_ButtonAdd.addEventListener("click", async function () {
  await list_FuncButtonAdd();
});
list_ButtonList.addEventListener("click", async function () {
  await list_FuncButtonList();
});
//  <디자이너 목록>에서 버튼 Onclick함수들
function list_FuncButtonAdd() {
  setActiveButton(designerAddButton, designerAddFullHTML);
}
async function list_FuncButtonList() {
  const data = {
    designer_name: list_Name.value,
    position: list_Position.value,
    designer_state_code: list_StateCode.value,
  };

  console.log(data);
  await listFunction("http://127.0.0.1:3001/designer/list", data, "POST");
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
    if (path === "/designer/list") {
      designerListRow.innerHTML = "";
      for (let i = 0; i < res.data.length; i++) {
        designerListRow.innerHTML += `<tr>
        <td>
          <a href="/admin/modify/${res.data[i].designer_id}"
            >${res.data[i].designer_id}</a
          >
        </td>
        <td>${res.data[i].position}</td>
        <td>${res.data[i].designer_name}</td>
        <td>${res.data[i].designer_desc}</td>
        <td>${res.data[i].designer_state_code}</td>
        <td>${res.data[i].reg_date}</td>
      </tr>`;
      }
    }
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
//
//  <디자이너 추가>
//

//  <디자이너 추가> selector
var add_Name = document.getElementById("designerAdd_IntputDesignerName");
var add_Position = document.getElementById("designerAdd_InputPosition");
var add_Desc = document.getElementById("designerAdd_InputDesignerDesc");
var add_Email = document.getElementById("designerAdd_InputEmail");
var add_Telephone = document.getElementById("designerAdd_InputTelephone");
var add_UsedYnCode = document.getElementById("designerAdd_InputUsedYnCode");

var add_ButtonSave = document.getElementById("designerAdd_ButtonSave");
var add_ButtonList = document.getElementById("designerAdd_ButtonList");

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
  console.log("디자이너 이름 : ", add_Name.value);
  console.log("직책 : ", add_Position.value);
  console.log("설명 : ", add_Desc.value);
  console.log("이메일 : ", add_Email.value);
  console.log("전화 : ", add_Telephone.value);
  console.log("사용여부 : ", add_UsedYnCode.value);

  const data = {
    designer_name: add_Name.value,
    position: add_Position.value,
    designer_desc: add_Desc.value,
    email: add_Email.value,
    telephone: add_Telephone.value,
  };

  console.log(data);
  await listFunction(
    "http://127.0.0.1:3001/designer/create",
    data,
    "POST"
  ).then(() =>
    listFunction("http://127.0.0.1:3001/designer/list", null, "GET")
  );
  setActiveButton(designerListButton, designerListFullHTML);
}

async function add_FuncButtonList() {
  console.log("List");
  console.log("디자이너 이름 : ", add_Name.value);
  console.log("직책 : ", add_Position.value);
  console.log("설명 : ", add_Desc.value);
  console.log("이메일 : ", add_Email.value);
  console.log("전화 : ", add_Telephone.value);
  console.log("사용여부 : ", add_UsedYnCode.value);
  setActiveButton(designerListButton, designerListFullHTML);
  await listFunction("http://127.0.0.1:3001/designer/list", null, "GET");
}
//
//  <디자이너 수정>
//

//  <디자이너 수정> selector
var edit_Id = document.getElementById("designerEdit_InputDesignerId");
var edit_Name = document.getElementById("designerEdit_InputDesignerName");
var edit_Position = document.getElementById("designerEdit_InputPosition");
var edit_StateCode = document.getElementById(
  "designerEdit_InputDesignerStateCode"
);
var edit_Email = document.getElementById("designerEdit_InputEmail");
var edit_Telephone = document.getElementById("designerEdit_InputTelephone");
var edit_RegDate = document.getElementById("designerEdit_InputRegDate");
var edit_EditDate = document.getElementById("designerEdit_InputEditDate");
var edit_UsedYnCode = document.getElementById("designerEdit_InputUsedYnCode");
var edit_Desc = document.getElementById("designerEdit_InputDesc");
var edit_RegDate = document.getElementById("designerEdit_InputRegDate");
var edit_EditDate = document.getElementById("designerEdit_InputEditDate");
var edit_ButtonSave = document.getElementById("designerEdit_ButtonSave");
var edit_ButtonDelete = document.getElementById("designerEdit_ButtonDelete");
var edit_ButtonList = document.getElementById("designerEdit_ButtonList");

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
  console.log("디자이너 이름 : ", edit_Name.value);
  console.log("직책 : ", edit_Position.value);
  console.log("설명 : ", edit_Desc.value);
  console.log("이메일 : ", edit_Email.value);
  console.log("전화 : ", edit_Telephone.value);
  console.log("수정날짜 : ", edit_EditDate.value);
  console.log("등록날짜 : ", edit_RegDate.value);
  console.log("재직상태 : ", edit_UsedYnCode.value);
}

async function edit_FuncButtonDelete() {
  console.log("Delete");
  console.log("디자이너 이름 : ", edit_Name.value);
  console.log("직책 : ", edit_Position.value);
  console.log("설명 : ", edit_Desc.value);
  console.log("이메일 : ", edit_Email.value);
  console.log("전화 : ", edit_Telephone.value);
  console.log("수정날짜 : ", edit_EditDate.value);
  console.log("등록날짜 : ", edit_RegDate.value);
  console.log("재직상태 : ", edit_UsedYnCode.value);
}
async function edit_FuncButtonList() {
  console.log("List");
  console.log("디자이너 이름 : ", edit_Name.value);
  console.log("직책 : ", edit_Position.value);
  console.log("설명 : ", edit_Desc.value);
  console.log("이메일 : ", edit_Email.value);
  console.log("전화 : ", edit_Telephone.value);
  console.log("수정날짜 : ", edit_EditDate.value);
  console.log("등록날짜 : ", edit_RegDate.value);
  console.log("재직상태 : ", edit_UsedYnCode.value);
  setActiveButton(designerListButton, designerListFullHTML);
  await listFunction("http://127.0.0.1:3001/designer/list", null, "GET");
}
