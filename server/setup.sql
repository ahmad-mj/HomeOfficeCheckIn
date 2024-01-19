CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     first           VARCHAR NOT NULL CHECK (first != ''),
     last            VARCHAR NOT NULL CHECK (last != ''),
     email           VARCHAR NOT NULL UNIQUE CHECK (email != ''),
     hashed_password VARCHAR NOT NULL CHECK (hashed_password != ''),
     created         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    );

CREATE TABLE HomeOfficeTime (
    id SERIAL PRIMARY KEY,
    userID    INT REFERENCES users(id),
    startTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    endTime   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
