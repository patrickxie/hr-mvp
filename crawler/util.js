const numSitesToVisit = (list, num) => list.slice(0, num);
const reverseSitesToVisit = (list, num) => list.slice(list.length - num, list.length);

const scrubUrl = ( document, startIndex) => {
    console.log(document, startIndex )

    let i = startIndex + 15
    let final = ''
    console.log('starting at: ', i )
    let count = 50 //gets us out of loop if something is broken
    while(document[i] !== '"' && count > 0){
        final += document[i]
        count--, i++;
    }
    return final
    //make sure you LOG this fucking url cause your method is ghetto as shit
}


const helpers = {
    getX : numSitesToVisit,
    getXReverse: reverseSitesToVisit,
    getDiscussionUrl: scrubUrl
}
module.exports.helpers = helpers;