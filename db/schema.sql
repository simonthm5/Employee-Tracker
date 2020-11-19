DROP DATABASE IF EXISTS workforceDB;

CREATE DATABASE workforceDB;
USE workforceDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    deptname VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE job (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    salary DECIMAL NOT NULL,
    departmentid INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (departmentid) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    jobid INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (jobid) REFERENCES job(id)
);



