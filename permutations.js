/* based on this algorithm: https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/ */

function permutations(original) {
  const result = [];

  function calculateAllPermutationsForCharacterPosition (string, position) {
    if (position === string.length) return;
    for (let i = position; i < string.length; i++) {
      const permutationsForChar = swapCharWithAllCharsAfterIt(string, i);
      permutationsForChar.forEach(permutation => {
        if (!result.includes(permutation)) result.push(permutation);
        calculateAllPermutationsForCharacterPosition(permutation, i + 1)
      });
    }
  }

  calculateAllPermutationsForCharacterPosition(original, 0);
  return result;
}

function swapCharWithAllCharsAfterIt(string, n) {
  const permutations = [];
  for (let i = n; i < string.length; i++) {
    const array = string.split('');
    array[n] = array[i];
    array[i] = string[n];
    permutations.push(array.join(''));
  }
  return permutations;
}

module.exports = permutations;
