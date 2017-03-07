const request = require('axios')
const { names } = require('./prepAnswerRetrieval.js')
const { helpers } = require('./util.js') 

const main = (num) => {
    names
    .then( data => task(data[data.length-1]) );
    // .then( data => helpers.getXReverse(data, num) ) //get the list of questions from our algo question database
    // .then( list => list.map( problem => new Promise( (resolve, reject) => need some CODEHERE)) )
    // .then( promises => console.log(promises)) // need to make this into a bunch of promises
    // .then( data => request.get('http://localhost:8000/clicked'), err => console.log(err))
    // .then( data => {
    //     const gateWayToSolutions = `https://leetcode.com/problems/${data}/?tab=Solutions`
    //     return request.get(gateWayToSolutions)
    // }, err => console.log(err))
    // .then( response => response.data, error => console.log(error) )
    // .then( response => console.log(response))
            // .catch( error => console.log(error) )
    // .then( d => console.log('time to process; ', d))
    // .then
}

const task = (instructions) => {
    console.log(instructions)
    const gateWayToSolutions = `https://leetcode.com/problems/${instructions}/?tab=Solutions`
    request.get(gateWayToSolutions)
    .then(res => console.log(res.data) , err => console.log(err))
}
main(3); //first argument is how many answers you want to get from website