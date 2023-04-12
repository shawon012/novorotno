import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { assignment: 1, Mark: 57 },
  { assignment: 2, Mark: 52 },
  { assignment: 3, Mark: 25 },
  { assignment: 4, Mark: 51 },
  { assignment: 5, Mark: 47 },
  { assignment: 6, Mark: 55 },
  { assignment: 7, Mark: 60 },
];

const Statistics = () => {

  return (
    <div className='chat-my'>
        <ScatterChart width={1200} height={500}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="assignment" domain={[1, 7]} tickCount={7} />
      <YAxis type="number" dataKey="Mark" domain={[20, 60]} tickCount={6} />
      <Tooltip />
      <Scatter data={data} fill="#8884d8" />
    </ScatterChart>
    </div>
  );
};

export default Statistics;
