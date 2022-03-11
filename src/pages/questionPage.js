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
    const answerElement = createAnswerElement(answerText);
    answerElement.addEventListener('mouseover', (e) => e.target.classList.add('answer-options-hovering'));
    answerElement.addEventListener('mouseout', (e) => e.target.classList.remove('answer-options-hovering'));
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', (e) => {
      currentQuestion.selected = key;
      answerElementHandler(e);
    });
  }

  document
    .getElementById(SHOW_CORRECT_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

};

const showCorrectAnswer = () => {
  const answerList = document.querySelectorAll('#'+ANSWERS_LIST_ID+' li');

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  // const option = new RegExp('^' + currentQuestion.correct);
  
  answerList.forEach(answer => {if(answer.innerText[0] === currentQuestion.correct) answer.classList.add('answer-option-correct')});
}


const answerElementHandler = (e) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  //If correct answer selected prevent event from firing.
  if(isCorrectAnswerSelected) return;
  e.target.classList.remove('answer-options-hovering');
  if (currentQuestion.selected === currentQuestion.correct) {
    playCorrectQ();
    e.target.classList.add('answer-option-correct');
    addToCurrentScore(score.total)
    score.total = 3;
    nextQuestion();
  } else {
   e.target.classList.add('answer-option-wrong');
    score.total -= 1;
  }

}



//Will call next function on callback
const delayNext = (callback) => {
  isCorrectAnswerSelected = true;
  setTimeout(() => { 
    callback();
    isCorrectAnswerSelected = false;
  }, 1000);
}

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex >= quizData.questionsToShow) {

    delayNext(initLastPage);
  } else {
    //Function only comes here when correct answer is selected.
    delayNext(initQuestionPage);
    nextQuestionRegister()
  }
};


