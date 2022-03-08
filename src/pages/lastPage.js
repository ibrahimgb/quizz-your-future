'use strict';
import {
	USER_INTERFACE_ID,
  } from '../constants.js';
import { questionAndAnswerList } from '../views/lastView.js';

export const initLastPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  
  const qaList = questionAndAnswerList();
  userInterface.appendChild(qaList);
};