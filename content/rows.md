### Rows

- Equivalent to an instance or an object of our class.

- Records or Rows are interchangeable.

&nbsp;

in Ruby, we create an object like this:
```ruby

myStudent = Student.new("sam",22,"Male")

```

&nbsp;

in SQL, we insert a new record in our Student table.

```sql

INSERT INTO Student (
'sam',
22,
'male'
);

```


## Deleting Rows

- To delete a record we have to specify where we can find it.

```sql

DELETE FROM Student WHERE name = 'sam'

```


## Updating Rows

- To update a record, locate it first and then modify it.

```sql

UPDATE Student
SET name ='shmuley',age=67
WHERE name ='sam'

```
