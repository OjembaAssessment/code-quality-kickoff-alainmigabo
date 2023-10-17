/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // Return 0 if we don't have a password 
  if(!password) return 0

  if (typeof password !== "string") password = String(password);

  // Get all substrings made by more than one same character
  const multipleChars = password.match(/(\w)\1+/g)

  // Return 0 if there is no repeating characters
  if(!multipleChars) return 0

  return multipleChars.map( chars => chars.length > 2 ? 2 : 1 ).reduce( (sum,curr) => sum+=curr)
}