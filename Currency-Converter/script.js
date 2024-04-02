const baseUrl="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select")
const inputField=document.getElementById('inputField')
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".To select")
const currency=document.querySelector('.Currency')
const Total=document.querySelector('.total')

const button=document.querySelector('.btn')

for (let select of dropdowns){
    for ( CurrCode in countryList){
        //console.log(CurrCode, countryList[CurrCode])
        let newOption=document.createElement("option");
        newOption.innerText=CurrCode;
          newOption.value=CurrCode;
          if(select.name==="from" && CurrCode==="USD"){
            newOption.selected="selected"
          }
          else if(select.name==="to" && CurrCode==="INR"){
            newOption.selected="selected"
          }
          select.append(newOption)
    }
    select.addEventListener("change",(event)=>{
        UpdateFlag(event.target)
    });
}

const UpdateFlag=(element)=>{
    //console.log(element)
    let CurrCode=element.value
    let countryCode=countryList[CurrCode]
    //console.log(countryCode)
    newsrc=`https://flagsapi.com/${countryCode}/shiny/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}

const swapButton = document.querySelector('.Swap'); // Select your swap button here

swapButton.addEventListener("click", () => {
    // Swap the selected options of fromCurr and toCurr
    const temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    // Update the flags based on the new selected currencies
    UpdateFlag(fromCurr);
    UpdateFlag(toCurr);
});
function updateMessageContent(value) {
    let fromCurrency = fromCurr.value; // Get the selected 'from' currency
    let toCurrency = toCurr.value; // Get the selected 'to' currency
    let exchangeRate = value// Get the exchange rate
    let message = `1 <span class="currency-1">${fromCurrency}</span> = ${exchangeRate} <span class="Currency">${toCurrency}</span>`;
    let message2=`<p> Amount In <span>${toCurrency}</span></p>`
    
    // Update the message content
    document.querySelector('.message').innerHTML = message;
    document.querySelector('.message2').innerHTML=message2
}

button.addEventListener("click",(event)=>{
    event.preventDefault();
    let amount=inputField.value;
   // console.log(amount);
   if(amount==="" ||  amount<1){
    amount.value=1
    inputField.value="1"
   }
   let country=(fromCurr.value).toLowerCase()
   let country2=(toCurr.value).toLowerCase()
   currency.innerText=country2
   const  URl=`${baseUrl}/${country}.json`
   //console.log(URl)
   fetch(URl)
   .then((response)=>{
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON data
   }).then(data => {
    // Access values from the response data
    console.log(data); // Output: { key1: value1, key2: value2, ... }
    console.log(data[country][country2]); // Output: value1
    let value=data[country][country2]
    updateMessageContent(value);
    let exchange_total=amount * value
    Total.value=exchange_total
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
})