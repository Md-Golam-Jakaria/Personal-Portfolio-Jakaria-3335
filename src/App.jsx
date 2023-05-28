import './App.css';
import Header from './components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import logo from './assets/logo/footerLogo.svg';
function App() {
	return (
		<div className="flex justify-center h-screen">
			<div className="py-2 pr-2 flex flex-col justify-between">
				<Link className="pl-2 logo" to="/">
					<img src={logo} alt="" />
				</Link>
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
