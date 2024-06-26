// CustomToolbar.jsx
import React from 'react';
import { Navigate } from 'react-big-calendar';
import moment from 'moment';

const CustomToolbar = ({ date, onNavigate, label }) => {
  const goToBack = () => {
    onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    onNavigate(Navigate.NEXT);
  };

  const goToCurrent = () => {
    onNavigate(Navigate.TODAY);
  };

  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <button onClick={goToBack} className='px-2 py-1 bg-gray-200 rounded-md'>
          Back
        </button>
        <button onClick={goToCurrent} className='mx-2 px-2 py-1 bg-gray-200 rounded-md'>
          Today
        </button>
        <button onClick={goToNext} className='px-2 py-1 bg-gray-200 rounded-md'>
          Next
        </button>
      </div>
      <div>
        <span className='text-xl font-bold'>{moment(date).format('MMMM YYYY')}</span>
      </div>
    </div>
  );
};

export default CustomToolbar;
