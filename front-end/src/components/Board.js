import React, { useState, useEffect } from 'react';
import Column from './Column';
import axios from 'axios';

const Board = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tasks').then(res => setTasks(res.data));
    }, []);

    const columns = ['Backlog', 'To Do', 'Done'];
    return (
        <div className="board">
            {columns.map(col => (
                <Column key={col} columnName={col} tasks={tasks.filter(t => t.column === col)} />
            ))}
        </div>
    );
};

export default Board;
