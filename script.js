 
const buttons = () => {
    fetch ('https://open.exchangerate-api.com/v6/latest')
     .then(res => res.json()) 
     .then(res=> {
         const units = Object.entries(res.rates);
         console.log(units);
         for (const [key,value] of units) 
             {
             let el = document.createElement('button');
             el.innerHTML = key;
             el.name = key;
             el.value = value;
             el.setAttribute('class', 'button');
             
             el.addEventListener('click', convert);
             document.body.appendChild(el);
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
        error.innerHTML = 'Please enter a numeric value';
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

 






    
        








