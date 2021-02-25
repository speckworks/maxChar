// maxChar("abcccccccd") === "c"
//maxChar("apple 1231111") === "p"

function maxChar(str) {
let myStr = str.toLowerCase();

let max = 0
let maxChar = ''
let charMap = {};


for(let char of myStr){
if(!charMap[char]){
  charMap[char] = 1
}else{
  charMap[char]++;
}
}

for(let char in charMap){
  if(charMap[char] > max){
max = charMap[char]
maxChar = char;
  }
}

return maxChar

}


maxChar("apple 1231111")