import Serializer from '../src/serializer'
import { expect } from 'chai'

describe('Serializer', () => {

  var obj1 = {name: 'Nikhil', age: 28}
  var obj2 = {name: 'Toychain', age: 1}
  var obj3 = {name: 'Nikhil', age: 28}

  it('Serializer String check', () => {
    var a = Serializer.serialize(obj1)
    expect(a).to.be.an('string');
  })

  it('Serializer Inequality check', () => {
    var a = Serializer.serialize(obj1)
    var b = Serializer.serialize(obj2)
    expect(a).not.to.equal(b);
  })

  it('Serializer Equality check', () => {
    var a = Serializer.serialize(obj1)
    var b = Serializer.serialize(obj3)
    expect(a).to.equal(b);
  })

})
