
var base64 = require('base-64');
var utf8 = require('utf8');
 
var text = 'foo © bar 𝌆 baz';
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);
console.log(encoded);
var decoded = base64.decode(encoded);
console.log(decoded)
var b = "<pre><code>def fizzBuzz(self, n):\n    return [&#39;Fizz&#39; * (not i % 3) + &#39;Buzz&#39; * (not i % 5) or str(i) for i in range(1, n+1)]</code></pre>\n"

console.log(base64.decode(b))


// var fs = require('fs')
// fs.readFile('sampleData_Un_decoded.json', function(err, data){
//     const d = data.toString();
//     // console.log(d)
//     const p = JSON.parse(d);
//     const post = p.posts[0].content;

    
// })





var a = "<p>Using <a href=\"https://py.checkio.org/mission/fizz-buzz/publications/StefanPochmann/python-27/shortest-52-kill-me-now/\" rel=\"nofollow\">my old CheckiO solution</a>:</p>\n<pre><code>def fizzBuzz(self, n):\n    return[&#39;FizzBuzz&#39;[i%-3&amp;-4:i%-5&amp;8^12]or`i`for i in range(1,n+1)]\n</code></pre>\n<p>Maybe I could shorten it to use <code>range(n)</code>, but as you can tell from my above link, that was exhausting enough :-)</p>\n<p>And a cleaner one I once saw somewhere:</p>\n<pre><code>def fizzBuzz(self, n):\n    return [&#39;Fizz&#39; * (not i % 3) + &#39;Buzz&#39; * (not i % 5) or str(i) for i in range(1, n+1)]</code></pre>\n"

