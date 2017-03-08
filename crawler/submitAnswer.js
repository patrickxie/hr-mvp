const { db, mongo, models } = require('./db.js')
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
const url = 'https://leetcode.com/problems/two-sum/?tab=Solutions'
const local = 'http://localhost:8000/'

// console.log('db: ', db)
console.log('mongo: ', models.Solutions)

models.Solutions.findOne({ urlToGet: solution }, function(err, result){
    console.log('what is our error: ', err)
    console.log('our db query items url is : ', result)
    const submitAnswer = result.answersPython[0]

    var a = submitAnswer.split('\n');
    console.log('a: ', a)

    // driver.get(url);
    driver.get(local)
    // var x = driver.findElement(By.className('ace_text-input'))

    // ncp.copy(submitAnswer, function () {
    // // complete...

    //     x.sendKeys(Key.COMMAND, 'a', Key.DELETE)
    //     x.sendKeys(Key.COMMAND, 'v')    
    // })

    // var w = driver.findElement(By.className('selections'))
    // w.click()
    // var y = driver.findElement(By.css("option[value='3']"))

    driver.findElement(webdriver.By.css('#mySelection > option:nth-child(3)'))
    .click();
    // y.click();
    // driver.selectOption = selectOption.bind(driver);
    // driver.selectOption(w, 'opel');


    // function selectOption(selector, item){
    //     var selectList, desiredOption;

    //     selectList = this.findElement(selector);
    //     selectList.click();

    //     selectList.findElements(protractor.By.tagName('option'))
    //         .then(function findMatchingOption(options){
    //             options.some(function(option){
    //                 option.getText().then(function doesOptionMatch(text){
    //                     if (item === text){
    //                         desiredOption = option;
    //                         return true;
    //                     }
    //                 });
    //             });
    //         })
    //         .then(function clickOption(){
    //             if (desiredOption){
    //                 desiredOption.click();
    //             }
    //         });
    // }
    // driver.findElement(By.className('button')).click();

})

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