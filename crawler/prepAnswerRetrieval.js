var fs = require('fs')
const getSlugs = () => new Promise(
    function(resolve, reject){
        fs.readFile('api-problems-algorithms.json', function(err, data){
            const d = data.toString();
            const p = JSON.parse(d);
            const problems = p.stat_status_pairs;
            const slugs = problems.map( i => i.stat.question__title_slug );
            if(slugs.length !== 0){
                resolve(slugs);
            } else {
                reject(slugs);
            }
        })
    })
    
module.exports.names = getSlugs();

