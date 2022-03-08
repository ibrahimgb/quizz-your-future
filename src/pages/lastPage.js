'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createLastElement } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';

export const initLastPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const lastElement = createLastElement();
  userInterface.appendChild(lastElement);

  document
    .getElementById(RETURN_HOME_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
  initWelcomePage();
};