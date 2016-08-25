import Hasher from '../src/hasher'
import Serializer from '../src/serializer'
import { expect } from 'chai'
const crypto = require('crypto')

describe('Hasher', () => {
  var string = 'toychain'
  var string2 = 'doychain'

  var hashtoychain = crypto.createHash('sha256').update(Serializer.serialize(string)).digest('hex')
  var hashstring2 = crypto.createHash('sha256').update(Serializer.serialize(string2)).digest('hex')

  it('Test Hashing Equality', () => {
    var x = Hasher.hashIt(string, Serializer)
    expect(x).to.equal(hashtoychain)
  })

  it('Test Hashing Inequality', () => {
    var x = Hasher.hashIt(string, Serializer)
    expect(x).not.to.equal(hashstring2)
  })

})
