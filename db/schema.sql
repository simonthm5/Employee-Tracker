DROP DATABASE IF EXISTS workforceDB;
CREATE DATABASE workforceDB;
USE workforceDB;

CREATE TABLE job (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    departmentid INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (depertmentid) REFERENCES depertmant(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    jobid INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (jobid) REFERENCES job(id),
);

 CREATE TABLE department (
        id INT NOT NULL AUTO_INCREMENT,
        departmentname VARCHAR(40) NOT NUll 
        PRIMARY KEY (id),
    );


