const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.NODE_CLIENT_PORT || 3001;
const BASEURL = process.env.NODE_SERVER_BASEURL || "https://google.com/not-found";

async function getData() {
  const { data } = await axios.get(BASEURL);
  return data;

app.get("/", async (req, res) => {
  res.send(await getData());
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
