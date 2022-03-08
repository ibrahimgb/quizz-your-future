'use strict';

import { RETURN_HOME_BUTTON_ID } from '../constants.js';

export const createLastElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <button id="${RETURN_HOME_BUTTON_ID}">return</button>
  `;
  return element;
};
