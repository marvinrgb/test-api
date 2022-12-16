import express from 'express';
import fetch from 'node-fetch'
const app = express();

const port = 7777;


app.get("/", (req, res) => {
  console.log("NEW REQUEST!");
  fetch("https://maker.ifttt.com/trigger/notif/with/key/dav-twDkW2HET8-YMRLvX2764V-U9q7KDS_Mj9SkXAC", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      "value1":"New Custom Notification",
      "value2":"testetstestetestst",
      "value3":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    })
  })
  .then((res) => {
    console.log(res.status)
  })
  .catch((err) => {
    console.log(err)
  })
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log("running")
})