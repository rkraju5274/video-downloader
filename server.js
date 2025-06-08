const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/download', async (req, res) => {
  const videoURL = req.body.url;
  try {
    const apiUrl = `https://api.vevioz.com/api/button/videos/${encodeURIComponent(videoURL)}`;
    const response = await axios.get(apiUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Download Failed");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
