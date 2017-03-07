get question__title__slug from   api/problems/algorithms database

https://leetcode.com/problems/${slug}/?tab=Solutions

plug it into website, then get the html document

find the dom node
take the link in //*[@id="discussSolution"]/div[2@class=“button-wrapper"]/a  href

https://discuss.leetcode.com/category/35
save as href, add the word api into the href
https://discuss.leetcode.com/api/category/35

now you have a list of posts
filter posts by name
for now only save javascript & python

create a new model and save it into our database
new model

title-slug: title-slug for the post
post-title
unparsed solutions: json
parsed solutions& formatted: json
commentsRaw: get it from tid

get the topic id
https://discuss.leetcode.com/topic/${topic_id}/

save the raw json into model
this json will contain the array of all the answers with <code></code> in them, save the ones with code tag

todo next: parse and format
try  & catch when parse format