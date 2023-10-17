CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE actions(
    id SERIAL PRIMARY KEY,
    action VARCHAR(255),
    user_id INTEGER,
    timestamp timestamp,
    FOREIGN KEY (user_id) REFERENCES person(id)
);