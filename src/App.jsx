import Row from "./Components/Row";

function App() {
	return (
		<div className="w-screen h-screen px-2 pt-10 space-x-2 space-y-2 text-center bg-stone-700 text-stone-50">
			<Row hover={false}>
				<Row width="w-auto" bgColor="bg-slate-800 rounded" hover={true}>
					<div>Child1</div>
					<div>Child2</div>
				</Row>
				<div>Child3</div>
			</Row>
		</div>
	);
}

export default App;
