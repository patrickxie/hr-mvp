var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    Key = webdriver.Key;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

const script = function(){
    var e = document.getElementsByClassName('ace_line');
    while(e.length > 0){ e[0].parentNode.removeChild(e[0]); }
}

const code = `    class Solution(object):\n        def twoSum(self, nums, target):\n            \"\"\"\n            :type nums: List[int]\n            :type target: int\n            :rtype: List[int]\n            \"\"\"\n            if len(nums) <= 1:\n                return False\n            buff_dict = {}\n            for i in range(len(nums)):\n                if nums[i] in buff_dict:\n                    return [buff_dict[nums[i]], i+1]\n                else:\n                    buff_dict[target - nums[i]] = i+1`


const codeNonBin = `class Solution(object):\n    def twoSum(self, nums, target):\n        if len(nums) <= 1:\n            return False\n        buff_dict = {}\n        for i in range(len(nums)):\n            if nums[i] in buff_dict:\n                return [buff_dict[nums[i]], i]\n            else:\n                buff_dict[target - nums[i]] = i`

const decoded = `class Solution(object):\n    def twoSum(self, nums, target):\n        if len(nums) &lt;= 1:\n            return False\n        buff_dict = {}\n        for i in range(len(nums)):\n            if nums[i] in buff_dict:\n                return [buff_dict[nums[i]], i]\n            else:\n                buff_dict[target - nums[i]] = i`


driver.get('http://localhost:8000/');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.findElement(By.className('ace_text-input'))
var x = driver.findElement(By.className('ace_text-input'))

// driver.executeScript(script)
//     .then(function(d){
//         console.log('after scriptExecuted');
//         x.sendKeys('pyconference')
//     })
x.sendKeys(Key.COMMAND, 'a', Key.DELETE)
// x.sendKeys(Key.NULL)
x.sendKeys(codeNonBin, Key.ENTER) //try return
x.sendKeys(Key.ENTER);
x.sendKeys(Key.ENTER);
x.sendKeys(Key.ENTER);
x.sendKeys(Key.ENTER);

driver.findElement(By.className('button')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();


//issue here is whenever you hit enter, the ace editor automatically indents for you, so after every line, need to hit backspace