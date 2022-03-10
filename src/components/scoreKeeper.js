import { getTimeFromNavbar } from "./navbar.js";
import { quizData } from "../data.js";

export const score = {
  question: 0,
  total: 3,
  finalScore: 0
}

export const scoreMultiplier = (endScore) => {
  let timeGiven = (quizData.questionsToShow * 30);
  let multiplierCalculator = Math.floor((timeGiven - getTimeFromNavbar()) / 20);
  let finalScore = endScore * multiplierCalculator;
  if (finalScore<0) {
    return 0;
  } else {
  return finalScore;
  }
};

