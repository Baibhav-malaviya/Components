import Column from "./Components/Column";
import Row from "./Components/Row";

function App() {
	return (
		<div className="w-screen h-screen px-2 pt-10 space-x-2 space-y-2 text-center bg-stone-700 text-stone-50">
			<Column
				bgColor="bg-green-500"
				tailwindClasses="rounded shadow-md shadow-yellow-500 font-semibold"
				hover={false}
			>
				<Row>First</Row>
				<Row>Second</Row>
			</Column>
		</div>
	);
}

export default App;
