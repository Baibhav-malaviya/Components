import Row from "./Components/Row";

function App() {
	return (
		<div className="w-screen h-screen px-2 pt-10 space-x-2 space-y-2 text-center bg-stone-700 text-stone-50">
<<<<<<< HEAD
			<Row navbar={true} hover={false} bgColor="bg-yellow-500">
				<Row
					width="w-auto"
					bgColor="bg-slate-800"
					color="text-stone-100 font-semibold space-x-10"
					tailwindClasses="rounded"
					hover={true}
				>
=======
			<Row hover={false}>
				<Row width="w-auto" bgColor="bg-slate-800 rounded" hover={true}>
>>>>>>> c98070e448907ec2aba9539541110a0b9547b3b5
					<div>Child1</div>
					<div>Child2</div>
				</Row>
				<Row hover={false} tailwindClasses="space-x-5 rounded-2xl">
					<li className="px-2 list-none">First</li>
					<li className="px-2 list-none">Second</li>
					<li className="px-2 list-none">Third</li>
				</Row>
			</Row>
		</div>
	);
}

export default App;
