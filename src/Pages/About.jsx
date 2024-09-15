import Header from '../Component/Header';
import { useState } from 'react';
export default function About () {
    
        const [currencyFrom, setCurrencyFrom] = useState("USD");
        const [currencyTo, setCurrencyTo] = useState("NGN");
        const [amt, setAmt] = useState(0);

        const [result, setResult] = useState(0.00);


        // console.log("Currency Form, currencyForm");
        // console.log("Currency To, currencyTo");
        // const rate = 1600
        const convert = (amt, currencyFrom, currencyTo) =>{
            // console.log("Amount, amt");
            // setResult("amt*1600");

        var myHeaders = new Headers();
          myHeaders.append("apikey", "LE0yYdd10CyZ4JiBEbnAvnqu4Bu0JaMg");

         var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
          };

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amt}`, requestOptions)
        .then(response => response.json())
        .then(res => setResult(res['result']))
        .catch(error => console.log('error', error));
        }
         return(
          <>
          <Header/>
         <h1>About Us</h1>

         <div>
            <select defaultValue={currencyFrom} onChange={(e)=> setCurrencyFrom(e.target.value)}>
                <option> Select Currency From</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
            </select>
            <input type="number" name="" id="" placeholder='Enter Amount' onChange={(e)=> setAmt(e.target.value)} value={amt} />
            <select defaultValue={currencyTo} onChange={(e)=> setCurrencyTo(e.target.value)}>
            <option> Select Currency To</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
                
                </select> 
                {/* <input type="submit" onClick={()=> setResult(rate * amy)} />  */}
                <input type="submit" onClick={(e)=> convert(amt , currencyFrom, currencyTo)}/>
                <h1>{result.toLocaleString("en-NG", {style: "currency", currency: currencyTo})}</h1>
         </div>
          </>
    )
    
}
