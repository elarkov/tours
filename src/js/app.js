import * as functions from "./modules/functions.js";
import * as sideMenu from "./modules/side-menu.js";
// import * as stickyHeader from "./modules/sticky-header.js";
import * as slider from "./modules/slider.js";
import * as tabs from "./modules/tabs.js";
import * as accordion from "./modules/accordion.js";
import * as birthday from "./modules/select-birthday.js";
import * as tooltip from "./modules/tooltip.js";
import * as stickyBlock from "./modules/sticky-block.js";
import * as rangeSlider from "./modules/range-slider.js";
// import * as phoneinput from "./modules/phoneinput.js";
// import * as renderQuiz from "./modules/quiz.js";
// import * as toScroll from "./modules/toScroll.js";
// import * as spamdetect from "./modules/spamDetect.js";
// import * as ajaxSend from "./modules/ajax.js";
 import * as popup from "./modules/popup.js";
// import * as accordion from "./modules/accordion.js";
// import * as lazyload from "./modules/lazyload.js";

// import * as ymap from "./modules/ymap.js";


document.addEventListener('DOMContentLoaded', function () { //dom is ready
  functions.isWebp();
  sideMenu.sideMenu();
  // stickyHeader.stickyHeader();
  slider.renderSlider();
  tabs.renderTabs(document.querySelectorAll('.js-tabs'));
  accordion.renderAccordion();
  birthday.birthday();
  tooltip.tooltip();
  stickyBlock.stickyBlock();
  rangeSlider.rangeSlider();
  popup.renderPopup();
  // phoneinput.phoneInput();
  // //renderQuiz.renderQuiz();
 
  // toScroll.doScroll();
  // spamdetect.spamDetect();
  // ajaxSend.ajaxSend();
  // lazyload.lazyLoadImg();
  // //ymap.ymap();
  // 
});




