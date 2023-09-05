CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(10) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

describe employee;

INSERT INTO employee VALUES 
  (1, 'Joe', 1000),
  (2, 'Hary', 2000),
  (3, 'Max', 2500),
  (4, 'Sam', 1500);

