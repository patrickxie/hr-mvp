
const { names } = require('./prepAnswerRetrieval.js')
const { helpers } = require('./util.js')
const { runTask } = require('./tasks.js')

const configs = {
    wait: () => Math.ceil(Math.random()*30),
    language: 'python',
    pythonPrefix: 'class Solution'
}

const main = (start, end) => {
    // debugger;
    // I THINK WE NEED TO CONVERT ALL OF THESE TO PROMISES OR ELSE IT WON TEVER LOOP OR END
    names
    .then( data => {
        for(let i = start ; i < end; i++){
            runTask(i, data, configs)
        }
    });
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


main(9, 10); //first argument is how many answers you want to get from website