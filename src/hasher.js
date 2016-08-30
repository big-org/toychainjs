const crypto = require('crypto')

class Hasher {
  static hashIt (obj, serializer) {
    return crypto.createHash('sha256').update(serializer.serialize(obj)).digest('hex')
  }
}
export default Hasher
