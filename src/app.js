'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  if(localStorage.getItem('currentIndex') !== null) {
    const list = JSON.parse(localStorage.getItem('questionList'));
    quizData.currentQuestionIndex = parseInt(localStorage.getItem('currentIndex'), 10);
    console.log(quizData.currentQuestionIndex);
    quizData.questions = list;
    initQuestionPage();
  } else {
    initWelcomePage();
  }
  
};

window.addEventListener('load', loadApp);