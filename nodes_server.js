let Parser = require('rss-parser');
let parser = new Parser();

const express = require('express')
const app = express()
const port = 3000

app.get('/rss', async (req, res) => {

  let feed = await parser.parseURL('https://feeds.feedburner.com/TheHackersNews');

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(feed));

})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
