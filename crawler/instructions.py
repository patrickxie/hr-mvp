
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