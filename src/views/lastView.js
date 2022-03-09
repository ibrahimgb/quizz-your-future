'use strict';

import { RETURN_HOME_BUTTON_ID } from '../constants.js';
import { quizData } from "../data.js";

export const createLastElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button id="${RETURN_HOME_BUTTON_ID}">return</button>
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
        
        liElement.innerHTML = String.raw`
        <h3>Q: ${question.text}</h3>
        <ul>
            <li>A: ${question.answers[question.correct]}</li>
        </ul>
        <br>
        `;
        element.appendChild(liElement);
            
    })
    return element;
}