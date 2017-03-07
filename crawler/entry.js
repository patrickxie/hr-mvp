const request = require('axios')
const { names } = require('./prepAnswerRetrieval.js')
const { getX } = require('./util.js') 

const main = (num) => {
    names
    .then( data => data.getX(num) ) //get the list of questions from our algo question database
    .then( data => request.get('http://localhost:8000/clicked'), err => console.log(err))
    .then( response => response.data, error => console.log(error) )
    .then( response => console.log(response))
            // .catch( error => console.log(error) )
    // .then( d => console.log('time to process; ', d))
    // .then
}

main(1); //first argument is how many answers you want to get from website