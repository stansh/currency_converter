 
const buttons = () => {
    fetch ('https://open.exchangerate-api.com/v6/latest')
     .then(res => res.json()) 
     .then(res=> {
         const units = Object.keys(res.rates);
         console.log(units);
         for (const key of units) 
             {
             var el = document.createElement('button');
             el.innerHTML = JSON.stringify(key);
             document.body.appendChild(el);
             console.log(el)
             }         
     })
 }
 
 
 const convert = () => {
  
    let fromAmount = document.querySelector('#fromAmount').value;
  
    fetch ('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(res => {
        data = res.rates; 
        console.log(data);
        document.querySelector('#toAmount').value = fromAmount*data.AED.toFixed(2);      
        })

}






    
        








