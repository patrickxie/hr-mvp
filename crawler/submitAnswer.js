const { db, mongo, models } = require('./db.js')
var Promise = require("bluebird");
var ncp = require("copy-paste");


// console.log(clipboard.write);
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    Key = webdriver.Key;

var driver = new webdriver.Builder()
    // .forBrowser('chrome')
    .forBrowser('firefox')
    .build();


const solution = "https://discuss.leetcode.com/api/category/9"
const SOLUTIONS_URL = 'https://leetcode.com/problems/two-sum/?tab=Solutions'
const local = 'http://localhost:8000/'
const BASE_URL = 'https://leetcode.com'
const LOGIN_URL = BASE_URL + '/accounts/login/'


// {/*<button class="btn btn-primary" type="submit">Sign In</button>*/}
const login = () => {
    // return new Promise(function(resolve, reject){
    return driver.get(LOGIN_URL).then(()=> {
            let user = driver.findElement(By.id('id_login'))
            let pass = driver.findElement(By.id('id_password'))
            let bu = driver.findElement(By.className('btn btn-primary'))
            let button = driver.findElement(By.xpath('/html/body/div/div[2]/form/div[3]/button'))
            
            user.sendKeys('hrmvp123')
            pass.sendKeys('hrmvp321')
            button.click()
            // console.log(bu);
            // console.log(button)
            console.log('done loginnin')
            // return driver
        })
        // return 'doneloggedin'
    // })
}



const getAnswer = () => { 
    return models.Solutions.findOne({ urlToGet: solution },
        function(err, result){
            if(err) console.log('what is our error: ', err)
            // console.log('our db query items url is : ', result)
            const submitAnswer = result.answersPython[0]
            console.log('got our database answer: ', submitAnswer)
            return submitAnswer
    })
}


Promise.join(getAnswer(), login()).then( (data, isLogIn) => {
    console.log('our data is: ', data);
    console.log('weve successfull logged in', isLogIn) 
    return data
}) //before continuing on, check if it's loggedin to see if sess expired
.then( data => {
    console.log('we are executing solutions url')
    driver.get(SOLUTIONS_URL)    
    // let button = driver.findElement(By.xpath('/html/body/div/div[2]/form/div[3]/button'))
}, err => err)
.catch(err => console.log(err))
// .then( data => {

// }, err => err)
    // var a = submitAnswer.split('\n');
    // console.log('a: ', a)


    // driver.get(SOLUTIONS_URL);
    // driver.get(local)
    // var x = driver.findElement(By.className('ace_text-input'))

    // ncp.copy(submitAnswer, function () {
    // // complete...

    //     x.sendKeys(Key.COMMAND, 'a', Key.DELETE)
    //     x.sendKeys(Key.COMMAND, 'v')    
    // })


    // driver.findElement(webdriver.By.css('#mySelection > option:nth-child(3)')) //change this to the corresponding python one
    // .click();



// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();


//issue here is whenever you hit enter, the ace editor automatically indents for you, so after every line, need to hit backspace

// const cons =  'class Solution(object):\n        def twoSum(self, nums, target):\n            """\n            :type nums: List[int]\n\n         :type target: int\n            :rtype: List[int]\n            """\n            if len(nums) <= 1:\n                return False\n\n            buff_dict = {}\n            for i in range(len(nums)):\n                if nums[i] in buff_dict:\n                    retu\nrn [buff_dict[nums[i]], i+1]\n                else:\n                    buff_dict[target - nums[i]] = i+1',
//      'class Solution(object):\n        def twoSum(self, nums, target):\n            """\n            :type nums: List[int]\n\n         :type target: int\n            :rtype: List[int]\n            """\n            if len(nums) <= 1:\n                return False\n\n            buff_dict = {}\n            for i in range(len(nums)):\n                if nums[i] in buff_dict:\n                    retu\nrn [buff_dict[nums[i]], i+1]\n                else:\n                    buff_dict[target - nums[i]] = i+1',
//      'class Solution(object):\n        def twoSum(self, nums, target):\n            """\n            :type nums: List[int]\n\n         :type target: int\n            :rtype: List[int]\n            """\n            if len(nums) <= 1:\n                return False\n\n            buff_dict = {}\n            for i in range(len(nums)):\n                if nums[i] in buff_dict:\n                    retu\nrn [buff_dict[nums[i]], i+1]\n                else:\n                    buff_dict[target - nums[i]] = i+1'


const nospace = [ 'class Solution(object):',
  'def twoSum(self, nums, target):',
  '"""',
  ':type nums: List[int]',
  '',
  ' :type target: int',
  ':rtype: List[int]',
  '"""',
  'if len(nums) <= 1:',
  'return False',
  '',
  'buff_dict = {}',
  'for i in range(len(nums)):',
  'if nums[i] in buff_dict:',
  'return [buff_dict[nums[i]], i+1]',
  'else:',
  'buff_dict[target - nums[i]] = i+1' ]