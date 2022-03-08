'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SHOW_CORRECT_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initLastPage } from './lastPage.js';
import { nextQuestionRegister } from '../components/navbar.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(SHOW_CORRECT_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const showCorrectAnswer = () => {
  const answerList = document.querySelectorAll('#'+ANSWERS_LIST_ID+' li');

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  // const option = new RegExp('^' + currentQuestion.correct);
  
  answerList.forEach(answer => {if(answer.innerText[0] === currentQuestion.correct) answer.style.color = 'green'});
}

let count = 0;
const nextQuestion = () => {
  count++;
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  count < quizData.questions.length ? initQuestionPage()
  : initLastPage();


  initQuestionPage();
  nextQuestionRegister();
};


