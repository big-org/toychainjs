import Serializer from '../src/serializer'
import { expect } from 'chai'

describe('Serializer', () => {

  var obj1 = {name: 'Nikhil', age: 28}
  var obj2 = {name: 'Toychain', age: 1}
  var obj3 = {name: 'Nikhil', age: 28}

  it('Serializer String check', () => {
    var s = new Serializer()
    var a = s.serialize(obj1)
    expect(a).to.be.an('string');
  })

  it('Serializer Inequality check', () => {
    var s = new Serializer()
    var a = s.serialize(obj1)
    var b = s.serialize(obj2)
    expect(a).not.to.equal(b);
  })

  it('Serializer Equality check', () => {
    var s = new Serializer()
    var a = s.serialize(obj1)
    var b = s.serialize(obj3)
    expect(a).to.equal(b);
  })

})
