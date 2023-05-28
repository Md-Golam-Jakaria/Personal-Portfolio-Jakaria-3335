import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="flex justify-center h-screen">
			<div className="py-2 pr-2 flex flex-col justify-between">
				<h6 className="pl-2 text-2xl font-bold logo">Logo</h6>
				<div className="header-section">
					<Header></Header>
				</div>
			</div>
			<div className="basis-10/12 outlet-section">
				<Outlet></Outlet>
			</div>
		</div>
	);
}

export default App;
