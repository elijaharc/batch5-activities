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