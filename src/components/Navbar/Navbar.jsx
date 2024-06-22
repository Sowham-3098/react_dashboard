import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
	return (
		<div className='fixed min-h-screen w-70 bg-blue-800 text-white flex flex-col justify-between left-0 top-0 shadow-lg'>
			<div>
				<div className='flex items-center justify-center h-20 bg-blue-900'>
					<h1 className='text-2xl font-bold'>Dashboard</h1>
				</div>
			
				<nav className='mt-6'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive
								? 'block py-3 px-6 bg-blue-700 text-white rounded-md mb-2'
								: 'block py-3 px-6 text-gray-200 hover:bg-blue-600 rounded-md mb-2'
						}
					>
						Home
					</NavLink>
					<NavLink
						to='/kanban'
						className={({ isActive }) =>
							isActive
								? 'block py-3 px-6 bg-blue-700 text-white rounded-md mb-2'
								: 'block py-3 px-6 text-gray-200 hover:bg-blue-600 rounded-md mb-2'
						}
					>
						Progress Tracker
					</NavLink>
					<NavLink
						to='/tables'
						className={({ isActive }) =>
							isActive
								? 'block py-3 px-6 bg-blue-700 text-white rounded-md mb-2'
								: 'block py-3 px-6 text-gray-200 hover:bg-blue-600 rounded-md mb-2'
						}
					>
						Tables
					</NavLink>
					<NavLink
						to='/charts'
						className={({ isActive }) =>
							isActive
								? 'block py-3 px-6 bg-blue-700 text-white rounded-md mb-2'
								: 'block py-3 px-6 text-gray-200 hover:bg-blue-600 rounded-md mb-2'
						}
					>
						Charts
					</NavLink>
					<NavLink
						to='/calendar'
						className={({ isActive }) =>
							isActive
								? 'block py-3 px-6 bg-blue-700 text-white rounded-md mb-2'
								: 'block py-3 px-6 text-gray-200 hover:bg-blue-600 rounded-md mb-2'
						}
					>
						Calendar
					</NavLink>
					
				</nav>
			</div>
			<div className='flex items-center justify-between h-16 bg-blue-900 px-4'>
			<FaUserCircle className='h-12 w-12 text-gray-300' />
					<div className='ml-3 mr-3'>
						<p className='text-md font-semibold'>Sowham Bhuin</p>
						<p className='text-sm text-gray-400'>Admin</p>
					</div>
				<ModeToggle />
			</div>
		</div>
	);
};

export default Navbar;
