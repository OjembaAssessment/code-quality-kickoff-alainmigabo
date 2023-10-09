/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countRbt(ls) {
  const arrayOfCharacters = ls.split('')
  const arrayOfRs = arrayOfCharacters.filter(character => character == 'R')
  const numberOfRs = arrayOfRs.length
  return numberOfRs
}
