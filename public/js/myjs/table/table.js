import { footerHTML } from "../headerFooter/footer.js";

import { headerHTML } from "../headerFooter/header.js";

var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var options = { timeZone: "Australia/Sydney" };
// var australiaDateTimeString = new Date().toLocaleString("en-AU", options);

// var today = new Date(australiaDateTimeString);
var today = new Date();
today.toLocaleString("en-AU", options);
console.log(today);
var month = today.getMonth() + 1;
var day = today.getDate();
var monthStr = month < 10 ? "0" + month : "" + month;
var dayStr = day < 10 ? "0" + day : "" + day;
var tenDayLater = new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000);

var dateContainerCenter = document.getElementById("date-container-center");
var dateContainerArrowLeft = document.getElementById(
  "date-container-arrow-left"
);
var dateContainerArrowRight = document.getElementById(
  "date-container-arrow-right"
);
var dateContainerArrowVariable = 0;

var pageWrapper = document.getElementById("page-wrapper");

const randomInt = function (min, max) {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

const randomRGB = function () {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

//페이지 로딩할 때 오늘 기준으로 10칸 채우기
fillTenDate(dateContainerArrowVariable);

//이벤트선언
document
  .getElementById("date-container-center")
  .addEventListener("click", function (e) {
    // 클릭 이벤트 발생 시 실행할 코드 작성

    // console.log("LINK", e.target, e.currentTarget);
    // console.log(e.currentTarget === this);
    var siblings = e.currentTarget.children;
    console.log(siblings);
    for (var i = 0; i < siblings.length; i++)
      siblings[i].classList.remove("active");
    e.target.closest(".date-container-small").classList.add("active");
    if (e.target.parentNode.classList.contains("date-container-small")) {
      squareDateClick(e.target.parentNode.id);
    }

    //e.stopPropagation();
  });

dateContainerArrowLeft.addEventListener("click", function (e) {
  dateContainerArrowVariable -= 10;
  fillTenDate(dateContainerArrowVariable);
});
dateContainerArrowRight.addEventListener("click", function (e) {
  dateContainerArrowVariable += 10;
  fillTenDate(dateContainerArrowVariable);
});

///함수선언
function squareDateClick(idName) {
  pageWrapper.innerHTML = idName;
}

function fillTenDate(count) {
  dateContainerCenter.innerHTML = "";
  for (var i = 0 + count; i < 10 + count; i++) {
    var inDate = new Date(today.getTime() + (-4 + i) * 24 * 3600000);
    var idName = months[inDate.getMonth()] + "_" + inDate.getDate();
    var childElement = `
  <div class="date-container-small" id="${idName}" name="${idName}" >
  
      <div class="date-day" >
        ${inDate.getDate()}
      </div>
      <div class="date-month">
        ${months[inDate.getMonth()]}
      </div>
  </div>
  `;

    dateContainerCenter.innerHTML += childElement;
  }
}
