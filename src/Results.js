import { useDispatch, useSelector } from "react-redux";
import { reset } from "./GameSlice";

function Results() {
	const dispatch = useDispatch();
	const statement = useSelector((state) => state.game.statement);

	return (
		<div className="mt-20 text-center">
			<p className="text-[40px] font-extrabold text-white shadow-sm mb-4">
				{statement}
			</p>
			<button
				onClick={() => dispatch(reset())}
				className="transition-all duration-300 ease-in-out transform hover:text-red-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mx-auto tracking-[2px] text-blue-900 font-medium px-16 py-3 bg-white rounded-lg"
			>
				PLAY AGAIN
			</button>
		</div>
	);
}

export default Results;
