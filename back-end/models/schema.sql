CREATE DATABASE taskboard;
\c taskboard
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    tag VARCHAR(50),
    "column" VARCHAR(50),
    position INT
);

CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    action TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
