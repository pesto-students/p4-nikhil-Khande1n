# Week 3 Assignment 3.3

## What is the output of the below problem and why:[30min]

### Problem
![Screenshot 2022-08-04 at 1 49 48 PM](https://user-images.githubusercontent.com/15044489/182799437-228cb229-bf09-414f-bf8c-e0d7f101f4f3.png)

### Solution

Output will be: "Count is 0"

Reason: When function createIncrement is called
- intial count is 0
- returns a function - increment()
- creates a message and save in 'message' variable, count variable which is in lexical scope of the 'message' 
variable, has still value equals to zero
- When after the increment() function is run, count value increases to 3
- when log function is run, its lexical scope variable 'message' was already prepared and form a closure with log function
- Therefore, the output will be "Count is 0"
