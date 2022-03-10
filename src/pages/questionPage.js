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
import {
  addToCurrentScore,
  clearIntervals,
  nextQuestionRegister,
} from '../components/navbar.js';
import { score } from '../components/scoreKeeper.js';

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
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(SHOW_CORRECT_BUTTON_ID)
    .addEventListener('click', showCorrectAnswer);

  addAnswerEvents();
};

const showCorrectAnswer = () => {
  const answerList = document.querySelectorAll('#' + ANSWERS_LIST_ID + ' li');
  let incorrectAnswerIdToRemove = Math.floor(Math.random() * 4);
  let correctAnswerIndex = 0;

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  answerList.forEach((answer, index) => {
    if (answer.innerText[0] === currentQuestion.correct) {
      correctAnswerIndex = index;
      console.log(correctAnswerIndex);
      return;
    }
  });

  while (
    incorrectAnswerIdToRemove === correctAnswerIndex ||
    answerList.length < incorrectAnswerIdToRemove
  ) {
    incorrectAnswerIdToRemove = Math.floor(Math.random() * 4);
  }
  console.log('correctAnswerIndex:' + correctAnswerIndex);
  console.log('incorrectAnswerIdToRemove : ' + incorrectAnswerIdToRemove);

  answerList.item(incorrectAnswerIdToRemove).remove();
  console.log(answerList);
  /*
  //turning an element background to green if it is the correct answer
  answerList.forEach((answer) => {
    if (answer.innerText[0] === currentQuestion.correct)
      answer.classList.add('answer-option-correct');
  });
  */
};

const addAnswerEvents = () => {
  const answerList = document.querySelectorAll('#' + ANSWERS_LIST_ID + ' li');

  //Go through each answer and add events
  answerList.forEach((answer) => {
    answer.addEventListener('mouseover', (e) =>
      e.target.classList.add('answer-options-hovering')
    );
    answer.addEventListener('mouseout', (e) =>
      e.target.classList.remove('answer-options-hovering')
    );
    answer.addEventListener('click', (e) => {
      //If correct answer selected prevent event from firing.
      if (isCorrectAnswerSelected) return;
      e.target.classList.remove('answer-options-hovering');
      const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
      currentQuestion.selected = e.target.innerText[0];

      if (currentQuestion.selected === currentQuestion.correct) {
        e.target.classList.add('answer-option-correct');
        addToCurrentScore(score.total);
        score.total = 3;
        nextQuestion();
      } else {
        e.target.classList.add('answer-option-wrong');
        score.total -= 1;
      }
    });
  });
};

let count = 0;

//Will call next function on callback
const delayNext = (callback) => {
  isCorrectAnswerSelected = true;
  setTimeout(() => {
    callback();
    isCorrectAnswerSelected = false;
  }, 1000);
};

const nextQuestion = () => {
  count++;
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (count === quizData.questionsToShow) {
    delayNext(initLastPage);
    (quizData.currentQuestionIndex = 0), (count = 0);
    clearIntervals();
  } else {
    //Function only comes here when correct answer is selected.
    delayNext(initQuestionPage);
    nextQuestionRegister();
  }
};
