import { CURRENT_QUESTION_DISPLAY_ID, HIGH_SCORE_DISPLAY_ID, INFO_UI_ID, TIMER_DISPLAY_ID } from "../constants.js";
import { quizData } from "../data.js";

const infoUI = document.getElementById(INFO_UI_ID);
const timerDisplay = infoUI.querySelector(`#${TIMER_DISPLAY_ID}`);
const questionDisplay = infoUI.querySelector(`#${CURRENT_QUESTION_DISPLAY_ID}`);
const scoreDisplay = infoUI.querySelector(`#${HIGH_SCORE_DISPLAY_ID}`);

//Counter that take our timer's setInterval() method.
let timerCounter;

/**
 * Initialize the top bar info elements.
 * @returns {void}
 */
export const initInfoUI = () => {
	//Make the initial content with forEach loop
	//Question upperlimit according to data
	const initContent = [0, `1/${quizData.questions.length}`, '00:00'];

	initContent.forEach((item, idx) => {
		//Child 0, 1, 2 always have to be the same for this to work
		infoUI.children[idx].textContent = item;
	})
	//Make our second and mins variables
	let [seconds, mins] = [0, 0];

	//Interval that will count the time and update its display
	timerCounter = setInterval(() => {

		//Add seconds or minutes according to clock standard
		seconds < 59 ? seconds++: (mins++, seconds = 0);
		timerDisplay.textContent = `
		${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
		`;
	}, 1000);
}

/**
 * Register the current question's index on the UI display
 * @returns {void}
 */
export const nextQuestionRegister = () => {
	//Get the 2 question numbers x/y from text content and parse them.
	let qNumbers = questionDisplay.textContent.split('/').map(x => {
		return parseInt(x, 10);
	});

	//Add the left side of forward slash
	qNumbers[0]++;
	questionDisplay.textContent = `${qNumbers[0]}/${qNumbers[1]}`;

}

/**
 * Add to the user's score
 * @param {number} amount - Amount to add by.
 * @returns {void}
 */
 export const addToCurrentScore = (amount) => {
	let scoreNumber = parseInt(scoreDisplay.textContent, 10);

	scoreNumber += amount;
	scoreDisplay.textContent = scoreNumber;
}

/**
 * Remove our UI infos and clear intervals.
 * @returns {void}
 */
export const removeUIInfos = () => {
	timerDisplay.textContent = '';
	questionDisplay.textContent = '';
	clearIntervals();
}

/**
 * Clear the set intervals for the navbar component.
 * @returns {void}
 */
export const clearIntervals = () => {
	clearInterval(timerCounter);
}

