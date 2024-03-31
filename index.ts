#! /usr/bin/env node

// let bodyParts = ["ear","nose","eyes"];
// bodyParts.push("head");
// bodyParts.push("hair");
// bodyParts.pop();
// bodyParts = bodyParts.concat(["head","hands"])
// console.log(bodyParts);

// let i = 0; //intialize

// while(i <= 10)
// {
//     console.log("iloveyou");
//     i++;
// }

import inquirer from "inquirer"

let todo = [];
let i = true;

while(i)
{
    let userList = await inquirer.prompt(
    [
        {
        message: "What do you want to add in your list?",
        type: "input",
        name: "list",
        },

        {
            message: "Wanna add more?",
            type: "confirm",
            name: "addMore",
            
        }
    ]
  )
console.log(userList.addMore);

  todo.push(userList.list)
  i = userList.addMore
  console.log(todo);
}
