!function i(c,a,s){function l(t,e){if(!a[t]){if(!c[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};c[t][0].call(o.exports,function(e){return l(c[t][1][e]||e)},o,o.exports,i,c,a,s)}return a[t].exports}for(var u="function"==typeof require&&require,e=0;e<s.length;e++)l(s[e]);return l}({1:[function(e,t,n){"use strict";var r=i(e("./modules/modal")),o=i(e("./modules/tabs"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=function(e){var t,n,o,i,c,r,a,s=document.querySelector(e),l=JSON.parse(localStorage.getItem("questions"));l.forEach(function(e,t){for(var n=e.title,r=e.answers,o=65,i="",c=0;c<r.length-1;c++,o++){i+='<div class="question__answer" data-letter="'.concat(String.fromCharCode(o),'">').concat(r[c],"</div>\n")}s.insertAdjacentHTML("beforeend",'\n      <div class="question question-'.concat(t+1,'">\n        <h2 class="question__title">\n          ').concat(t+1,". ").concat(n,'\n        </h2>\n        <div class="question__answers">\n          ').concat(i,"\n        </div>\n      </div>\n      ")),function(e){var r=u(document.querySelector(e).children);document.querySelector(".modal-selected");r.forEach(function(n,e){n.addEventListener("click",function(e){if(e.preventDefault(),n.querySelector(".selected"))n.removeChild(n.querySelector(".selected"));else{var t=document.createElement("div");t.classList.add("selected"),t.innerHTML="&check;",r.forEach(function(e){return e.querySelector(".selected")?e.removeChild(e.querySelector(".selected")):""}),n.append(t)}})})}(".question-".concat(t+1," .question__answers"))}),t=".question__btn",n=".questions",o=l,i="#actualPoints",c="#generalPoints",r=document.querySelector(t),a=u(document.querySelector(n).children),r.addEventListener("click",function(e){e.preventDefault();var t=a.length,r=0;a.forEach(function(e,n){u(e.lastElementChild.children).forEach(function(e,t){e.querySelector(".selected")&&t+1===o[n].answers[o[n].answers.length-1]&&r++})}),document.querySelector(i).textContent=r,document.querySelector(c).textContent=t})};window.addEventListener("DOMContentLoaded",function(){if(!localStorage.getItem("questions")){localStorage.setItem("questions",JSON.stringify([{title:"Який найбільший в світі півострів?",answers:["Крим","Піренейський","Аравійський","Індостан",3]},{title:"Коли Україна отримала незалежність?",answers:["1991","1989","1990","1992",1]},{title:"Яка найвища гора світу?",answers:["Говерла","Кіліманджаро","Мак-Кінлі","Еверест",4]},{title:"13² - ?",answers:["121","169","269","319",2]},{title:"Коли почалася Перша світова війна?",answers:["1991","1914","1941","1939",2]}]))}(0,o.default)(".tabs","tabs__tab-active",2),(0,r.default)(".modal-result",".question__btn"),a(".questions")})},{"./modules/modal":2,"./modules/tabs":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e,t){var n=document.querySelector(e),r=document.querySelectorAll(t),o=n.querySelectorAll("[data-close]");r.forEach(function(e){e.addEventListener("click",function(){console.log("ddj"),n.classList.remove("hide"),n.classList.add("fadeIn"),document.body.classList.add("lock")})}),o.forEach(function(e){e.addEventListener("click",function(){n.classList.remove("fadeIn"),n.classList.add("hide"),document.body.classList.remove("lock")})}),n.addEventListener("click",function(e){e.target===n&&(n.classList.remove("fadeIn"),n.classList.add("hide"),document.body.classList.remove("lock"))})};n.default=r},{}],3:[function(e,t,n){"use strict";function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,r=document.querySelector(e),o=document.querySelectorAll("[data-linkto]"),i=r.nextElementSibling.children,c=function(){s(i).forEach(function(e){e.classList.add("hide")}),o.forEach(function(e){e.classList.remove(t)})};function a(e){if(c(),"number"==typeof e)return i[e].classList.remove("hide"),void o[e].classList.add(t);document.querySelector(this.dataset.linkto).classList.remove("hide"),this.classList.add(t)}c(),a(n<o.length-1?n:o.length-1),o.forEach(function(e){return e.addEventListener("click",a)})};n.default=o},{}]},{},[1]);