var fs = require('fs')

var fs = require('fs')
fs.readFile('api-problems-algorithms.json', function(err, data){
    const d = data.toString();
    // console.log(d)
    const p = JSON.parse(d);
    const post = p.posts[0].content;

    
})