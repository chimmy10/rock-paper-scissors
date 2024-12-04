import Content from "./Content";
import Rules from "./Rules";
import RulesContent from "./RulesContent";
import Top from "./Top";
import ContentPicked from "./ContentPicked";
import Results from "./Results";
import { useSelector } from "react-redux";

function App() {
	const rules = useSelector((state) => state.game.rules);
	const next = useSelector((state) => state.game.next);
	const statement = useSelector((state) => state.game.statement);

	return (
		<div className="relative flex flex-col min-h-screen p-5 overflow-auto bg-blue-950">
			<div>
				<Top />
			</div>

			<div
				className={`flex-grow mx-auto my-20 lg:w-full lg:max-w-xl ${
					next ? "sm:mx-0 lg:mx-auto lg:w-full lg:max-w-6xl" : ""
				}`}
			>
				{!next ? <Content /> : <ContentPicked />}

				{statement && (
					<div className="lg:hidden">
						<Results />
					</div>
				)}
			</div>

			<div className="text-center md:text-right">
				<Rules />
			</div>

			{rules && (
				<div className="absolute inset-0 flex items-center justify-center bg-black/50">
					<RulesContent />
				</div>
			)}
		</div>
	);
}

export default App;
