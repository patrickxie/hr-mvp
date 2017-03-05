




// numbersToMultiply(100);
// 100, 90




//for first 10 numbers
//multiply each by first 10 number of b
//for second 10 numbers
//multiple each by first 10 numbers of b, and 2nd 10 numbers of b
//for third 10 numbers
//multtiple each by first 10 numbers of b, and 2nd 10 numbers of b, and third 10 numbers of b




var largestPalindrome = function(n) {
    var a = '1' + new Array(n).fill('0').join('')
    a = parseInt(a);
    var b = a;
    
//  var a =100;
//  var b= 100;
    function numbersToMultiply(currentNum){
        // debugger;
        // if(currentNum)
        let tensCounted = (a - currentNum) /10
        b - tensCounted;
        let start = a
        let end = b - tensCounted*10 - 10
        return [start, end]
    }

    for(var i = a; i > 0 ; i --){
        // debugger
        if(i % 10 ===0){
            var nums = numbersToMultiply(i)
        }

        for(var j=nums[0]; j>nums[1]; j--){
            let r = i*j
            if (r.toString() === r.toString().split('').reverse().join('') ) {
              console.log('r: %s, i: %s, j: %s', r, i, j)
              return r % 1337;
            }
        }
    }


};


console.log(largestPalindrome(3));