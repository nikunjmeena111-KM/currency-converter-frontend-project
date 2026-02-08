
const base_url=`https://v6.exchangerate-api.com/v6/cc3e2018f925454ce462da89/latest`;

const dropdowns=document.querySelectorAll(".dropdown select ");

for(let select of dropdowns){
    for(codes in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=codes;
        newOption.value=codes;
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
          gettheFlag(evt);
        
    })
}

const image=document.querySelectorAll(".select-container img");

const gettheFlag = (event) => {
    let newCode = event.target.value.toLowerCase();      // ⬅ corrected
    let index = Array.from(dropdowns).indexOf(event.target); // ⬅ find which dropdown changed
    let NewCode=newCode.slice(0,2);

    image[index].src = `https://flagcdn.com/w320/${NewCode}.png`;   // ⬅ corrected
    image[index].alt = `${newCode} flag`;    // ⬅ corrected
    image[index].name=`${newCode.toUpperCase()}`
}

const Amount=document.querySelector(".amount input");
const From=document.querySelector(".from select");
const To=document.querySelector(".to select");



const Result=document.querySelector("#result");
const Convert=document.querySelector("#btn");

console.log(To.value);
Convert.addEventListener("click",(evt)=>{
    
    evt.preventDefault();
    
    let amount=Number(Amount.value);

    if (amount < 1) {
    alert("Amount must be at least 1");
    Amount.value = 1;
    amount = 1;
    return;
}

else{  
    let url=`${base_url}/${From.value}`;
const converter= async()=>{
    let Rate= await fetch(url);
    let data= await Rate.json();
    console.log(data.conversion_rates[To.value]);
    let exchangeRate=data.conversion_rates[To.value];
    Result.innerText=`${amount} ${From.value} = ${amount*exchangeRate} ${To.value}`
}
converter();
 }
})


