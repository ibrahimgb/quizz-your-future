'use strict';
import { quizData } from '../data.js';
import { ANSWERS_LIST_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.addEventListener('click', choose);
  element.style.cursor = 'pointer';
  
  return element;
};

const choose = (e) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; 
  currentQuestion.selected = e.target.innerText[0];
  currentQuestion.selected === currentQuestion.correct ? e.target.style.color = 'green'
  : e.target.style.color = 'red';
}
