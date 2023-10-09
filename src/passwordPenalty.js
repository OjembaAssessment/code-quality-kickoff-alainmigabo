/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if(!password) return 0
  if (typeof password !== "string") password = String(password);
  const multipleChars = password.match(/(\w)\1+/g)
  if(!multipleChars) return 0
  if(multipleChars.length === 0) return 0
  const pointsArray = multipleChars.map( chars => chars.length > 2 ? 2 : 1 )
  return pointsArray.reduce( (sum,curr) => sum+=curr)
}