'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Publications() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('/api/publications');
            setData(response.data);
        }

        fetchData();
    }, []);

    return (
        <div className="hero min-h-screen bg-base-100" id="publication">
            <div className="hero-content text-center">
                <div className="max-w-5xl">
                    <h1 className="text-3xl font-bold py-10">PATENTS</h1>

                    <div className="overflow-x-auto">
                        <table className="table  text-md">
                            <thead>
                                <tr>
                                    {data[0] && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                        {Object.values(row).map((value) => <td key={value}>{value}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
