import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useState } from 'react';
import './chart.css'

const Chart = ({ data }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className='chart'>
                {!show ? (
                    <ResponsiveContainer width="100%"  aspect={4}>
                        <h3 className='chart-title'>Line Chart</h3>
                        <LineChart data={data} >
                            <XAxis dataKey="day" stroke='#5550bd' />
                            <YAxis />
                            <Tooltip />
                            <Line type='monotone'  dataKey="number" stroke="#5550bd" />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <ResponsiveContainer width="100%" aspect={4}>
                        <h3 className='chart-title'>Bar Chart</h3>
                        <BarChart  data={data}>
                            <XAxis dataKey="day" stroke='#5550bd' />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="number" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
                <button className='btn' onClick={() => { setShow(!show) }}>{
                    show ? (<p>Line Chart</p>) : (<p>Bar Chart</p>)
                }</button>
            </div>
        </>
    );
}

export default Chart;