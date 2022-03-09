'use strict';

import { navFinalScore } from '../components/navbar.js';
import { RETURN_HOME_BUTTON_ID } from '../constants.js';
import { quizData } from "../data.js";


export const createLastElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button id="${RETURN_HOME_BUTTON_ID}">return</button>
    `;
  return element;
};

export const createScoreElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h4>Your Score is: ${navFinalScore}</h4>
  `;
  return element;
};

/**
 * Create an Answer element
 * @returns {Element}
 */

export const questionAndAnswerList = () => {
  
    const element = document.createElement('ul');
    
    quizData.questions.forEach(question => {
        const liElement = document.createElement('li');
        
        if(question.selected !== null) {
            liElement.innerHTML = String.raw`
        <h3>${question.text}</h3>
    
        <ul>
            <li>Your selection: ${question.selected}: ${question.answers[question.selected]}</li>
            <li>Correct answer: ${question.correct}: ${question.answers[question.correct]}</li>
        </ul>
        `;
        element.appendChild(liElement);
        }
        
    })
    return element;
}
