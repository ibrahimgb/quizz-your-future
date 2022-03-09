'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';

import { createLastElement, createScoreElement } from '../views/lastView.js';

import { createAccordionToggle, createLastElement } from '../views/lastView.js';

import { initWelcomePage } from './welcomePage.js';
import { questionAndAnswerList } from '../views/lastView.js';
import { quizData } from '../data.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const initLastPage = () => {
  userInterface.innerHTML = '';

  const scoreElement = createScoreElement();
  const lastElement = createLastElement();
  const accordionToggleDiv = createAccordionToggle();
  const qaList = questionAndAnswerList();

  userInterface.appendChild(scoreElement);
  userInterface.appendChild(qaList);

  accordionToggleDiv.appendChild(qaList);
  userInterface.appendChild(accordionToggleDiv);

  userInterface.appendChild(lastElement);
  userInterface.appendChild(qaList);
  console.log(qaList);
  

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