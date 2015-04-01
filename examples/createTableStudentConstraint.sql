CREATE TABLE Student (
name varchar(10),
age int,
gender char(1)
CONSTRAINT age_limit CHECK (age>=18)
);