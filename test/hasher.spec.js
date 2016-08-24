import Hasher from '../src/hasher'
import { expect } from 'chai'
const crypto = require('crypto')

describe('Hasher', () => {
  var string = 'toychain'
  var hashtoychain = crypto.createHash('sha256').update(string).digest('hex')

  it('Hashing "Toychain"', () => {
    var h = new Hasher(string)
    var a = h.hashIt()
    expect(a).to.equal(hashtoychain)
  })

  it('Hashing "Toychain" again', () => {
    var h = new Hasher(string)
    var x = h.hashIt()
    expect(x).to.equal(hashtoychain)
  })

})
