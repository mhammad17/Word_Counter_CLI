#! /user/bin/env node 


import inquirer from "inquirer";


const answer: { paragraph:string } = await inquirer.prompt(
    [
        {
            name: "paragraph",
            type: "input",
            massage: "Write a paragraph or Santance for counting words"
        }
    ]
)

let words = answer.paragraph.trim().split(" ");  //trim() will remove all white spaces means "spaces"
                                                //split() is actually writen word convert into an array
                                                //and split("  ") means convert space into comma, or we can say skip.
                                           

console.log(`your paragraph have ${words.length} words`);    //.length method is count words in array