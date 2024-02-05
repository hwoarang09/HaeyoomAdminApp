import {
  designerListFullHTML,
  designerAddFullHTML,
  designerEditFullHTML,
} from "./designerHTML.js";
import { footerHTML } from "../headerFooter/footer.js";
import { headerHTML } from "../headerFooter/header.js";

var designerLeftUl = document.getElementById("designerLeftUl");
var designerListButton = document.getElementById("designerListButton");
var designerAddButton = document.getElementById("designerAddButton");
var designerEditButton = document.getElementById("designerEditButton");
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

designerLeftUl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.id === "designerListButton")
    setActiveButton(designerListButton, designerListFullHTML);
  else if (target.id === "designerAddButton")
    setActiveButton(designerAddButton, designerAddFullHTML);
  else if (target.id === "designerEditButton")
    setActiveButton(designerEditButton, designerEditFullHTML);
});
