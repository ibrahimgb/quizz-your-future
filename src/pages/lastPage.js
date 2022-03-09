'use strict';

import { USER_INTERFACE_ID, RETURN_HOME_BUTTON_ID } from '../constants.js';
import { createLastElement } from '../views/lastView.js';
import { initWelcomePage } from './welcomePage.js';
import { questionAndAnswerList } from '../views/lastView.js';
import { quizData } from '../data.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);


export const initLastPage = () => {
  userInterface.innerHTML = '';

  const lastElement = createLastElement();
  const qaList = questionAndAnswerList();
  userInterface.appendChild(lastElement);
  userInterface.appendChild(qaList);
  console.log(qaList);
  

  document
    .getElementById(RETURN_HOME_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const restartQuiz = () => {
   //Clear selection on reset.
    quizData.questions.map(q => {
      q.selected = null;
    });
  initWelcomePage();
  };