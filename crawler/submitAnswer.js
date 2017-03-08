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
    let Cookies;
    return driver.get(LOGIN_URL)
        .then(()=> {
            let user = driver.findElement(By.id('id_login'))
            let pass = driver.findElement(By.id('id_password'))
            let bu = driver.findElement(By.className('btn btn-primary'))
            let button = driver.findElement(By.xpath('/html/body/div/div[2]/form/div[3]/button'))
            
            user.sendKeys('hrmvp123')
            pass.sendKeys('hrmvp321')
            button.click()
            return 'Yes'
        })
        .then(()=> driver.sleep(4000))
        .then(()=> 
            driver.manage().getCookies()
                .then((cookies)=>{
            // console.log('do we have cookies: ', cookies)
                Cookies = cookies.filter(i=>i.name==='LEETCODE_SESSION')[0]
                console.log('ADDING COOKIE: ', Cookies);
                return driver.manage()
        }))
        // .then(()=> driver.manage().addCookie(Cookies))
        .then(()=> driver.navigate().to(SOLUTIONS_URL))
        // .then((cookies) => console.log(cookiesls))
}



const getAnswer = () => { 
    return models.Solutions.findOne({ urlToGet: solution },
        function(err, result){
            if(err) console.log('what is our error: ', err)
            const submitAnswer = result.answersPython[0]
            // console.log('got our database answer: ', submitAnswer)
            return submitAnswer
    })
}


Promise.join(getAnswer(), login()).then( (data) => {
    // console.log('our data is: ', data[0]);
    console.log('weve successfull logged in: ', data[1]) 
    return data[0]
}) //before continuing on, check if it's loggedin to see if sess expired
.then( toPaste => {
    console.log('we are executing solutions url')
    driver.get(SOLUTIONS_URL)
    .then(()=>{
        let path = '/html/body/div[1]/div[5]/div[1]/div/select/option[3]'
        let button = driver.findElement(By.xpath(path))
        button.click()
    })
    .then(()=>{
        let ele = driver.findElement(By.className('ace_text-input'))
        ncp.copy(toPaste.answersPython[0], function () {
            ele.sendKeys(Key.COMMAND, 'a', Key.DELETE)
            ele.sendKeys(Key.COMMAND, 'v')    
        })      
    })
    .then(()=>{
        // let ele = 
    })    

}, err => err)
.then( ()=> driver.sleep(3000))
.then( ()=> {
    let path = '//*[@id="button1"]'
    let ele = driver.findElement(By.xpath(path))
    ele.sendKeys(Key.COMMAND, Key.ARROW_DOWN)
    driver.sleep(2000)
    ele.click()
})
// .catch(err => console.log(err))
// .then( data => {

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