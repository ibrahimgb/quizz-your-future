'use strict';

import { navFinalScore } from '../components/navbar.js';
import { scoreMultiplier } from '../components/scoreKeeper.js';
import { RETURN_HOME_BUTTON_ID } from '../constants.js';
import { quizData } from "../data.js";


export const createLastElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button class="btn-primary" id="${RETURN_HOME_BUTTON_ID}">return</button>
    `;
  return element;
};

export const createScoreElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h4>Your Score is: ${scoreMultiplier(navFinalScore)}</h4>
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
        <ul class="q-list-ending">
            <li class="qa-answer">A: ${question.answers[question.correct]}</li>
        </ul>
        <br>
        `;
        element.appendChild(liElement);           
      }     
    })
    return element;
}

export const createFooter = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <footer>
      <p>
      This project was actualized by the 'Quiz Your Future' team.<br>
      <a target="_blank" href="https://github.com/cometbroom">Ali</a>, <a target="_blank" href="https://github.com/slymny">Suleyman</a> and <a target="_blank" href="https://github.com/EdwardAbboud">Edward</a>.
      </p>
    </footer>
  `;
  return element;
};