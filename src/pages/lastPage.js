'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createAccordionToggle, createLastElement } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';
import { questionAndAnswerList } from '../views/lastView.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);


export const initLastPage = () => {
  userInterface.innerHTML = '';

  const lastElement = createLastElement();
  const accordionToggleDiv = createAccordionToggle();
  const qaList = questionAndAnswerList();

  accordionToggleDiv.appendChild(qaList);
  userInterface.appendChild(accordionToggleDiv);
  userInterface.appendChild(lastElement);

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
  initWelcomePage();
  };