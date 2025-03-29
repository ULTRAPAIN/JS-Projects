
const characterAmountRange=document.getElementById('characterAmountRange');
const characterAmountNumber=document.getElementById('characterAmountNumber');
const includeLowercaseElement=document.getElementById('includeLowercase');
const includeUppercaseElement=document.getElementById('includeUppercase');
const includeSymbolsElement=document.getElementById('includeSymbols');
const includeNumbersElement=document.getElementById('includeNumbers');
const passwordGeneratorForm=document.getElementById('passwordGeneratorForm');
const passwordDisplay=document.getElementById('passwordDisplay');
characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

const  UPPERCASE_CHAR_CODES=arrFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES=arrFromLowToHigh(97,122)
const  NUMBERS_CHAR_CODES=arrFromLowToHigh(48,57)
const SYMBOLS_CHAR_CODES=arrFromLowToHigh(33,47).concat(arrFromLowToHigh(58,64)).concat(arrFromLowToHigh(91,96)).concat(arrFromLowToHigh(123,126));
function syncCharacterAmount(e){
const value=e.target.value
characterAmountNumber.value = value
characterAmountRange.value = value
}

passwordGeneratorForm.addEventListener('submit',(e)=>{
e.preventDefault();
const characterAmount=characterAmountNumber.value
const includeUppercase=includeUppercaseElement.checked
const includeSymbols=includeSymbolsElement.checked
const includeNumbers=includeNumbersElement.checked

const password=GeneratePassword(characterAmount, includeUppercase,includeSymbols,includeNumbers)
passwordDisplay.innerText=password
});
function GeneratePassword(characterAmount, includeUppercase, includeSymbols,includeNumbers){
    let charCodes=LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes=charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeSymbols) charCodes=charCodes.concat(SYMBOLS_CHAR_CODES)
    if(includeNumbers) charCodes=charCodes.concat(NUMBERS_CHAR_CODES)
    const passwordCharacters=[]
    for (let i = 0; i < characterAmount; i++) {
        const character = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(character));
    }
    
    return passwordCharacters.join('')
};

function arrFromLowToHigh(low,high){
    const arr=[]
    for(let i=low;i<=high;i++){
        arr.push(i)
    }
    return arr
}
