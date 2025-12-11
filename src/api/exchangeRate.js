const API_KEY = "YOUR_EXCHANGE_RATE_KEY";

export async function convertCurrency(amount, from, to) {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`
  );
  
  const data = await response.json();
  return data.conversion_result;
}
