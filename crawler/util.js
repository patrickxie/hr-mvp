const numSitesToVisit = (list, num) => list.slice(0, num);
const reverseSitesToVisit = (list, num) => list.slice(list.length - num, list.length);


const helpers = {
    getX : numSitesToVisit,
    getXReverse: reverseSitesToVisit
}
module.exports.helpers = helpers;