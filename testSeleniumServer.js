var express = require('express')
var app = express();

app.use(express.static('public'))

app.get('/clicked', function(req, res){
    console.log('we got a click!')
    res.send('ya got yo button click')
})

app.listen(8000, function(){
    console.log('listening on 8000')
})