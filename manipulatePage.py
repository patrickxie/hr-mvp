from selenium import webdriver
from selenium.webdriver.common.keys import Keys
# from threading import Timer

def send():
    print "sending keys"
    elem.send_keys("pycondef")


driver = webdriver.Firefox()
driver.get("http://localhost:8000/")
# driver.get("https://ace.c9.io/#nav=embedding")
# assert "Python" in driver.title
script = "var e = document.getElementsByClassName(\'ace_line\');while(e.length > 0){ e[0].parentNode.removeChild(e[0]);}"
elem = driver.find_element_by_class_name("ace_text-input")
elem.clear()
# driver.execute_script(script)
# driver.implicitly_wait(25)
try:
    # element = WebDriverWait(driver, 10).until(
    #     EC.presence_of_element_located((By.ID, "myDynamicElement"))
    # )
    WebDriverWait(driver, 10).until(driver.execute_script(script))

finally:
    send();


# send()
# elem.send_keys("pycondef")
# t = Timer(20, send)
# t.start()
# elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
driver.close()


''' 
className = ace_layer ace_text-layer
execute a javascript to delete all the nodes with that specific classname
and then send in the Keys

className = ace_line are what we are trying to delete

class Solution(object):
    def twoSum(self, nums, target):
        if len(nums) <= 1:
            return False
        buff_dict = {}
        for i in range(len(nums)):
            if nums[i] in buff_dict:
                return [buff_dict[nums[i]], i]
            else:
                buff_dict[target - nums[i]] = i
'''

