-- DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

SELECT * from burgers
