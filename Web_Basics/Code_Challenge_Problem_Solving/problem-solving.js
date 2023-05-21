/*User Story
A computer application needs to be able to identify if a written paragraph is written in 
First, Second, or Third Person.*/

/*Read through the user story.
In a VS Code file, do the following:*/



//TASK1: Using comments, write out 1 strategy that could be used to solve the problem.

/*Counts for the following variables could be made: 
variable firstCount = count the number of times 'I'/'we' is used 
variable secondCount = count the number of times 'you' is used
variable thirdCount = count the number of times 'he'/'she'/'it'/'they' is used
Determine which variable is largest and that defines if the paragraph is 1st, 2nd or 3rd person.*/



/*TASK2: Using comments, create pseudocode (an informal but readable description of code that uses regular 
language to outline a solution) to apply one of the strategies to solve the problem.*/

// 0. Create function determinePerson(paragraph) which takes in a paragraph represented as a single string.
// 1. Split paragraph into an array of individual words called wordArray.
// 2. Create variables firstCount, secondCount, and thirdCount that initially each equal 0.
// 3. Iterate through the wordArray and for each 'I' or 'we'/'We' add 1 to variable firstCount.
// 4. Iterate through the wordArray and for each 'you'/'You' add 1 to variable secondCount.
// 5. Iterate through the wordArray and for each 'it' or 'he' or 'she' or 'they' add 1 to variable thirdCount.
// 6. Determine which variable is largest and if the largest is firstCount, return 'first person', 
//    if the largest is secondCount, return 'second person', if the largest is thirdCount, return 'third person'.


//Using comments, write a short paragraph that answers: What is the hardest part of problem-solving?*/

// The hardest part of problem solving is holding back from diving into writing code immediately without first thinking through the problem
