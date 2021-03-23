const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.listen(3333, () => {
    console.log('Server started at port 3333');
});

app.get('/download', (req,res) => {
  let URL = req.query.URL;
  // res.json({url:URL});
  res.setHeader('Content-Disposition', 'attachment; filename="video.mp4"');

  ytdl(URL, {
      format: 'mp4'
      }).pipe(res);
});
