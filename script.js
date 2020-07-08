
/* const data = require('currencyCodes.json') */

const buttons = () => {
    fetch ('https://v6.exchangerate-api.com/v6/05b4701c0b67be6233177c93/latest/USD')
     .then(res => res.json()) 
     .then(res=> {
         const units = Object.entries(res.conversion_rates);
         console.log(units);
         const container = document.querySelector('.container');
         const BtnDiv = document.createElement('div');
         BtnDiv.setAttribute('class', 'row');
         container.appendChild(BtnDiv);
         
         for (const [key,value] of units) 
             {
             let el = document.createElement('button');
             el.innerHTML = key;
             el.name = key;
             el.value = value;
             el.setAttribute('class', 'btn btn-dark');
             
             el.addEventListener('click', convert);
             BtnDiv.appendChild(el);
             /* console.log(el) */
             }         
     })
 }


 const convert = (e) => {
     let clickedUnit = e.target;
     console.log(clickedUnit.value);
     let unitValue = clickedUnit.value;
     let fromAmount = document.querySelector('#fromAmount').value;
     let error = document.querySelector('#error');
     
     if (!isNaN(fromAmount)) {
        document.querySelector('#toAmount').value = (fromAmount * unitValue).toFixed(2);
     } else {
        error.innerHTML = 'Please enter a numeric value.';
     }
     
}

    
    /* let fromAmount = document.querySelector('#fromAmount').value;
    fetch ('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(res => {
      
        
        console.log(chooseCurrency());
        data = res.rates; 
        const ratio = data[chooseCurrency(e)]
        console.log(data);
        console.log(ratio);
        document.querySelector('#toAmount').value = fromAmount * ratio.toFixed(2);      
        })
 */


/* const chooseCurrency = (e) => {
    let clickedUnit = e.target;
    console.log(clickedUnit.value);
    return clickedUnit.value;

}
 */

 






    
        








