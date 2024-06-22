import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { SlGraph } from 'react-icons/sl';
import { FaChartPie, FaChartLine } from 'react-icons/fa';
import { IoBarChartSharp, IoStatsChartSharp } from 'react-icons/io5';

function Charts() {
	const lineChartRef = useRef(null);
	const pieChartRef = useRef(null);
	const barChartRef = useRef(null);
	const doughnutChartRef = useRef(null);
	const radarChartRef = useRef(null);

	useEffect(() => {
		const createLineChart = () => {
			if (lineChartRef.current) {
				if (lineChartRef.current.chartInstance) {
					lineChartRef.current.chartInstance.destroy();
				}

				lineChartRef.current.chartInstance = new Chart(lineChartRef.current, {
					type: 'line',
					data: {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
						],
						datasets: [
							{
								label: 'Sales',
								data: [65, 59, 80, 81, 56, 55, 40],
								fill: false,
								borderColor: 'rgb(75, 192, 192)',
								tension: 0.1,
							},
						],
					},
					options: {
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					},
				});
			}
		};

		const createPieChart = () => {
			if (pieChartRef.current) {
				if (pieChartRef.current.chartInstance) {
					pieChartRef.current.chartInstance.destroy();
				}

				pieChartRef.current.chartInstance = new Chart(pieChartRef.current, {
					type: 'pie',
					data: {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
							'August',
							'September',
						],
						datasets: [
							{
								label: '# of Votes',
								data: [10, 20, 15, 25, 35, 30, 20, 10, 15],
								backgroundColor: [
									'red',
									'blue',
									'yellow',
									'green',
									'purple',
									'orange',
									'pink',
									'brown',
									'gray',
								],
							},
						],
					},
				});
			}
		};

		const createBarChart = () => {
			if (barChartRef.current) {
				if (barChartRef.current.chartInstance) {
					barChartRef.current.chartInstance.destroy();
				}

				barChartRef.current.chartInstance = new Chart(barChartRef.current, {
					type: 'bar',
					data: {
						labels: [
							'January',
							'February',
							'March',
							'April',
							'May',
							'June',
							'July',
						],
						datasets: [
							{
								label: '# of Votes',
								data: [12, 19, 3, 5, 2, 3, 7],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)',
									'rgba(255, 99, 132, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
								],
								borderWidth: 1,
							},
						],
					},
					options: {
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					},
				});
			}
		};

		const createDoughnutChart = () => {
			if (doughnutChartRef.current) {
				if (doughnutChartRef.current.chartInstance) {
					doughnutChartRef.current.chartInstance.destroy();
				}

				doughnutChartRef.current.chartInstance = new Chart(doughnutChartRef.current, {
					type: 'doughnut',
					data: {
						labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
						datasets: [
							{
								label: '# of Votes',
								data: [12, 19, 3, 5, 2, 3],
								backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
									'rgba(255, 206, 86, 0.2)',
									'rgba(75, 192, 192, 0.2)',
									'rgba(153, 102, 255, 0.2)',
									'rgba(255, 159, 64, 0.2)',
								],
								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
								],
								borderWidth: 1,
							},
						],
					},
					options: {
						cutout: '70%',
					},
				});
			}
		};

		const createRadarChart = () => {
			if (radarChartRef.current) {
				if (radarChartRef.current.chartInstance) {
					radarChartRef.current.chartInstance.destroy();
				}

				radarChartRef.current.chartInstance = new Chart(radarChartRef.current, {
					type: 'radar',
					data: {
						labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
						datasets: [
							{
								label: 'My First Dataset',
								data: [65, 59, 90, 81, 56, 55, 40],
								fill: true,
								backgroundColor: 'rgba(255, 99, 132, 0.2)',
								borderColor: 'rgb(255, 99, 132)',
								pointBackgroundColor: 'rgb(255, 99, 132)',
								pointBorderColor: '#fff',
								pointHoverBackgroundColor: '#fff',
								pointHoverBorderColor: 'rgb(255, 99, 132)'
							},
							{
								label: 'My Second Dataset',
								data: [28, 48, 40, 19, 96, 27, 100],
								fill: true,
								backgroundColor: 'rgba(54, 162, 235, 0.2)',
								borderColor: 'rgb(54, 162, 235)',
								pointBackgroundColor: 'rgb(54, 162, 235)',
								pointBorderColor: '#fff',
								pointHoverBackgroundColor: '#fff',
								pointHoverBorderColor: 'rgb(54, 162, 235)'
							}
						],
					},
					options: {
						elements: {
							line: {
								borderWidth: 3,
							},
						},
					},
				});
			}
		};

		createLineChart();
		createPieChart();
		createBarChart();
		createDoughnutChart();
		createRadarChart();

		return () => {
			if (lineChartRef.current && lineChartRef.current.chartInstance) {
				lineChartRef.current.chartInstance.destroy();
			}
			if (pieChartRef.current && pieChartRef.current.chartInstance) {
				pieChartRef.current.chartInstance.destroy();
			}
			if (barChartRef.current && barChartRef.current.chartInstance) {
				barChartRef.current.chartInstance.destroy();
			}
			if (doughnutChartRef.current && doughnutChartRef.current.chartInstance) {
				doughnutChartRef.current.chartInstance.destroy();
			}
			if (radarChartRef.current && radarChartRef.current.chartInstance) {
				radarChartRef.current.chartInstance.destroy();
			}
		};
	}, []);

	return (
		<div className='flex flex-col gap-4'>
			<header className='sticky top-0 z-30 flex items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
				<Breadcrumb className='hidden md:flex'>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link to='#'>Dashboard</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link to='#'>charts</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			
			</header>
			<div className='p-6'>
				{/* Page Header */}
				<header className='mb-6'>
					<h1 className='text-3xl font-bold mb-2'>Charts</h1>
					<p className='text-gray-600'>
						Overview of various data visualizations
					</p>
				</header>

				{/* Filter Section */}
				<section className='mb-6'>
					<div className='flex items-center space-x-4'>
						<div>
							<Select>
								<SelectTrigger className='w-[180px]'>
									<SelectValue placeholder='Date Range' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Date Range</SelectLabel>
										<SelectItem value='7-days'>Last 7 days</SelectItem>
										<SelectItem value='30-days'>Last 30 days</SelectItem>
										<SelectItem value='90-days'>Last 90 days</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				</section>

				{/* Summary Statistics */}
				<section className='mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					<Card className='w-full'>
						<CardHeader>
							<CardTitle>Total Sales</CardTitle>
						</CardHeader>
						<CardContent>$12,345</CardContent>
					</Card>

					<Card className='w-full'>
						<CardHeader>
							<CardTitle>New Users</CardTitle>
						</CardHeader>
						<CardContent>1,234</CardContent>
					</Card>

				</section>

				{/* Charts Section */}
				<main className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					<Card className='shadow-lg rounded-lg overflow-hidden'>
						<CardHeader className='bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-between p-4'>
							<div>
								<CardTitle className='text-xl font-semibold'>
									Line Chart
								</CardTitle>
								<p className='text-sm text-gray-200'>Trends over time</p>
							</div>
							<SlGraph />
						</CardHeader>
						<CardContent className='p-4'>
							<canvas ref={lineChartRef}></canvas>
						</CardContent>
					</Card>
					<Card className='shadow-lg rounded-lg overflow-hidden'>
						<CardHeader className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-between p-4'>
							<div>
								<CardTitle className='text-xl font-semibold'>
									Radar Chart
								</CardTitle>
								<p className='text-sm text-gray-200'>Skill analysis</p>
							</div>
							<FaChartLine />
						</CardHeader>
						<CardContent className='p-4'>
							<canvas ref={radarChartRef}></canvas>
						</CardContent>
					</Card>
					<Card className='shadow-lg rounded-lg overflow-hidden'>
						<CardHeader className='bg-gradient-to-r from-green-500 to-teal-600 text-white flex items-center justify-between p-4'>
							<div>
								<CardTitle className='text-xl font-semibold'>
									Bar Chart
								</CardTitle>
								<p className='text-sm text-gray-200'>Comparative analysis</p>
							</div>

							<IoBarChartSharp />
						</CardHeader>
						<CardContent className='p-4'>
							<canvas ref={barChartRef}></canvas>
						</CardContent>
					</Card>

					<Card className='shadow-lg rounded-lg overflow-hidden'>
						<CardHeader className='bg-gradient-to-r from-red-500 to-pink-600 text-white flex items-center justify-between p-4'>
							<div>
								<CardTitle className='text-xl font-semibold'>
									Pie Chart
								</CardTitle>
								<p className='text-sm text-gray-200'>Proportional data</p>
							</div>
							<FaChartPie />
						</CardHeader>
						<CardContent className='flex items-center justify-center h-96 p-4'>
							<canvas ref={pieChartRef}></canvas>
						</CardContent>
					</Card>

					<Card className='shadow-lg rounded-lg overflow-hidden'>
						<CardHeader className='bg-gradient-to-r from-yellow-500 to-orange-600 text-white flex items-center justify-between p-4'>
							<div>
								<CardTitle className='text-xl font-semibold'>
									Doughnut Chart
								</CardTitle>
								<p className='text-sm text-gray-200'>Percentage data</p>
							</div>
							<IoStatsChartSharp />
						</CardHeader>
						<CardContent className='p-4'>
							<canvas ref={doughnutChartRef}></canvas>
						</CardContent>
					</Card>

					
				</main>
			</div>
		</div>
	);
}

export default Charts;
