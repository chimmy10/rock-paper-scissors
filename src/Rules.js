import { useDispatch } from "react-redux";
import { ruleClick } from "./GameSlice";

function Rules() {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => dispatch(ruleClick())}
				className="py-2 text-lg font-medium tracking-wide text-white transition-all duration-300 ease-in-out transform bg-transparent border-2 border-white rounded-lg px-9 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				RULES
			</button>
		</div>
	);
}

export default Rules;
