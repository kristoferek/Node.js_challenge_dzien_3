const { ENCODINGS, HASH_ALGORITHMS, PASSWORDS, MY_PWD_HASH } = require('./constants');
const { createHmac } = require('crypto')


const isHashedPassword = (algorithm, password, format) =>
  createHmac(algorithm, password).digest(format) === MY_PWD_HASH


HASH_ALGORITHMS.forEach(algorithm =>
  PASSWORDS.forEach(password =>
    ENCODINGS.forEach(format =>
      isHashedPassword(algorithm, password, format)
        ? console.log(`'${password}' was hashed using '${algorithm}' algorithm in '${format}' format`)
        : null
    )))
