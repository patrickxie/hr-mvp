




// numbersToMultiply(100);
// 100, 90




//for first 10 numbers
//multiply each by first 10 number of b
//for second 10 numbers
//multiple each by first 10 numbers of b, and 2nd 10 numbers of b
//for third 10 numbers
//multtiple each by first 10 numbers of b, and 2nd 10 numbers of b, and third 10 numbers of b




// var largestPalindrome = function(n) {
//     var a = '1' + new Array(n).fill('0').join('')
//     a = parseInt(a);
//     var b = a;
    
//     function numbersToMultiply(currentNum){
//         let tensCounted = (a - currentNum) /10
//         b - tensCounted;
//         let start = a
//         let end = b - tensCounted*10 - 10
//         return [start, end]
//     }

//     for(var i = a; i > 0 ; i --){
//         if(i % 10 ===0){
//             var nums = numbersToMultiply(i)
//         }

//         for(var j=nums[0]; j>nums[1]; j--){
//             let r = i*j
//             console.log('r: %s, i: %s, j: %s', r, i, j)
//             if (r.toString() === r.toString().split('').reverse().join('') ) {
              
//               return r % 1337;
//             }
//         }

//         if(i=== 910){
//             return 'donezo'
//         }
//     }

//     // var largest;
//     // for(var i = a; i > 0 ; i--){
//     //   for(var j=b; j > 0; j--){

//     //     let r = i * j;
//     //     if (r.toString() === r.toString().split('').reverse().join('') ){
//     //       console.log('found r: ', r, i, j)
          
//     //     if (!largest||r > largest) {largest = r};
//     //     }
//     //   }
//     // }
//     // console.log(largest);
//     // return largest % 1337;

// };


var largestPalindrome = function(n) {
    // debugger
    var max = Math.pow(10, n) - 1;
    var min = Math.pow(10, n-1);
    var pal = 0;
    for (var i = max; i >= min; i--) {
        for (var j = max; j >= i; j--) {
            var result = i * j;
            console.log(`r:${result}, i:${i}, j:${j}`)
            if (result > pal) {
                var str = result.toString();
                var rStr = str.split("").reverse().join("");
                if (str == rStr) {
                    pal = result;
                    break;
                }
            }else{
                console.log("WE BROKE1")
                break;
            }
        }
    	if(j == max) {
            console.log("WE BROKE2")
    	    break;
    	}
        if(i===900){
            return 'donezo'
        }
    }
    return (pal % 1337);
};

largestPalindrome(3)
// 993 * 913, 906609
console.log(largestPalindrome(3)===123);
// 906609, 123
