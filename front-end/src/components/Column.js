import React from 'react';
import Card from './Card';

const Column = ({ columnName, tasks }) => {
    return (
        <div className="column">
            <h3>{columnName}</h3>
            {tasks.map(task => (
                <Card key={task.id} task={task} />
            ))}
        </div>
    );
};

export default Column;
