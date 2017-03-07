const request = require('axios')
// const cheerio = require('cheerio')
const { helpers } = require('./util.js')

const task = (instructions) => {
    console.log(instructions)
    const gateWayToSolutions = `https://leetcode.com/problems/${instructions}/?tab=Solutions`
    // const test = `https://leetcode.com/problems/two-sum/?tab=Solutions`
    request.get(gateWayToSolutions)
    .then(res => res.data , err => err)
    .then(data => {
        // let $ = cheerio.load(data);
        // console.log($('#discuss-solutions-app').hasClass('tab-content'))
        let s = `data-forumurl="https://discuss.leetcode.com/category/`
        console.log('index of our string is: ', helpers.getDiscussionUrl(JSON.stringify(data), data.search(s)))
        
    })
}



module.exports.runTask = task