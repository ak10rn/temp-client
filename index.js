const express = require("express");
const app = express();

const PORT = process.env.NODE_CLIENT_PORT || 3001;
const BASEURL = process.env.NODE_SERVER_BASEURL;
app.get("/", (req, res) => {
  const data = fetch(BASEURL).then(res => res.json());
  res.send("Hello There!!");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
