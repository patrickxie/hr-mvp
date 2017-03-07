const request = require('axios')
// const cheerio = require('cheerio')
const { helpers } = require('./util.js')
const { db, models } = require('./db.js')


const task = (categoryId, problemNamesList, configs) => {

    // configs.wait().then( run everytthing here )
    // const solutionsForum = `https://discuss.leetcode.com/api/category/${categoryId}`
    const solutionsForum = `https://discuss.leetcode.com/api/category/9`

    const topicBaseUrl = `https://discuss.leetcode.com/api/topic/`

    // const test = `https://discuss.leetcode.com/api/category/1`
    // console.log(solutionsForum)
    let check = new models.Solutions({ urlToGet: solutionsForum })
    models.Solutions.find({ urlToGet: solutionsForum }, function(err, solutions){
        return solutions
    })
    .then(data => {
        if(data.length === 0){
            return request.get(solutionsForum).then(res=> res.data)
            .then(res => {
                console.log('made request!! id: ', categoryId)
                let parsed = res
                if(parsed._imported_slug){
                    let entry = new models.Solutions({
                    urlToGet: solutionsForum,
                    rawJSON: res,
                    isSolution: true
                    })
                    entry.save(err => console.log('1, DB ERROR: ', err))
                    return parsed;
                } else {
                    let entry = new models.Solutions({
                    urlToGet: solutionsForum,
                    rawJSON: res,
                    isSolution: false
                    })
                    entry.save(err => console.log('2, DB ERROR: ', err))
                    return parsed;
                }
            });
        } else {
            //get the json from the model we just queried
            return data[0].rawJSON
        }
    }, err => err )
    // .then(resp => JSON.stringify(resp))
    .then(resp =>{ 
        console.log(resp.topics.length) //should be parsed javascript object now
        if(resp._imported_slug){
            return resp.topics.filter(i=> i.title.toLowerCase().indexOf(configs.language) > 0)
                .map(i=> i.tid)
        } else {    
            // console.log('This is not a solution article, cid is: ', resp.cid)
            throw `this is not a solution article, cid is: ${resp.cid}`
        }
    }, err=> err) 
    // .then( result => console.log('1', result), err => console.log('2', err) )
    .then( toFetch => toFetch.map((i)=> request.get(topicBaseUrl+i)))
    // .then( d =>  d, console.log(d))
    .then( allRequests => Promise.all(allRequests))
    // .then( results => console.log(results));
    // got RawJSON, filter topics by having keyword "python" using .filter  and indexOf
    // filter texts by <code>
    // find corresponding model, save into the answers array
    

}


module.exports.runTask = task

// const task = (instructions) => {
//     console.log(instructions)
//     const gateWayToSolutions = `https://leetcode.com/problems/${instructions}/?tab=Solutions`
//     // const test = `https://leetcode.com/problems/two-sum/?tab=Solutions`
//     request.get(gateWayToSolutions)
//     .then(res => res.data , err => err)
//     .then(data => {
//         // let $ = cheerio.load(data);
//         // console.log($('#discuss-solutions-app').hasClass('tab-content'))
//         let s = `data-forumurl="https://discuss.leetcode.com/category/`
//         console.log('index of our string is: ', helpers.getDiscussionUrl(JSON.stringify(data), data.search(s)))
        
//     })
// }