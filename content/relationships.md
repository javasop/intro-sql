### Relationships

- So far, we dealt with only one table.

- In real world, we would have many tables

- In most cases, these tables have relationships.


## Relationships

Student

ID |  Name       |     Age   | Gender
-------|:-------------|------------- :|
665|  John        |     25    | Male |
856 |  Sam   |     21    | Female |

&nbsp;

Locker

|  Number       |    Student_ID
|:-------------|------------- :|
|  16        |     856    |
|  18       |     665  |

&nbsp;

- The type of relationship here, could be:
    * One student can have one locker at any given moment
    * One locker can be assigned to only one student.
- Student_ID Columns here is a foreign key referncing another table.


## in SQL

```sql

CREATE TABLE Locker (

number int,
Student_ID int FOREIGN KEY REFERENCES Student(ID)

);

```


## Other Relationships

- One To many: the primary key of the one goes to the many.

    * Example: one cohort has many students, and one student belongs to only one cohort

&nbsp;

- Many to Many: you have to create a table in between the includes both primary keys in between.
    * Example: one student can take many courses. and one course can be taken by many students.

