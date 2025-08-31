// My projects and skills

import 'dotenv/config'
import fs from "fs";
import express from 'express';
import markdownit from 'markdown-it';

const app = express();
const port = process.env.PROJECT_PORT;
const appName = process.env.PROJECT_NAME;

app.use(express.static('public'))

const md = markdownit()
let skillsIT = md.render(fs.readFileSync("./public/skills-it.md", { encoding: 'utf8', flag: 'r' }));
let skillsEN = md.render(fs.readFileSync("./public/skills-en.md", { encoding: 'utf8', flag: 'r' }));

app.get('/', (req, res) => {
  res.render("skills.ejs", {data: skillsEN});
});

app.get('/skills-it', (req, res) => {
  res.render("skills.ejs", {data: skillsIT});
});

app.listen(port, () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SMILE! you're in production");
  }
  console.log(`${appName} is listening on port ${port}`);
});
