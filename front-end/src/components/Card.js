import React from 'react';

const Card = ({ task }) => {
    return (
        <div className="card">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <span>{task.tag}</span>
        </div>
    );
};

export default Card;
