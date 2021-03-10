-- create table
CREATE TABLE students (
    id int,
    first_name varchar(255),
    middle_name varchar(255),
    last_name varchar(255),
    age int,
    location varchar(255)
);

-- insert values into table
INSERT INTO students (id, first_name, middle_name, last_name, age, location) 
VALUES  (1,'Juan',null,'Cruz',18,'Manila'),
        (2,'Jhon',null,'Young',20,'Manila'),
        (3,'Victor',null,'Rivera',21,'Manila'),
        (4,'Adrian',null,'Co',19,'Laguna'),
        (5,'Pau',null,'Riosa',22,'Marikina'),
        (6,'Piolo',null,'Pascual',25,'Manila');

-- update first entry in table
UPDATE students
SET  first_name = 'Ana',
    middle_name = 'Cui',
    last_name = 'Cajocson',
    age = 25,
    location = 'Bulacan'
WHERE id = 1

-- delete last entry
DELETE FROM students WHERE id = 6




-- ACTIVITY 2

-- display all students
SELECT COUNT(*)
FROM students

-- display all students where location is Manila
SELECT * FROM students 
WHERE location = 'Manila';

-- display the average age of all students
SELECT AVG(age) avg_age FROM students;

-- display all students by age descending
SELECT * FROM students
ORDER BY age DESC;




-- JOINS ACTIVITY

-- create another table
CREATE TABLE classrooms (
    id int,
    student_id int,
    section varchar(1)
);

-- insert values into table
INSERT INTO classrooms (id, student_id, section) 
VALUES  (1, 1, "A"), 
        (2, 2, "A"),
        (3, 3, "B"),
        (4, 4, "C"),
        (5, 5, "B"),
        (6, 6, "A"),
        (7, 7, "C"),
        (8, 8, "B"),
        (9, 9, "B"),
        (10, 10, "C");

-- inner join
SELECT *
FROM students as s
INNER JOIN classrooms as c
ON s.id = c.id
ORDER BY s.id ASC;

-- left join
SELECT *
FROM classrooms as c
LEFT JOIN students as s
ON c.id = s.id;