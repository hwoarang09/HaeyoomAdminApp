import {
  customerListFullHTML,
  customerAddFullHTML,
  customerEditFullHTML,
} from "./customerHTML.js";
import { footerHTML } from "../headerFooter/footer.js";
import { headerHTML } from "../headerFooter/header.js";

var customerLeftUl = document.getElementById("customerLeftUl");
var customerListButton = document.getElementById("customerListButton");
var customerAddButton = document.getElementById("customerAddButton");
var customerEditButton = document.getElementById("customerEditButton");
var pageWrapper = document.getElementById("page-wrapper");
//이벤트선언
function setActiveButton(button, htmlContent) {
  var siblings = button.parentElement.children;
  for (var i = 0; i < siblings.length; i++)
    siblings[i].classList.remove("active");
  button.classList.add("active");

  pageWrapper.innerHTML = "";
  pageWrapper.innerHTML += headerHTML;
  pageWrapper.innerHTML += htmlContent;
  pageWrapper.innerHTML += footerHTML;
}

customerLeftUl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.id === "customerListButton")
    setActiveButton(customerListButton, customerListFullHTML);
  else if (target.id === "customerAddButton")
    setActiveButton(customerAddButton, customerAddFullHTML);
  else if (target.id === "customerEditButton")
    setActiveButton(customerEditButton, customerEditFullHTML);
});
