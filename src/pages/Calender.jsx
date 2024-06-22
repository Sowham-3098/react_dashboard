import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function CalendarDashboard() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(2024, 5, 14, 10, 0),
      end: new Date(2024, 5, 14, 12, 0),
    },
    {
      id: 2,
      title: 'Project Deadline',
      start: new Date(2024, 5, 30, 23, 59),
      end: new Date(2024, 5, 30, 23, 59),
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([
        ...events,
        {
          id: events.length + 1,
          title,
          start,
          end,
        },
      ]);
    }
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: '#3174ad', // vibrant blue background color
      color: 'white', // white text color
      borderRadius: '5px',
      border: 'none',
    };

    return {
      style,
    };
  };

  return (
    <div className='flex flex-col h-screen'>
      {/* Header */}
      <header className='sticky top-0 z-30 flex items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
        <h1 className='text-3xl font-bold mb-2'>Calendar</h1>
      </header>

      {/* Main Content */}
      <div className='p-6'>
        {/* Today's Events */}
        <section className='mb-6'>
          <Card>
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render today's events dynamically */}
                {/* Replace with actual today's events if needed */}
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Meeting with Team</h3>
                  <p className='text-gray-500'>10:00 AM - 12:00 PM</p>
                </li>
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Lunch with Clients</h3>
                  <p className='text-gray-500'>12:30 PM - 01:30 PM</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming, Past Events, Next Event */}
        <div className='flex flex-wrap sm:flex-row justify-center items-start gap-10'>
          {/* Upcoming Events */}
          <Card className='w-80'>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render upcoming events dynamically */}
                {/* Replace with actual upcoming events if needed */}
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Team Building Activity</h3>
                  <p className='text-gray-500'>June 20, 2024 - 02:00 PM</p>
                </li>
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Project Deadline</h3>
                  <p className='text-gray-500'>June 30, 2024 - 11:59 PM</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Past Events */}
          <Card className='w-80'>
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render past events dynamically */}
                {/* Replace with actual past events if needed */}
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Annual Meeting</h3>
                  <p className='text-gray-500'>May 5, 2024 - 01:00 PM</p>
                </li>
                <li className='mb-3'>
                  <h3 className='text-lg font-semibold'>Code Review Session</h3>
                  <p className='text-gray-500'>May 10, 2024 - 11:00 AM</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Next Event */}
          <Card className='w-80'>
            <CardHeader>
              <CardTitle>Next Event</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className='text-lg font-semibold'>Direction Setting Meeting</h3>
              <p className='text-gray-500'>July 9, 2024 - 07:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Add New Task */}
        <section className='mb-6'>
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>Task Name</label>
                  <Input
                    type='text'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    placeholder='Enter task name'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>Date</label>
                  <Input
                    type='date'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='mb-4 flex items-center justify-center'>
                  <Button onClick={(e) => e.preventDefault()} variant='default'>
                    Add Task
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Large Calendar with Tasks */}
        <section className='mb-6'>
          <Card>
            <CardHeader>
              <CardTitle>Task Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='w-full h-[500px] bg-white rounded-md shadow-md'>
                {/* Large Calendar */}
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: '100%' }}
                  onSelectSlot={handleSelect}
                  eventPropGetter={eventStyleGetter}
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default CalendarDashboard;
