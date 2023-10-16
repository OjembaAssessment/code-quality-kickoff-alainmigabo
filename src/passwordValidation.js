export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(password.length !== 10) return false

  // If password doesn't include characters and numbers or includes any special character return false 
  if (!/^(?=.*[A-Za-z])(?=.*\d).{0,1}\w{9}$/.test(password)) return false

  // If a password only include uppercase or lowercase should return false
  if (!/^(?=.*[A-Z])(?=.*[a-z]).+/.test(password)) return false

  // If a password is in the forbidden passwords we should return false too
  if(forbiddenPasswords.includes(password)) return false

  // A password with directly ascending or descending order should return false too
  if(isAscendingOrDescending(password)) return false

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}

function isAscendingOrDescending(string){
  const numbersInString = string.match(/\d+/g)
  
  // Return false if there is no block of numbers with more than three digits
  if(numbersInString.filter( number => number.length > 2).length === 0) return false

  // Return whether or not there is a block of number in string that is ascending or descending
  return numbersInString.some( numberInString => {
    if (new Set(numberInString).size === 1) return false
    if (JSON.stringify(numberInString.split('').sort()) === JSON.stringify(numberInString.split('')) ||
        JSON.stringify(numberInString.split('').sort().reverse()) === JSON.stringify(numberInString.split(''))) return true
  })
}