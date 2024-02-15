import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
	return (
		<div className="w-screen h-screen px-2 pt-10 space-x-2 space-y-2 text-center bg-stone-700 text-stone-50">
			<div className="p-2 bg-cyan-200">
				<Input
					label="Input: "
					color="text-stone-300"
					placeholder="Enter your input... "
					bgColor="bg-[#212121]"
				/>
			</div>
			<Button>Click Me</Button>
			<Button bgColor="bg-green-500">Click Me</Button>
			<Button width="w-full" bgColor="bg-yellow-500" color="text-white">
				Full Button
			</Button>
		</div>
	);
}

export default App;
