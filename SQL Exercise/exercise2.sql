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