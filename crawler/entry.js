const { names } = require('./prepAnswerRetrieval.js')


const main = () => {
    names
    .then( data => data ) //got the name of questions from our algorithm question database
    .then( data => console.log(data));
}

main();