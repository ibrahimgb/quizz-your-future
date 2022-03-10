'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer-options')
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  

  return element;
};