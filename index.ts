#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
  const raibowanimation = chalkAnimation.rainbow("Welcome to the Quiz !\n");
  await sleep();
  raibowanimation.stop();
}

async function Question() {
  const data: {
    name: string;
    question1: string;
    question2: string;
    question3: string;
  } = await inquirer.prompt([
    {
      name: "Name",
      type: "input",
      message: "What is your name ?",
    },
    {
      name: "question1",
      type: "list",
      message:
        " An e-mail that appears to originate from one source but actually has been sent from another?",
      choices: ["Phishing", "Spoofing", "Spamming", "Sniffing"],
    },
    {
      name: "question2",
      type: "list",
      message: "____ is unwanted e-mail or junk mail.?",
      choices: ["Bomb", "phatBot", "Spam", "Worm"],
    },
    {
      name: "question3",
      type: "list",
      message: " The process of eliminating logical errors is known as.?",
      choices: ["testing", "debugging", "Maintenance", "evaluation"],
    },
  ]);
  const { name, question1, question2, question3 } = data;
  if (
    question1 === "Spoofing" &&
    question2 === "Spam" &&
    question3 === "debugging"
  ) {
    console.log(
      `You passed the quiz ${chalk.bgCyanBright("Congratulations !")}`
    );
  } else {
    console.log(`${chalk.bgRedBright("Try Again !")}`);
  }
}

async function startagain() {
  do {
    await Question();
    var que = await inquirer.prompt([
      {
        name: "restart",
        type: "input",
        message: "Do you want to Continue ? y or n",
      },
    ]);
  } while (que.restart === "y");
}

await Welcome();
await startagain();
