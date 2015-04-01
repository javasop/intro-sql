### Constraints

- Sometimes we want to define some rules on our tables that applies rules to some columns (attrbiutes)

- Some of the constraints:

    * Not NULL: column can't accept null (empty) values
    * UNIQUE: can be many in one tables
    * PRIMARY KEY: can only be one in table, unique and can't be null.
    * FOREIGN KEY: provides a way for tables to connect to each other using primary keys.
    * Checks: custom rules that we specify.


## in SQL

- Student table

in SQL

```sql

CREATE TABLE Student (

id int primary key,

name varchar(10) not null,

age int,

gender char(1),

cohort text

CONSTRAINT age_limit CHECK (age>=18)
);

```


We can do it in Ruby or the application layer as this:

```ruby

class Student
    def initialize(name,age,gender)

       #Not Null
       if(name.nill?)
        @name = name
       else
        return "can't insert a null value"
       end

       #custom check
       if(age >= 18)
        @age = age
       else
        return "age is less than 18"
       end

       #check specified when defining the table
       if(gender == "m" || gender == "f")
        @gender = gender
       else
        return "age is a one character value, m or f"
       end

    end
end

```
