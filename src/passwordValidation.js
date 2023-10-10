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

  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  let regex = /^(?=.*[A-Za-z])(?=.*\d).{0,1}\w{9}$/
  const numbersInString = password.match(/\d+/)
  if(numbersInString && (numbersInString.length === 1 && JSON.stringify(numbersInString[0].split('')) === JSON.stringify(numbersInString[0].split('').sort()) || JSON.stringify(numbersInString[0].split('')) === JSON.stringify(numbersInString[0].split('').sort().reverse()))) return false
  if(!regex.test(password) || forbiddenPasswords.includes(password)) return false
  regex = /^(?=.*[A-Z])(?=.*[a-z]).+/
  if(!regex.test(password)) return false
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}