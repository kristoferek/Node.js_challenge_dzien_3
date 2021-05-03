const { createDecipher } = require('crypto')
const { ALGORITHMS } = require('./constants')

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';
const SENTENCE = 'Pobawmy się jak komputerowy Detektyw :)'

const password = SENTENCE.split(' ').reduce((pass, word) => {
  return pass + (word.length > 1
    ? word[0] + word[word.length - 1]
    : word[0])
}, '')

const decodeText = (text, algorithm, password) => {
  const decipher = createDecipher(algorithm, password)
  let decrypted = decipher.update(text, 'hex', 'utf8')
  try {
    return decrypted + decipher.final('utf8')
  } catch (err) {
    console.log(`Błąd deszyfrowania ${algorithm} - prawdopodobnie niepoprawne hasło: ${password}`)
    return ''
  }
}
ALGORITHMS.forEach(algorithm => {
  const decryptionResult = decodeText(ENCRYPTED_TEXT, algorithm, password)
  if (decryptionResult)
    console.log(`Rozszyfrowano algorytmem ${algorithm} i hasłem: ${password} \n rezultat: ${decryptionResult}`)
})
