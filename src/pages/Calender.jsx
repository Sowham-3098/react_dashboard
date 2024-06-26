import React, { useState, useEffect } from 'react';
import { useTheme } from '@/components/theme-provider';
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
  const { theme } = useTheme();

  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('calendar_events');
    return savedEvents ? JSON.parse(savedEvents) : [
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
    ];
  });

  useEffect(() => {
    localStorage.setItem('calendar_events', JSON.stringify(events));
  }, [events]);

  const handleSelect = ({ start, end }) => {
    const title = prompt('New Event name');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.elements['taskName'].value;
    const date = form.elements['taskDate'].value;
    const time = form.elements['taskTime'].value;

    if (title && date && time) {
      const dateTime = moment(`${date} ${time}`, 'YYYY-MM-DD HH:mm').toDate();
      const newEvent = {
        id: events.length + 1,
        title,
        start: dateTime,
        end: dateTime, // For simplicity, assuming tasks are single-point in time
      };
      setEvents([...events, newEvent]);
      form.reset();
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
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* Header */}
      <header className={`sticky top-0 z-30 flex items-center gap-4 border-b ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-background'} px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6`}>
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Calendar</h1>
      </header>

      {/* Main Content */}
      <div className={`p-6 ${theme === 'dark' ? 'dark-theme' : ''}`}>
        {/* Today's Events */}
        <section className='mb-6'>
          <Card className={`${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Today\'s Events (Dark)' : 'Today\'s Events'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render today's events dynamically */}
                {events
                  .filter(
                    (event) =>
                      moment(event.start).isSame(moment(), 'day') &&
                      moment(event.start).isSame(moment(), 'month') &&
                      moment(event.start).isSame(moment(), 'year')
                  )
                  .map((event) => (
                    <li key={event.id} className='mb-3'>
                      <h3 className='text-lg font-semibold'>{event.title}</h3>
                      <p className='text-gray-500'>
                        {moment(event.start).format('hh:mm A')} -{' '}
                        {moment(event.end).format('hh:mm A')}
                      </p>
                      <Button
                        onClick={() => handleDeleteEvent(event.id)}
                        variant='danger'
                        className='mt-2'
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Upcoming, Past Events, Next Event */}
        <div className='flex flex-wrap sm:flex-row justify-center items-start gap-10'>
          {/* Upcoming Events */}
          <Card className={`w-80 ${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Upcoming Events (Dark)' : 'Upcoming Events'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render upcoming events dynamically */}
                {events
                  .filter((event) => moment(event.start).isAfter(moment()))
                  .map((event) => (
                    <li key={event.id} className='mb-3'>
                      <h3 className='text-lg font-semibold'>{event.title}</h3>
                      <p className='text-gray-500'>
                        {moment(event.start).format('MMMM DD, YYYY - hh:mm A')}
                      </p>
                      <Button
                        onClick={() => handleDeleteEvent(event.id)}
                        variant='danger'
                        className='mt-2'
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>

          {/* Past Events */}
          <Card className={`w-80 ${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Past Events (Dark)' : 'Past Events'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {/* Render past events dynamically */}
                {events
                  .filter((event) => moment(event.end).isBefore(moment()))
                  .map((event) => (
                    <li key={event.id} className='mb-3'>
                      <h3 className='text-lg font-semibold'>{event.title}</h3>
                      <p className='text-gray-500'>
                        {moment(event.start).format('MMMM DD, YYYY - hh:mm A')}
                      </p>
                      <Button
                        onClick={() => handleDeleteEvent(event.id)}
                        variant='danger'
                        className='mt-2'
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>

          {/* Next Event */}
          <Card className={`w-80 ${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Next Event (Dark)' : 'Next Event'}</CardTitle>
            </CardHeader>
            <CardContent>
              {events
                .filter((event) => moment(event.start).isAfter(moment()))
                .slice(0, 1)
                .map((event) => (
                  <div key={event.id}>
                    <h3 className='text-lg font-semibold'>{event.title}</h3>
                    <p className='text-gray-500'>
                      {moment(event.start).format('MMMM DD, YYYY - hh:mm A')}
                    </p>
                    <Button
                      onClick={() => handleDeleteEvent(event.id)}
                      variant='danger'
                      className='mt-2'
                    >
                      Delete
                    </Button>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>

        {/* Add New Task */}
        <section className='mb-6'>
          <Card className={`${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Add New Task (Dark)' : 'Add New Task'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddTask}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Task Name
                  </label>
                  <Input
                    type='text'
                    name='taskName'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    placeholder='Enter task name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date
                  </label>
                  <Input
                    type='date'
                    name='taskDate'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Time
                  </label>
                  <Input
                    type='time'
                    name='taskTime'
                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    required
                  />
                </div>
                <div className='mb-4 flex items-center justify-center'>
                  <Button type='submit' variant='default'>
                    Add Task
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Large Calendar with Tasks */}
        <section className='mb-6'>
          <Card className={`${theme === 'dark' ? 'dark-card' : ''}`}>
            <CardHeader>
              <CardTitle>{theme === 'dark' ? 'Task Calendar (Dark)' : 'Task Calendar'}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='w-full h-[500px] bg-white rounded-md shadow-md'>
                {/* Large Calendar */}
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor='start'
                  endAccessor='end'
                  style={{ height: '100%' }}
                  selectable
                  onSelectSlot={handleSelect}
                  eventPropGetter={eventStyleGetter}
                  views={['month', 'week', 'day']}
                  step={30}
                  showMultiDayTimes
                  defaultDate={new Date()}
                  components={{
                    month: {
                      dateHeader: ({ label }) => (
                        <span className='text-gray-700'>{label}</span>
                      ),
                    },
                    week: {
                      dateHeader: ({ label }) => (
                        <span className='text-gray-700'>{label}</span>
                      ),
                    },
                    day: {
                      dateHeader: ({ label }) => (
                        <span className='text-gray-700'>{label}</span>
                      ),
                    },
                  }}
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
