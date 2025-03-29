//lets learn String inbuilt methods
//lnegth property -> can be used to calculate the length of the string
const str = 'hello world'
console.log(str.length);

//indexOf Method --> returns the index of the first Occurrence of a substring it takes two arguments the substring and the starting index by default it is 0
console.log(str.indexOf('world'))

//lastIndexOf Method --> returns the index of the last occurrence of a substring it takes two arguments the substring and the starting index by default it is the length of the string
console.log(str.lastIndexOf('l'))

//Slice method --> returns a new string by extracting a section of a string it takes two arguments the start index and the end index by default it is the length of the string ,it does not inlcude the end index , it give endindex-1
console.log(str.slice(0,5))

//substring method --> returns a new string by extracting a section of a string it takes two arguments the start index and the end index by default it is the length of the string, This is depreciated method
console.log(str.substring(0,5))

//Difference between slice and substring is that slice can take negative index but substring cannot
console.log(str.slice(-5,0))
console.log(str.substring(-5,0)) // this will give error

//replace method --> returns a new string with some or all matches of a pattern replaced by a replacement it takes two arguments the pattern and the replacement
console.log(str.replace('world','everyone'))    

//split method --> returns an array of strings by splitting a string into substrings
console.log(str.split(' '))

//trim method --> returns a new string with the leading and trailing whitespace removed
console.log(str.trim())

//charAt method --> returns the character at a specified index
console.log(str.charAt(0))

//charCodeAt method --> returns the unicode of the character at a specified index
console.log(str.charCodeAt(0))

//concat method --> returns a new string by concatenating two or more strings it takes two arguments the string and the string to be concatenated
console.log(str.concat('everyone'))

//includes method --> returns true if a string contains a specified value it takes two arguments the value to search for and the starting index by default it is 0
console.log(str.includes('world'))

//startsWith method --> returns true if a string starts with a specified value it takes two arguments the value to search for and the starting index by default it is 0
console.log(str.startsWith('hello'))

//endsWith method --> returns true if a string ends with a specified value  
console.log(str.endsWith('world'))



//Lets Now learn about Number inbuilt methods

let num = 123 ;

//toString method --> returns a string representation of a number
console.log(num.toString())

//toFixed method --> returns a string representation of a number with a specified number of decimals
console.log(num.toFixed(2))

//parse Int is a global function 
//ParseInt method --> parses a string and returns an integer
console.log(parseInt('123'))

//ParseFloat method --> parses a string and returns a floating point number
console.log(parseFloat('123.45'))

//isInteger method --> returns true if a value is an integer
console.log(Number.isInteger(123))  

//isFinite method --> returns true if a value is a finite number
console.log(Number.isFinite(123))

//isNaN method --> returns true if a value is NaN
console.log(Number.isNaN(NaN))  


//Array inbuilt methods

let arr=[1,2,3,4,5,6]

//Push method --> adds one or more elements to the end of an array and returns the new length of the array
arr.push(7);
console.log(arr)

//Pop method --> removes the last element from an array and returns the removed element
arr.pop();
console.log(arr)

//Shift method --> removes the first element from an array and returns the removed element
arr.shift();
console.log(arr)    

//Unshift method --> adds one or more elements to the beginning of an array and returns the new length of the array
arr.unshift(0);
console.log(arr)    

//Splice method --> adds or removes elements from an array at a specified index
arr.splice(2,0,7); //where 2 is the index and 0 is the number of elements to remove and 7 is the element to add
console.log(arr)    

//Slice method --> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array , it does not modify the original array
console.log(arr.slice(2,5))

//Join method --> joins all elements of an array into a string
console.log(arr.join(' '))

//Map method --> creates a new array populated with the results of calling a provided function on every element in the calling array
console.log(arr.map(x=>x*2))

//Filter method --> creates a new array with all elements that pass the test implemented by the provided function
console.log(arr.filter(x=>x%2===0))

//Reduce method --> executes a reducer function (that you provide) on each element of the array, resulting in a single output value
console.log(arr.reduce((acc,curr)=>acc+curr,0))

//forEach method --> executes a function for each array element
arr.forEach(x=>console.log(x))

//sort method --> sorts the elements of an array in place and returns the sorted array
console.log(arr.sort((a,b)=>a-b))

//reverse method --> reverses the elements of an array in place and returns the reversed array
console.log(arr.reverse())

//every method --> tests whether all elements in the array pass the test implemented by the provided function
console.log(arr.every(x=>x%2===0))

//some method --> tests whether some of the elements in the array pass the test implemented by the provided function
console.log(arr.some(x=>x%2===0))       

//find method --> returns the value of the first element in the array that satisfies the provided testing function
console.log(arr.find(x=>x%2===0))

//findIndex method --> returns the index of the first element in the array that satisfies the provided testing function
console.log(arr.findIndex(x=>x%2===0))  

//includes method --> determines whether an array includes a certain value among its entries, returning true or false as appropriate
console.log(arr.includes(3))

//Array.isArray method --> determines whether the passed value is an Array
console.log(Array.isArray(arr)) 


//concat method --> joins two or more arrays and returns a new array
console.log(arr.concat([7,8,9]))


arr=[1,2,3,4,5,6]
let secondArr = [10,11,12]

for(let i=0;i<secondArr.length;i++){
    arr.push(secondArr[i])
}

console.log(arr);

//for each method --> executes a function for each array element
arr.forEach(x=>console.log(x))

//map method --> creates a new array populated with the results of calling a provided function on every element in the calling array
console.log(arr.map(x=>x*2))





