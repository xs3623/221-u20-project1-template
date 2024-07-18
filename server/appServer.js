const express = require('express')
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('client/public'))
app.use(bodyParser.json({ type: 'application / json'}))

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})
 
// API endpoints
const userRoutes = require("./Routes/feeditemsRoutes");
app.use("/api/currentstories", userRoutes);

 

app.listen(1337, () => console.log('Listening on port 1337.'))
