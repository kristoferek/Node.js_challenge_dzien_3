const fs = require('fs')
const crypto = require('crypto')

const path = process.argv[2]

if (path) {
  fs.readFile(path, 'utf8', (err, file) => {
    if (err) console.log('Błąd odczytu pliku', err)
    else {
      const hash = crypto.createHmac('sha256', file).digest('hex')
      console.log('Hash: ', hash)
    }
  })
} else console.log('Błędny ścieżka do pliku')
