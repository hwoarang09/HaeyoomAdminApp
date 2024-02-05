import {
  reservationListFullHTML,
  reservationAddFullHTML,
  reservationEditFullHTML,
} from "./reservationHTML.js";
import { footerHTML } from "../headerFooter/footer.js";
import { headerHTML } from "../headerFooter/header.js";

var reservationLeftUl = document.getElementById("reservationLeftUl");
var reservationListButton = document.getElementById("reservationListButton");
var reservationAddButton = document.getElementById("reservationAddButton");
var reservationEditButton = document.getElementById("reservationEditButton");
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

reservationLeftUl.addEventListener("click", function (event) {
  var target = event.target;

  if (target.id === "reservationListButton")
    setActiveButton(reservationListButton, reservationListFullHTML);
  else if (target.id === "reservationAddButton")
    setActiveButton(reservationAddButton, reservationAddFullHTML);
  else if (target.id === "reservationEditButton")
    setActiveButton(reservationEditButton, reservationEditFullHTML);
});
