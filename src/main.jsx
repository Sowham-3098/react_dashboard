import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Tables from './pages/Tables.jsx';
import Charts from './pages/Charts.jsx';
import Calender from './pages/Calender.jsx';
import Kanban from './pages/Kanban.jsx';

const router = createBrowserRouter(
	createRoutesFromElements([
		<Route
			path='/'
			element={<App />}
		>
			<Route
				path='/'
				element={<Dashboard />}
			/>
			<Route
				path='/kanban'
				element={<Kanban />}
			/>
			<Route
				path='/Tables'
				element={<Tables />}
			/>
			<Route
				path='/charts'
				element={<Charts />}
			/>
			<Route
			   path='/calendar'
                element={<Calender />}
			/>
		</Route>,
	])
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);