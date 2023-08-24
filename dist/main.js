(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _modal = _interopRequireDefault(require("./modules/modal"));
var _tabs = _interopRequireDefault(require("./modules/tabs"));
var _play = _interopRequireDefault(require("./modules/play"));
var _autofill = _interopRequireDefault(require("./modules/autofill"));
var _create = _interopRequireDefault(require("./modules/create"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
window.addEventListener('DOMContentLoaded', function () {
  (0, _autofill.default)();
  (0, _tabs.default)('.tabs', 'tabs__tab-active', 1);
  (0, _modal.default)('.modal-result', '.question__btn');
  (0, _play.default)('.questions', '.selected', {
    btnSel: '.question__btn',
    questionsSel: '.questions',
    actual: '#actualPoints',
    general: '#generalPoints'
  });
  (0, _create.default)('.create', '.addQuestion', '.addAnswer');
});

},{"./modules/autofill":2,"./modules/create":3,"./modules/modal":4,"./modules/play":5,"./modules/tabs":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//this is a temporary function

var autofill = function autofill() {
  if (!localStorage.getItem('questions')) {
    var questions = [{
      title: 'Який найбільший в світі півострів?',
      answers: ['Крим', 'Піренейський', 'Аравійський', 'Індостан', 3]
    }, {
      title: 'Коли Україна отримала незалежність?',
      answers: ['1991', '1989', '1990', '1992', 1]
    }, {
      title: 'Яка найвища гора світу?',
      answers: ['Говерла', 'Кіліманджаро', 'Мак-Кінлі', 'Еверест', 4]
    }, {
      title: '13² = ?',
      answers: ['121', '169', '269', '319', 2]
    }, {
      title: 'Коли почалася Перша світова війна?',
      answers: ['1991', '1914', '1941', '1939', 2]
    }];
    localStorage.setItem('questions', JSON.stringify(questions));
  }
};
var _default = autofill;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var create = function create(formSel, addQuestionSel, addAnswerSel) {
  var form = document.querySelector(formSel),
    addQuestionBtn = document.querySelector(addQuestionSel);
  var formHandler = function formHandler(e) {
    console.log(1);
    e.preventDefault();
    var formData = new FormData(form);
    var data = {};
    var _iterator = _createForOfIteratorHelper(formData),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          val = _step$value[1];
        data[key] = val;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    console.log(data);
  };
  var addQuestion = function addQuestion(e) {
    e.preventDefault();
    var dest = addQuestionBtn.previousElementSibling;
    dest.insertAdjacentHTML('beforeend', "\n      <div class=\"create__block\">\n        <div class=\"create__question\">\n          <input type=\"text\" class=\"input\" placeholder=\"Question...\" name=\"question\">\n          <button type=\"button\" class=\"addAnswer\">Add answer</button>\n        </div>\n        <div class=\"create__answers\">\n          <input type=\"text\" class=\"create__answer input\" placeholder=\"Answer...\" name=\"answer\">\n        </div>\n      </div>\n      ");
  };
  var addAnswer = function addAnswer(e) {
    //*Using delegation of events here
    e.preventDefault();
    var target = e.target;
    if (target && target.classList.contains(addAnswerSel.slice(1))) {
      var dest = target.parentElement.nextElementSibling;
      if (dest.children.length < 4) {
        dest.insertAdjacentHTML('beforeend', "\n          <input type=\"text\" class=\"create__answer input\" placeholder=\"Answer...\" name=\"answer\">\n          ");
      } else {
        alert('Max amount of answers: 4');
      }
    }
  };
  form.querySelector('.create__questions').addEventListener('click', addAnswer);
  form.addEventListener('submit', formHandler);
  addQuestionBtn.addEventListener('click', addQuestion);
};
var _default = create;
/*
   
*/
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var modal = function modal(modalSel, triggersSel) {
  var modalBlock = document.querySelector(modalSel),
    triggers = document.querySelectorAll(triggersSel),
    closeTriggers = modalBlock.querySelectorAll('[data-close]');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modalBlock.classList.remove('hide');
      modalBlock.classList.add('fadeIn');
      document.body.classList.add('lock');
    });
  });
  closeTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modalBlock.classList.remove('fadeIn');
      modalBlock.classList.add('hide');
      document.body.classList.remove('lock');
    });
  });
  modalBlock.addEventListener('click', function (e) {
    if (e.target === modalBlock) {
      modalBlock.classList.remove('fadeIn');
      modalBlock.classList.add('hide');
      document.body.classList.remove('lock');
    }
  });
};
var _default = modal;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var play = function play(destinationSel, selectClass) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    btnSel = _ref.btnSel,
    questionsSel = _ref.questionsSel,
    actual = _ref.actual,
    general = _ref.general;
  var questions = JSON.parse(localStorage.getItem('questions'));
  var answersSelect = function answersSelect(question, selectClass) {
    var answers = _toConsumableArray(document.querySelector(question).children),
      modalSelected = document.querySelector('.modal-selected');
    answers.forEach(function (ans, i) {
      ans.addEventListener('click', function (e) {
        e.preventDefault();
        if (!ans.querySelector(selectClass)) {
          var checkmark = document.createElement('div');
          checkmark.classList.add(selectClass.slice(1));
          checkmark.innerHTML = '&check;';
          answers.forEach(function (a) {
            return a.querySelector(selectClass) ? a.removeChild(a.querySelector(selectClass)) : '';
          });
          ans.append(checkmark);
        } else {
          ans.removeChild(ans.querySelector(selectClass));
        }
        // if (!modalSelected.classList.contains('fadeInOutUp')) {
        //   modalSelected.style.top = window.scrollY + 'px'
        //   modalSelected.classList.add('fadeInOutUp')
        // } else {
        //   modalSelected.classList.remove('fadeInOutUp')
        // }
      });
    });
  };

  var render = function render(sel) {
    var dest = document.querySelector(sel);
    questions.forEach(function (_ref2, i) {
      var title = _ref2.title,
        answers = _ref2.answers;
      var charCode = 65,
        answersHTML = '';
      /*charCode is used for letters in data-letter 
      attribute in order to create ABCD symbols in HTML*/
      /*one array element is avoided because the last element is the corrent answer*/
      for (var j = 0; j < answers.length - 1; j++, charCode++) {
        var ansHTML = "<div class=\"question__answer\" data-letter=\"".concat(String.fromCharCode(charCode), "\">").concat(answers[j], "</div>\n");
        answersHTML += ansHTML;
      }
      dest.insertAdjacentHTML('beforeend', "\n        <div class=\"question question-".concat(i + 1, "\">\n          <h2 class=\"question__title\">\n            ").concat(i + 1, ". ").concat(title, "\n          </h2>\n          <div class=\"question__answers\">\n            ").concat(answersHTML, "\n          </div>\n        </div>\n        "));
      answersSelect(".question-".concat(i + 1, " .question__answers"), selectClass);
    });
  };
  var checkAnswers = function checkAnswers(btnSel, questionsSel, actual, general) {
    var btn = document.querySelector(btnSel),
      qs = _toConsumableArray(document.querySelector(questionsSel).children);
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var ql = qs.length;
      var rightAnsCnt = 0;
      qs.forEach(function (q, i) {
        var answers = _toConsumableArray(q.lastElementChild.children);
        answers.forEach(function (ans, j) {
          if (ans.querySelector(selectClass) && j + 1 === questions[i].answers[questions[i].answers.length - 1]) {
            rightAnsCnt++;
          }
        });
      });
      document.querySelector(actual).textContent = rightAnsCnt;
      document.querySelector(general).textContent = ql;
      //Clearing checkmarks
      document.querySelectorAll(selectClass).forEach(function (item) {
        return item.remove();
      });
    });
  };
  render(destinationSel);
  checkAnswers(btnSel, questionsSel, actual, general);
};
var _default = play;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var tabs = function tabs(navbarSel, activeClass) {
  var tabByDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var navbar = document.querySelector(navbarSel),
    tabs = document.querySelectorAll('[data-linkto]'),
    tabsContent = navbar.nextElementSibling.children;
  var hideTabsContent = function hideTabsContent() {
    _toConsumableArray(tabsContent).forEach(function (item) {
      item.classList.add('hide');
    });
    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  };
  hideTabsContent();
  showTabContent(tabByDefault < tabs.length - 1 ? tabByDefault : tabs.length - 1);
  function showTabContent(index) {
    hideTabsContent();
    if (typeof index === 'number') {
      tabsContent[index].classList.remove('hide');
      tabs[index].classList.add(activeClass);
      return;
    }
    var elem = document.querySelector(this.dataset.linkto);
    elem.classList.remove('hide');
    this.classList.add(activeClass);
  }
  tabs.forEach(function (tab) {
    return tab.addEventListener('click', showTabContent);
  });
};
var _default = tabs;
exports.default = _default;

},{}]},{},[1]);
