 
const buttons = () => {
    fetch ('https://open.exchangerate-api.com/v6/latest')
     .then(res => res.json()) 
     .then(res=> {
         const units = Object.keys(res.rates);
         console.log(units);
         for (const key of units) 
             {
             let el = document.createElement('button');
             el.innerHTML = key;
             el.value = key;
             el.setAttribute('class', 'button');
             el.addEventListener('click', chooseCurrency)
             document.body.appendChild(el);
             /* console.log(el) */
             }         
     })
 }

const chooseCurrency = (e) => {
      let clickedUnit = e.target;
      console.log(clickedUnit.value);
      return clickedUnit.value;

 }

 const convert = () => {
    
    let fromAmount = document.querySelector('#fromAmount').value;
    fetch ('https://open.exchangerate-api.com/v6/latest')
    .then(res => res.json())
    .then(res => {
        /* const clickedUnit = chooseCurrency; */
        console.log(chooseCurrency());
        data = res.rates; 
        const ratio = data[chooseCurrency(e)]
        console.log(data);
        console.log(ratio);
        document.querySelector('#toAmount').value = fromAmount * ratio.toFixed(2);      
        })

}






    
        








