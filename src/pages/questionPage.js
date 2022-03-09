'use strict';

import {
  ANSWERS_LIST_ID,
  // NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SHOW_CORRECT_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initLastPage } from './lastPage.js';
import { clearIntervals, nextQuestionRegister } from '../components/navbar.js';

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

    addAnswerEvents();
};

const showCorrectAnswer = () => {
  const answerList = document.querySelectorAll('#'+ANSWERS_LIST_ID+' li');

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  // const option = new RegExp('^' + currentQuestion.correct);
  
  answerList.forEach(answer => {if(answer.innerText[0] === currentQuestion.correct) answer.style.color = 'green'});
}

const addAnswerEvents = () => {
  const answerList = document.querySelectorAll('#'+ANSWERS_LIST_ID+' li');

  //Go through each answer and add events
  answerList.forEach(answer => {
    answer.addEventListener('click', (e) => {
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; 
      currentQuestion.selected = e.target.innerText[0];
      if (currentQuestion.selected === currentQuestion.correct) {
        e.target.style.color = 'green';
        nextQuestion();
      } else {
        e.target.style.color = 'red';
      }
    } );
  })
}

let count = 0;
const nextQuestion = () => {
  count++;
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (count === quizData.questions.length) {
    initLastPage(); 
    quizData.currentQuestionIndex = 0, 
    count = 0;
    clearIntervals();
    //Clear selection on reset.
    quizData.questions.map(q => {
      q.selected = null;
    });

    
  } else {
    initQuestionPage()
    nextQuestionRegister()
  }
};


