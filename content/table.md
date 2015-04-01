### Tables

- Teachers, students, classes, courses. They are similar to Classes in Ruby.

- They look like tables you see in any application (word, excel .. etc)

&nbsp;

&nbsp;
Student

|  Name       |     Age   | Gender
|:-------------|------------- :| ------------- :|
|  John        |     25    | Male |
|  Sam   |     21    | Female |


## Create Table SQL

in Ruby, we do this

```ruby
class Student
    def initialize(name,age,gender)
       @name = name
       @age = age
       @gender = gender
    end
end

```
in SQL
```sql

CREATE TABLE Student (
name text,
age int,
gender text
);

```