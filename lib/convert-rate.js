export async function getConvertRate() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "bzdD6lGM6xAQIMD70QO7wRZaghMYKW1L");
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
  };
    const exRate = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions) 
    const convertRate = await exRate.json()
  // console.log("3. USDMYR:", convertRate.result)
    return +convertRate.result
  }
  