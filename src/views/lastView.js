'use strict';

import { RETURN_HOME_BUTTON_ID } from '../constants.js';
import { quizData } from "../data.js";

export const createLastElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button class="btn-primary" id="${RETURN_HOME_BUTTON_ID}">return</button>
    `;
  return element;
};

/**
 * Create an accordion element
 * @returns {Element}
 */
export const createAccordionToggle = () => {
  const parent = document.createElement('div');
  const element = document.createElement('h3');

  parent.classList.add("qalist-wrapper");
  element.textContent = `Show a summary of question:`;
  parent.appendChild(element);
  return parent;
}

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
        <h3 class="qa-question">Q: ${question.text}</h3>
        <ul>
            <li class="qa-answer">A: ${question.answers[question.correct]}</li>
        </ul>
        <br>
        `;
        element.appendChild(liElement);           
      }     
    })
    return element;
}