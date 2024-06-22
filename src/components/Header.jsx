import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, UserCircle, Settings, LogOut } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
	return (
		<header className="sticky top-0 z-30 flex items-center justify-between gap-4 p-4 bg-gray-800 text-white shadow-lg rounded-lg">
			<div className="flex items-center space-x-4">
				<h1 className="text-lg font-bold">Dashboard Overview</h1>
				
			</div>
			<div className="flex items-center space-x-4">
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
					<Input
						type="search"
						placeholder="Search..."
						className="pl-10 pr-4 py-2 bg-gray-700 rounded-full text-white placeholder-gray-400"
					/>
				</div>
				<Button variant="outline" size="icon" className="relative">
					<Bell className="w-6 h-6 text-white" />
					<span className="absolute top-0 right-0 block h-2 w-2 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></span>
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" className="overflow-hidden rounded-full">
							<FaRegUserCircle className="h-8 w-8 text-white" />
							<span className="sr-only">Open user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>
							<UserCircle className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Logout</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};

export default Header;
