var fs = require('fs')
function getSlugs(){
    return new Promise(function(resolve, reject){
        fs.readFile('api-problems-algorithms.json', function(err, data){
            const d = data.toString();
            // console.log(d)
            const p = JSON.parse(d);
            const problems = p.stat_status_pairs;
            const slugs = problems.map( i => i.stat.question__title_slug );
            resolve(slugs);
        })
    })
}

module.exports.names = getSlugs();