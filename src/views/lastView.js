'use strict';

import { quizData } from "../data.js";

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
