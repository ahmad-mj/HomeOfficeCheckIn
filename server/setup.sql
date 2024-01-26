DROP DATABASE IF EXISTS home_office;
CREATE DATABASE home_office;
USE home_office;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL CHECK (user_name != ''),
  hashed_password VARCHAR(255) NOT NULL CHECK (hashed_password != ''),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE home_office_time (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT REFERENCES users(id),
  startTime TIMESTAMP,
  endTime TIMESTAMP,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (user_name, hashed_password, created)
VALUES ("Ahmad MJ", "ahmad", CURRENT_TIMESTAMP),
       ("Noha MS", "noha", CURRENT_TIMESTAMP),
       ("Joe Hafry", "joe", CURRENT_TIMESTAMP);
