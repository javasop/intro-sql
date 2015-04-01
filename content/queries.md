### Queries

- The Q in SQL. We need a way to do a search on our data.

- This answers the question: I need to get a subset of my data that satisfies a condition.


## SELECT

- Give me the student with the name = "sam"

- We do that with a SELECT statement.

- Where clause can accept: =, >, <, >=, <=, !=

```html

SELECT * FROM students where name = "sam"

```


## ORDER BY

- Flavors we add to our SELECT statements.

- Orders records after SELECT.

```sql

SELECT * FROM students ORDER BY name desc

```
- this will sort the result by name in a descending order (alphabetically)


## GROUP BY

- Groups records after SELECT to perform certain operations.
