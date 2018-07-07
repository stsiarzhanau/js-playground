import add from './index'

describe('add', () => {
  it('should return arguments` sum', () => {
    expect(add(1, 2)).to.equal(3)
  })
})
