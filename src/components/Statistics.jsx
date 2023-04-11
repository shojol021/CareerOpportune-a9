import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch('marks.json')
            .then(res => res.json())
            .then(marks => setMarks(marks))
    }, [])
    return (
        <div className='m-9'>
            <h2 className='text-center font-bold text-3xl mt-5 mb-3'>Assignment Analytics</h2>
            <h3 className='text-center mb-2'>Avg Assignment Marks: 60</h3>
            <div className=''>
                <ComposedChart className='mx-auto' width={1000} height={400} data={marks}>
                    <YAxis></YAxis>
                    <XAxis dataKey="name"></XAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="average" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />

                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;