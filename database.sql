CREATE DATABASE companydb;
USE companydb;
CREATE TABLE    empleado(

    id INT(11)  NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,    
    salario INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO empleado  VALUES 
(1, 'joe,' 1000),
(2, 'zoe,' 2000),
(3, 'moe,' 4000),
(4, 'max,' 6000);
