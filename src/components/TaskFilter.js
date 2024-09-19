import React from 'react';

const TaskFilter = ({ setFilter }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('High')}>High</button>
      <button onClick={() => setFilter('Medium')}>Medium</button>
      <button onClick={() => setFilter('Low')}>Low</button>
      <button onClick={() => setFilter('Done')}>Done</button>
    </div>
  );
};

export default TaskFilter;
