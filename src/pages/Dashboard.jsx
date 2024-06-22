import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ListFilter } from 'lucide-react';
import Header from '@/components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { latestOrders, topCustomers } from '@/Constants/DashboardCardData';

const lineChartData = [
    { name: 'Jan', orders: 40, revenue: 2400 },
    { name: 'Feb', orders: 30, revenue: 2210 },
    { name: 'Mar', orders: 20, revenue: 2290 },
    { name: 'Apr', orders: 27, revenue: 2000 },
    { name: 'May', orders: 18, revenue: 2181 },
    { name: 'Jun', orders: 23, revenue: 2500 },
    { name: 'Jul', orders: 34, revenue: 2100 },
];

const barChartData = [
    { name: 'Jan', customers: 400 },
    { name: 'Feb', customers: 300 },
    { name: 'Mar', customers: 200 },
    { name: 'Apr', customers: 278 },
    { name: 'May', customers: 189 },
    { name: 'Jun', customers: 239 },
    { name: 'Jul', customers: 349 },
];

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
    const [currentOrder, setCurrentOrder] = useState('Oe31b70H');

    return (
        <div className='flex min-h-screen w-full flex-col bg-blue-900 rounded-xl text-white'>
            <div className='flex flex-col gap-4'>
                <Header />
                <main className='space-y-6 p-6'>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Total Orders</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-2xl font-semibold'>1,240</p>
                            </CardContent>
                        </Card>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Total Revenue</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-2xl font-semibold'>₹50,340.00</p>
                            </CardContent>
                        </Card>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>New Customers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-2xl font-semibold'>340</p>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator />
                    <div className='mt-6'>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Monthly Sales</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width='100%' height={300}>
                                    <LineChart data={lineChartData}>
                                        <CartesianGrid strokeDasharray='3 3' stroke='#ccc' />
                                        <XAxis dataKey='name' stroke='#fff' />
                                        <YAxis stroke='#fff' />
                                        <Tooltip />
                                        <Legend />
                                        <Line type='monotone' dataKey='orders' stroke='#82ca9d' activeDot={{ r: 8 }} />
                                        <Line type='monotone' dataKey='revenue' stroke='#8884d8' />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator />
                    <div className='mt-6'>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Monthly New Customers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width='100%' height={300}>
                                    <BarChart data={barChartData}>
                                        <CartesianGrid strokeDasharray='3 3' stroke='#ccc' />
                                        <XAxis dataKey='name' stroke='#fff' />
                                        <YAxis stroke='#fff' />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey='customers' fill='#82ca9d' />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator />
                    <div className='mt-6'>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Sales Distribution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width='100%' height={300}>
                                    <PieChart>
                                        <Pie
                                            data={pieChartData}
                                            cx='50%'
                                            cy='50%'
                                            labelLine={false}
                                            outerRadius={80}
                                            fill='#8884d8'
                                            dataKey='value'
                                        >
                                            {pieChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <Card className='flex-1 bg-blue-800'>
                            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                <CardTitle className='text-lg font-medium'>Latest Orders</CardTitle>
                                <ListFilter className='h-4 w-4 text-muted-foreground' />
                            </CardHeader>
                            <CardContent>
                                <div className='space-y-4'>
                                    {latestOrders.map((order) => (
                                        <div key={order.id} className='flex items-center'>
                                            <div className='flex flex-1 flex-col text-sm'>
                                                <p className='font-medium leading-none'>{order.id}</p>
                                                <p className='text-xs text-muted-foreground'>
                                                    {order.price} • {order.time}
                                                </p>
                                            </div>
                                            <Badge variant={order.variant}>{order.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='flex-1 bg-blue-800'>
                            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                <CardTitle className='text-lg font-medium'>Top Customers</CardTitle>
                                <ListFilter className='h-4 w-4 text-muted-foreground' />
                            </CardHeader>
                            <CardContent>
                                <div className='space-y-4'>
                                    {topCustomers.map((customer) => (
                                        <div key={customer.email} className='flex items-center'>
                                            <div className='flex flex-1 flex-col text-sm'>
                                                <p className='font-medium leading-none'>{customer.name}</p>
                                                <p className='text-xs text-muted-foreground'>{customer.email}</p>
                                            </div>
                                            <Badge variant={customer.variant}>{customer.change}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <Separator />
                    <div className='mt-6'>
                        <Card className='bg-blue-800'>
                            <CardHeader>
                                <CardTitle>Order Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className='w-[100px]'>Order ID</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Customer</TableHead>
                                            <TableHead>Total</TableHead>
                                            <TableHead className='text-right'>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>#1234</TableCell>
                                            <TableCell>
                                                <Badge>New</Badge>
                                            </TableCell>
                                            <TableCell>Emily James</TableCell>
                                            <TableCell>₹29.99</TableCell>
                                            <TableCell className='text-right'>
                                                <Button variant='outline' size='sm'>
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>#1233</TableCell>
                                            <TableCell>
                                                <Badge variant='outline'>Processing</Badge>
                                            </TableCell>
                                            <TableCell>Michael Brown</TableCell>
                                            <TableCell>₹89
											<Button variant='outline' size='sm'>
    View
</Button>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>{currentOrder}</TableCell>
                                            <TableCell>
                                                <Badge variant='destructive'>Failed</Badge>
                                            </TableCell>
                                            <TableCell>Sarah Parker</TableCell>
                                            <TableCell>₹49.99</TableCell>
                                            <TableCell className='text-right'>
                                                <Button variant='outline' size='sm'>
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
