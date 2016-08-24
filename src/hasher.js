const crypto = require('crypto')

class Hasher {
  constructor (theString) {
    this.string = theString.toString()
  }
  hashIt () {
    return crypto.createHash('sha256').update(this.string).digest('hex')
  }
}
export default Hasher
