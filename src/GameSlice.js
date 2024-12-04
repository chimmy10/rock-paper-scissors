import { createSlice } from "@reduxjs/toolkit";

const getRandomWord = () => {
	const words = ["rock", "paper", "scissors"];
	return words[Math.floor(Math.random() * words.length)];
};

const initialState = {
	rules: false,
	pick: "",
	next: false,
	compPick: getRandomWord(),
	statement: "",
	score: 0,
};

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		ruleClick(state) {
			state.rules = !state.rules;
		},
		picked(state, action) {
			state.pick = action.payload;
			state.next = true;
			if (state.pick === state.compPick) {
				state.statement = "A DRAW"; // Both picks are the same
			} else if (
				(state.pick === "rock" && state.compPick === "scissors") ||
				(state.pick === "scissors" && state.compPick === "paper") ||
				(state.pick === "paper" && state.compPick === "rock")
			) {
				state.statement = "YOU WIN"; // Player wins
				state.score += 1;
			} else {
				state.statement = "YOU LOSE"; // Computer wins
				state.score = state.score === 0 ? state.score : (state.score -= 1);
			}
		},
		reset(state) {
			state.rules = false;
			state.pick = "";
			state.next = false;
			state.compPick = getRandomWord();
			state.statement = "";
		},
	},
});

export const { ruleClick, picked, reset } = gameSlice.actions;

export default gameSlice.reducer;
