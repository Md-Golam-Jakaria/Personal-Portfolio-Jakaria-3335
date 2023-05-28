import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import App from './App';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact,jsx/Contact';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <AboutUs />,
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/portfolio',
				element: <Portfolio />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '*',
				element: <Home />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
