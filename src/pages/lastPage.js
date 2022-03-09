'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createLastElement, createScoreElement } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';
import { questionAndAnswerList } from '../views/lastView.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const initLastPage = () => {
  userInterface.innerHTML = '';

  const scoreElement = createScoreElement();
  const lastElement = createLastElement();
  const qaList = questionAndAnswerList();
  userInterface.appendChild(scoreElement);
  userInterface.appendChild(qaList);
  userInterface.appendChild(lastElement);

  document
    .getElementById(RETURN_HOME_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
  initWelcomePage();
  };