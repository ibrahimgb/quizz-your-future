'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';
import { clearIntervals, initInfoUI, setDataNavbar } from './components/navbar.js';
import { initLastPage } from './pages/lastPage.js';

window.reloadApp = () => {
  clearIntervals();
  localStorage.clear();
  loadApp();
}

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  //Put memorized data to quizData at refresh.
  if(localStorage.getItem('currentIndex') !== null) {
    const list = JSON.parse(localStorage.getItem('questionList'));
    quizData.currentQuestionIndex = parseInt(localStorage.getItem('currentIndex'), 10);
    quizData.questions = list;
    
    const navDataStored = JSON.parse(localStorage.getItem('navData'));
    setDataNavbar(navDataStored);

    initInfoUI();
    if (quizData.currentQuestionIndex >= quizData.questionsToShow) {
      initLastPage();
    } else {
      initQuestionPage();
    }
  } else {
    initWelcomePage();
  }
  
};

window.addEventListener('load', loadApp);