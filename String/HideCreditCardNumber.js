
function hideCreditCardNumber(cardNumber) {
  const lastFourDigits = cardNumber.slice(-4); // Extract the last four digits
  const hiddenDigits = '*'.repeat(cardNumber.length - 4); // Replace the rest of the digits with asterisks
  return hiddenDigits + lastFourDigits; // Concatenate the hidden digits with the last four digits
}

const creditCardNumber = '1234567890123456';
const hiddenCardNumber = hideCreditCardNumber(creditCardNumber);
console.log(hiddenCardNumber); // Output: "************3456"




// Cách 2
const fullNumber = "3830230203019952023";


const last4Digitals = fullNumber.slice(-4);

const maskedNumber = last4Digitals.padStart(fullNumber.length, "*");

console.log(maskedNumber);


