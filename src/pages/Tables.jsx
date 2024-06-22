import React, { useState } from 'react';

const TablesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('orders');

  // Sample data for different categories
  const categoriesData = {
	orders: [
		{ id: 1, customer: 'John Doe', product: 'Laptop', quantity: 2, total: '$2000', date: '2023-05-10', status: 'pending' },
		{ id: 2, customer: 'Jane Smith', product: 'Smartphone', quantity: 1, total: '$800', date: '2023-05-12', status: 'active' },
		{ id: 3, customer: 'Mike Johnson', product: 'Tablet', quantity: 3, total: '$1200', date: '2023-05-15', status: 'active' },
		{ id: 4, customer: 'Emily Brown', product: 'Monitor', quantity: 1, total: '$600', date: '2023-05-18', status: 'completed' },
		{ id: 5, customer: 'Chris Davis', product: 'Keyboard', quantity: 2, total: '$200', date: '2023-05-20', status: 'pending' },
		{ id: 6, customer: 'Sarah White', product: 'Mouse', quantity: 1, total: '$50', date: '2023-05-22', status: 'active' },
		{ id: 7, customer: 'Alex Green', product: 'Printer', quantity: 1, total: '$300', date: '2023-05-25', status: 'pending' },
		{ id: 8, customer: 'Grace Wilson', product: 'Headphones', quantity: 2, total: '$400', date: '2023-05-28', status: 'completed' },
		{ id: 9, customer: 'Olivia Taylor', product: 'Camera', quantity: 1, total: '$900', date: '2023-05-30', status: 'completed' },
		{ id: 10, customer: 'Ethan Martinez', product: 'Smartwatch', quantity: 1, total: '$350', date: '2023-06-01', status: 'pending' },
	  
	  ],
	  sales: [
		{ id: 1, customer: 'Alice Brown', product: 'Tablet', quantity: 3, total: '$1500', date: '2023-05-10' },
		{ id: 2, customer: 'Bob Green', product: 'Headphones', quantity: 2, total: '$300', date: '2023-05-12' },
		{ id: 3, customer: 'Sophia Lee', product: 'Smartphone', quantity: 1, total: '$800', date: '2023-05-15' },
		{ id: 4, customer: 'William Clark', product: 'Laptop', quantity: 2, total: '$2000', date: '2023-05-18' },
		{ id: 5, customer: 'Zoe Hall', product: 'Keyboard', quantity: 2, total: '$200', date: '2023-05-20' },
		{ id: 6, customer: 'Lucas Turner', product: 'Mouse', quantity: 1, total: '$50', date: '2023-05-22' },
		{ id: 7, customer: 'Ava Hill', product: 'Monitor', quantity: 1, total: '$600', date: '2023-05-25' },
		{ id: 8, customer: 'Jack Scott', product: 'Printer', quantity: 1, total: '$300', date: '2023-05-28' },
		{ id: 9, customer: 'Lily Reed', product: 'Camera', quantity: 1, total: '$900', date: '2023-05-30' },
		{ id: 10, customer: 'Noah Baker', product: 'Smartwatch', quantity: 1, total: '$350', date: '2023-06-01' },
	  ],
	  customers: [
		{ id: 1, name: 'Emily Johnson', email: 'emily@example.com', phone: '123-456-7890', city: 'New York', country: 'USA' },
		{ id: 2, name: 'Michael Davis', email: 'michael@example.com', phone: '987-654-3210', city: 'Los Angeles', country: 'USA' },
		{ id: 3, name: 'Sophie Wilson', email: 'sophie@example.com', phone: '456-789-0123', city: 'London', country: 'UK' },
		{ id: 4, name: 'Daniel Brown', email: 'daniel@example.com', phone: '321-654-9870', city: 'Toronto', country: 'Canada' },
		{ id: 5, name: 'Emma Miller', email: 'emma@example.com', phone: '789-012-3456', city: 'Berlin', country: 'Germany' },
		{ id: 6, name: 'Matthew Harris', email: 'matthew@example.com', phone: '234-567-8901', city: 'Sydney', country: 'Australia' },
		{ id: 7, name: 'Olivia Martinez', email: 'olivia@example.com', phone: '567-890-1234', city: 'Paris', country: 'France' },
		{ id: 8, name: 'Lucas Robinson', email: 'lucas@example.com', phone: '890-123-4567', city: 'Tokyo', country: 'Japan' },
		{ id: 9, name: 'Chloe Allen', email: 'chloe@example.com', phone: '123-456-7890', city: 'Rome', country: 'Italy' },
		{ id: 10, name: 'Isabella Scott', email: 'isabella@example.com', phone: '456-789-0123', city: 'Moscow', country: 'Russia' },
	  ],
	};

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <div className='max-w-4xl p-8 bg-gray-800 rounded shadow-md w-full'>
        <h1 className='text-2xl font-bold mb-4'>Tabular Overview</h1>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <label htmlFor='category' className='mr-2 font-medium'>
              Select Category:
            </label>
            <select
              id='category'
              className='p-2 border border-gray-700 rounded bg-gray-700 text-white'
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value='orders'>Orders</option>
              <option value='sales'>Sales</option>
              <option value='customers'>Customers</option>
            </select>
          </div>
          <div className='flex gap-4'>
            <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded'>
              Add
            </button>
            <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded'>
              Export Sheet
            </button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-gray-800'>
            <thead>
              <tr className='bg-gray-700'>
                {selectedCategory === 'orders' && (
                  <>
                     <th className='border px-4 py-2'>ID</th>
                    <th className='border px-4 py-2'>Customer</th>
                    <th className='border px-4 py-2'>Product</th>
                    <th className='border px-4 py-2'>Quantity</th>
                    <th className='border px-4 py-2'>Total</th>
                    <th className='border px-4 py-2'>Date</th>
                    <th className='border px-4 py-2'>Status</th>
                  </>
                )}
                {selectedCategory === 'sales' && (
                  <>
                    <th className='border px-4 py-2'>ID</th>
                    <th className='border px-4 py-2'>Customer</th>
                    <th className='border px-4 py-2'>Product</th>
                    <th className='border px-4 py-2'>Quantity</th>
                    <th className='border px-4 py-2'>Total</th>
                    <th className='border px-4 py-2'>Date</th>
                  </>
                )}
                {selectedCategory === 'customers' && (
                  <>
                    <th className='border px-4 py-2'>ID</th>
                    <th className='border px-4 py-2'>Name</th>
                    <th className='border px-4 py-2'>Email</th>
                    <th className='border px-4 py-2'>Phone</th>
                    <th className='border px-4 py-2'>City</th>
                    <th className='border px-4 py-2'>Country</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {categoriesData[selectedCategory].map((item) => (
                <tr key={item.id} className='bg-gray-600'>
                  {selectedCategory === 'orders' && (
                    <>
                      <td className='border px-4 py-2'>{item.id}</td>
                      <td className='border px-4 py-2'>{item.customer}</td>
                      <td className='border px-4 py-2'>{item.product}</td>
                      <td className='border px-4 py-2'>{item.quantity}</td>
                      <td className='border px-4 py-2'>{item.total}</td>
                      <td className='border px-4 py-2'>{item.date}</td>
					  <td className='border px-4 py-2'>{item.status}</td>
                    </>
                  )}
                  {selectedCategory === 'sales' && (
                    <>
                      <td className='border px-4 py-2'>{item.id}</td>
                      <td className='border px-4 py-2'>{item.customer}</td>
                      <td className='border px-4 py-2'>{item.product}</td>
                      <td className='border px-4 py-2'>{item.quantity}</td>
                      <td className='border px-4 py-2'>{item.total}</td>
                      <td className='border px-4 py-2'>{item.date}</td>
                    </>
                  )}
                  {selectedCategory === 'customers' && (
                    <>
                      <td className='border px-4 py-2'>{item.id}</td>
                      <td className='border px-4 py-2'>{item.name}</td>
                      <td className='border px-4 py-2'>{item.email}</td>
                      <td className='border px-4 py-2'>{item.phone}</td>
                      <td className='border px-4 py-2'>{item.city}</td>
                      <td className='border px-4 py-2'>{item.country}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;
