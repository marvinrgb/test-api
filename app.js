import express from 'express';
const app = express();

const port = 7777;


app.get("/", (req, res) => {
  console.log("NEW REQUEST!");
  res.send("bruder you made it lol");
})

app.listen(port, () => {
  console.log("running")
})