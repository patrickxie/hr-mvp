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
    //make sure you LOG this url 
}

//TODO: still need to write functionality to check html document for <div class="hljs"> to guarantee the end of the code
// can check the first few words after the last hljs match the one we have in json, then slice those off
const getCodeAnswerFromEntirePostText = ( prefix, document ) => {
    // console.log('before processing: ', document)
    let start = document.indexOf(prefix)
    let r = document.slice(start)
    return r
}



const helpers = {
    getX : numSitesToVisit,
    getXReverse: reverseSitesToVisit,
    getDiscussionUrl: scrubUrl,
    pluckAnswer: getCodeAnswerFromEntirePostText
}
module.exports.helpers = helpers;