const permutations = require('./permutations');

function assertSimilar(toCheck, expected, message, skip) {
  if (skip) return;
  const logGreen = console.log.bind(null, '\x1b[32m')
  const logRed = console.log.bind(null, '\x1b[31m')
  const stringify = value => JSON.stringify(value, null, 2)
  try {
    const hasExpectedValues = expected.reduce((acc, value) => acc && toCheck.includes(value), true)
    if (!hasExpectedValues) throw new Error();
    logGreen('\n', '✓', message)
  } catch (err) {
    logRed('\n', '✘', message, '\n', 'Expected ', stringify(toCheck), ' to equal ', stringify(expected));
  }
}

let result;

result = permutations('a');
assertSimilar(result, ['a'],'returns an array with the character when the string has length of 1');

result = permutations('ab')
assertSimilar(result, ['ab', 'ba'],'returns the permutations of a string with two characters');

result = permutations('aabb');
assertSimilar(result, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'],'returns the permutations of a longer string');

result = permutations('abc');
assertSimilar(result, ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], 'example 1');

result = permutations('abcd');
assertSimilar(result, ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'], 'example 2');

result = permutations('bcad');
assertSimilar(result, ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'], 'example 3');

result = permutations('dcba');
assertSimilar(result, ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'], 'example 4');

result = permutations('aa');
assertSimilar(result, ['aa'], 'duplicate letters')

result = permutations('aabb');
assertSimilar(result, ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'], 'duplicate letters 2')

result = permutations('aaaab');
assertSimilar(result, ['aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa'], 'duplicate letters 3')