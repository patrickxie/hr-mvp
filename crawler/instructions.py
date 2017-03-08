
# `https://discuss.leetcode.com/api/category/${categoryId}`
# request above website

# if _imported_slug is in our names database, then it is valid, and save the raw json into our database

# find the dom node
# take the link in //*[@id="discussSolution"]/div[2@class=“button-wrapper"]/a  href

# https://discuss.leetcode.com/category/35
# save as href, add the word api into the href
# https://discuss.leetcode.com/api/category/35



# now you have a list of posts
# filter posts by name
# for now only save javascript & python

# fix database save error, it's probably because there are additional schemas taht aren't set properly
# the error:  'Solutions validation failed'

# fix it or else it'll keep on sending requests to server

 let slugName, rawJson, isSolu, topicList;

need more error handling for promise chains


create a new model and save it into our database
new model

title-slug: title-slug for the post
post-title
unparsed solutions: json
parsed solutions& formatted: json
commentsRaw: get it from tid

get the topic id
https://discuss.leetcode.com/topic/${topic_id}/

get the _imported_content for each topic id

save the raw json into model
this json will contain the array of all the answers with <code></code> in them, save the ones with code tag

todo next: parse and format
try  & catch when parse format

authenticate
split the python code string 
paste into web, hit submit


GRAB CODE from http://discuss.leetcode.com/api/topic 23004  and http://discuss.leetcode.com/topic/23004   and verify the end of the hljs class doms to get the ending of the code snipppet



select the dropdown menu to python
authenticate
click submit button




demo

make a new database
grab answers 9 to 11
edit entry page to 9, 11 in parameter

then run submitAnswer

<span class="select2-selection__rendered" id="select2-lang-mr-container" title="Python">Python</span>


navigate to <select class="form-control select mbm ng-valid select2-hidden-accessible ng-animate ng-pristine-remove ng-pristine-remove-active ng-dirty" name="lang" ng-model="aceCtrl.selectedLang" ng-options="lang.text for lang in aceCtrl.langs track by lang.value" tabindex="-1" aria-hidden="true" style=""><option value="cpp">C++</option><option value="java">Java</option><option value="python">Python</option><option value="c">C</option><option value="csharp">C#</option><option value="javascript">JavaScript</option><option value="ruby">Ruby</option><option value="swift">Swift</option><option value="golang">Go</option></select>

click the option



<button id="button1" ng-show="!aceCtrl.interpret.interpretOnly" ng-disabled="aceCtrl.interpret.running" class="btn btn-primary btn-pad ng-isolate-scope" type="submit" ng-click="aceCtrl.interpret.submitCode()" oj-button="submit" data-toggle="tooltip" title="" data-original-title="Shortcut: Command + enter">Submit Solution</button>