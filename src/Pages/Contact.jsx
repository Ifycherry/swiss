import Header from "../Component/Header";
import { useState } from "react";
export default function Contact () {

const [currencyForm, setCurrencyFrom] = useState("USD");
const [currencyTo, setCurrencyTo] = useState("NGN");
const [amt, setAmt] = useState(0);
const [result, setResult] = useState(0.00)

const convert= (amt, currencyFrom, currencyTo)=>{
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
    <h1>Hello contact</h1>
    <div>
        <select defaultValue={currencyForm} onChange={(e)=> setCurrencyFrom(e.target.value)}>
            <select>Currency From</select>
             <option value="USD">USD</option>
             <option value="EUR">EUR</option>
             <option value="NGN">NGN</option>
             <option value="NOK">NOK</option>
             </select>
             <input type="number" name="" id="" placeholder="Enter Amount" onChange={(e)=> setAmt(e.target.value)}/>
             <select defaultValue={currencyTo} onChange={(e)=> setCurrencyTo(e.target.value)}>
             <select>Currency To</select>
             <option value="USD">USD</option>
             <option value="EUR">EUR</option>
             <option value="NGN">NGN</option>
             <option value="NOK">NOK</option>
            </select>
            <input type="submit" onClick={(e)=> convert(amt, currencyForm, currencyTo)} />
            <h1>{result.toLocaleString("en-NG", {style: "currency", currency: currencyTo})}</h1>

    </div>
    </>
)
 }