'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createLastElement, createScoreElement, createAccordionToggle, questionAndAnswerList, createFooter } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';
import { clearIntervals, initInfoUI, lastPageNav, setDataNavbar } from '../components/navbar.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const initLastPage = () => {

  clearIntervals();
  quizData.currentQuestionIndex = 0;
  lastPageNav();

  userInterface.innerHTML = '';

  const scoreElement = createScoreElement();
  const lastElement = createLastElement();
  const accordionToggleDiv = createAccordionToggle();
  const qaList = questionAndAnswerList();
  const footer = createFooter();
  
  userInterface.appendChild(scoreElement);
  accordionToggleDiv.appendChild(qaList);
  userInterface.appendChild(accordionToggleDiv);
  userInterface.appendChild(lastElement);
  userInterface.appendChild(footer);

  document
    .getElementById(RETURN_HOME_BUTTON_ID)
    .addEventListener('click', restartQuiz);
  accordionToggleDiv.addEventListener('click', accordionToggled(qaList))
};

const accordionToggled = (qaList) => {
  return () => {
    if (qaList.style.maxHeight) {
      qaList.style.maxHeight = null;
    } else {
      qaList.style.maxHeight = qaList.scrollHeight + "px";
    }
  }
}

const restartQuiz = () => {
  localStorage.clear();
   //Clear selection on reset.
    quizData.questions.map(q => {
      q.selected = null;
    });
  setDataNavbar({
    mins: 0,
    secs: 0,
    qCurrent: 1,
    score: 0
  });
  initWelcomePage();
  };