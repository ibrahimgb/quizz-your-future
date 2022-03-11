'use strict';

import { initInfoUI, starterNavUI } from '../components/navbar.js';
import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { shuffleQuestions } from '../data.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { quizData } from '../data.js';

export const initWelcomePage = () => {
  starterNavUI();
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {

  shuffleQuestions();
  localStorage.setItem('questionList', JSON.stringify(quizData.questions));
  initQuestionPage();
  initInfoUI();
};
