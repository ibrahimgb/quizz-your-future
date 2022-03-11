'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createLastElement, createScoreElement, createAccordionToggle, questionAndAnswerList, createFooter } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';
import { quizData } from '../data.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const initLastPage = () => {
  userInterface.innerHTML = '';

  const scoreElement = createScoreElement();
  const lastElement = createLastElement();
  const accordionToggleDiv = createAccordionToggle();
  const qaList = questionAndAnswerList();
  const footer = createFooter();
  
  userInterface.appendChild(scoreElement);
   userInterface.appendChild(lastElement);
  accordionToggleDiv.appendChild(qaList);
  userInterface.appendChild(accordionToggleDiv);
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
   //Clear selection on reset.
    quizData.questions.map(q => {
      q.selected = null;
    });
  initWelcomePage();
  };