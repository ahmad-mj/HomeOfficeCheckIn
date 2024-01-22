DROP DATABASE IF EXISTS home_office;
CREATE DATABASE home_office;
USE home_office;

CREATE TABLE users (
     id INT PRIMARY KEY AUTO_INCREMENT,
     first           VARCHAR(50) NOT NULL CHECK (first != ''),
     last            VARCHAR(50) NOT NULL CHECK (last != ''),
     email           VARCHAR(50) UNIQUE CHECK (email IS NULL OR email != ''), -- Email ist  optional
     hashed_password VARCHAR(50) NOT NULL CHECK (hashed_password != ''),
     created         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    );


CREATE TABLE home_office_time (
    id INT PRIMARY KEY AUTO_INCREMENT,
    userID    INT REFERENCES users(id),
    startTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    endTime   TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- CHECK (endTime >= startTime)
    date      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (first, last, email, hashed_password, created)
VALUES ("Ahmad", "MJ", NULL , "1234",CURRENT_TIMESTAMP),
       ("Joe", "Hafry", "joe@test@de", "12345",CURRENT_TIMESTAMP);