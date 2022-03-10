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
import { addToCurrentScore, clearIntervals, nextQuestionRegister } from '../components/navbar.js';
import { score } from '../components/scoreKeeper.js';
import { playCorrectQ } from '../components/soundPlayer.js';

//Check if correct answer is selected
let isCorrectAnswerSelected = false;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    if (currentQuestion.selected === key) {
      console.log(key);
    }
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
  
  answerList.forEach(answer => {if(answer.innerText[0] === currentQuestion.correct) answer.classList.add('answer-option-correct')});
}

const addAnswerEvents = () => {
  const answerList = document.querySelectorAll('#'+ANSWERS_LIST_ID+' li');

  //Go through each answer and add events
  answerList.forEach(answer => {
    answer.addEventListener('mouseover', (e) => e.target.classList.add('answer-options-hovering'));
    answer.addEventListener('mouseout', (e) => e.target.classList.remove('answer-options-hovering'));
    answer.addEventListener('click', (e) => {
      //If correct answer selected prevent event from firing.
      if(isCorrectAnswerSelected) return;
      e.target.classList.remove('answer-options-hovering');
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; 
      currentQuestion.selected = e.target.innerText[0];

      if (currentQuestion.selected === currentQuestion.correct) {
        playCorrectQ();
        localStorage.setItem('currentIndex', quizData.currentQuestionIndex+1);
        
         e.target.classList.add('answer-option-correct');
        addToCurrentScore(score.total)
        score.total = 3;
        nextQuestion();
      } else {
       e.target.classList.add('answer-option-wrong');
        score.total -= 1;
      }
    } );
  })
}

let count = 0;

//Will call next function on callback
const delayNext = (callback) => {
  isCorrectAnswerSelected = true;
  setTimeout(() => { 
    callback();
    isCorrectAnswerSelected = false;
  }, 1000);
}

const nextQuestion = () => {
  
  count++;
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (count <= quizData.questionsToShow) {
    delayNext(initLastPage);
    quizData.currentQuestionIndex = 0, 
    count = 0;
    clearIntervals();

  } else {
    //Function only comes here when correct answer is selected.
    delayNext(initQuestionPage);
    nextQuestionRegister()
  }
};


