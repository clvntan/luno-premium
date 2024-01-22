export async function getConvertRate() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "1ATu5XBw8952gIXug1wCO8zpyY3m2bxi");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

  try {
    const exRate = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions);
    const convertRate = await exRate.json();
    if (exRate.status === 200) {
      return +convertRate.result;
  } else {
      throw "Fetch error"
  }
  } catch (err) {
    if(err == "Fetch error") {
      return "Convertion rate is not retrivable at this time, please try again"
  }
  throw err;
  }
};



// export async function getConvertRate() {
//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "1ATu5XBw8952gIXug1wCO8zpyY3m2bxi");

//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };

//   const exRate = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions) ;
//   const convertRate = await exRate.json();
// // console.log("3. USDMYR:", convertRate.result)
//   return +convertRate.result;
// }
