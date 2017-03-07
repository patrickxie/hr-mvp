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
                    rawJSON: JSON.stringify(res),
                    isSolution: true
                    })
                    entry.save(err => console.error('1, DB ERROR: ', err))
                    return parsed;
                } else {
                    let entry = new models.Solutions({
                    urlToGet: solutionsForum,
                    rawJSON: JSON.stringify(res),
                    isSolution: false
                    })
                    entry.save(err => console.error('2, DB ERROR: ', err))
                    return parsed;
                }
            });
        } else {
            //get the json from the model we just queried
            return JSON.parse(data[0].rawJSON)
        }
    }, err => err )
    // .then(resp => JSON.stringify(resp))
    .then(resp =>{ 
        // console.log(resp.topics.length) //should be parsed javascript object now
        if(resp._imported_slug){
            return resp.topics.filter(i=> i.title.toLowerCase().indexOf(configs.language) > 0)
                .map(i=> i.tid)
        } else {    
            // console.log('This is not a solution article, cid is: ', resp.cid)
            throw `this is not a solution article, cid is: ${resp.cid}`
        }
    }, err=> err) 
    // .then( result => console.log('1', result), err => console.log('2', err) )
    // .then( toFetch => toFetch.map((i)=> request.get(topicBaseUrl+i)))   //uncomment during production
    // .then( allRequests => Promise.all(allRequests))  //uncomment during production
    // .then( results => results.map(i => i.data._imported_content)) //uncomment during production
    .then( results => gib )
    // .then( r => console.log('final: ', r))
    // .then( results => console.log('final ', results));
    .then( listOfTexts => {
        let r = listOfTexts.map(i => helpers.pluckAnswer(configs.pythonPrefix, i))
        return r
    })
    .then( r => console.log('final: ', r))
    // filter texts by class Solution:
    // corresponding model is urlToGet, pick it out from the database,
    //  models.Solutions({
    //      urlToGet: solutionsForum,
    //  })
     // query above data
     // then solution.answersPython = [ ... r ]
    // find corresponding model, save into the answers array
    //just call the _imported_content, and you're good, straight up formatted, if you just extract it from the code
    

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


const gib = [ `    class Solution(object):\n        def twoSum(self, nums, target):\n            """\n            :type nums: List[int]\n
         :type target: int\n            :rtype: List[int]\n            """\n            if len(nums) <= 1:\n                return False
\n            buff_dict = {}\n            for i in range(len(nums)):\n                if nums[i] in buff_dict:\n                    retu
rn [buff_dict[nums[i]], i+1]\n                else:\n                    buff_dict[target - nums[i]] = i+1` ]