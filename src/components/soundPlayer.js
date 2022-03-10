
const sounds = {
	correct: new Audio('../../public/assets/sounds/Bubbly_Game_Achievement_Sound.wav')
}

export const playCorrectQ =  () => {
	sounds.correct.currentTime = 0;
	sounds.correct.play();
}