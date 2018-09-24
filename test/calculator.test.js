import assert from 'assert'
import Calculator from '../src'

describe('Calculator', () => {

  it('add two positive numbers together', () => {
    // Arrange
    const x = 1
    const y = 1

    // Act
    const result = Calculator.add(x, y)

    // Assert
    assert.equal(result, 2)
  })

  it('add two positive numbers together', () => {
    // Arrange
    const x = 2
    const y = 4

    // Act
    const result = Calculator.add(y, x)

    // Assert
    assert.equal(result, 6)
  })

  it('add two positive numbers together', () => {
    // Arrange
    const x = (1 + 4)
    const y = (5 + 1)

    // Act
    const result = Calculator.add(x, y)

    // Assert
    assert.equal(result, 11)
  })

  it('add one negative number and one positive together', () => {
        // Arrange
        const x = -8
        const y = 1

        // Act
        const result = Calculator.add(x, y)

        // Assert
        assert.equal(result, -7)
    })

  it('add two positive numbers together', () => {
        // Arrange
        const x = 4
        const y = x

        // Act
        const result = Calculator.add(y, x)

        // Assert
        assert.equal(result, 8)
    })

  it('add two negative numbers together', () => {
    const x = -8
    const y = -8

    const result = Calculator.add(x, y)

    assert.equal(result, -16)
})

  it('subtract two positive numbers together', () => {
    const x = 10
    const y = 5

    const result = Calculator.subtract(x, y)

    assert.equal(result, 5)
  })

  it('subtract two negative numbers together', () => {
    const x = -20
    const y = -40

    const result = Calculator.subtract(x, y)

    assert.equal(result, 20)
  })

  it('subtract two functions together', () => {
    const x = (60 * 20)
    const y = (20 * 40)

    const result = Calculator.subtract(x, y)

    assert.equal(result, 400)
  })

  it('subtract one positive number and one negative number together', () => {
    const x = -400
    const y = 200

    const result = Calculator.subtract(x, y)

    assert.equal(result, -600)
  })

  it('multiply two positive numbers together', () => {
    const x = 10
    const y = 5

    const result = Calculator.multiply(x, y)

    assert.equal(result, 50)
  })

  it('multiply one positive number and one negative number together', () => {
    const x = -12
    const y = 5

    const result = Calculator.multiply(x, y)

    assert.equal(result, -60)
  })

  it('multiply two functions together', () => {
    const x = (3 * 2)
    const y = (4 * 2)

    const result = Calculator.multiply(x, y)

    assert.equal(result, 48)
  })

  it('multiply two negative numbers together', () => {
    const x = -10
    const y = -20

    const result = Calculator.multiply(x, y)

    assert.equal(result, 200)
  })

  it('divide two positive numbers together', () => {
    const x = 100
    const y = 5

    const result = Calculator.divide(x, y)

    assert.equal(result, 20)
  })

  it('divide two negative numbers together', () => {
    const x = -100
    const y = -5

    const result = Calculator.divide(x, y)

    assert.equal(result, 20)
  })

  it('divide one positive and one negative number together', () => {
    const x = -400
    const y = 100

    const result = Calculator.divide(x, y)

    assert.equal(result, -4)
  })

  it('divide two functions together', () => {
    const x = (20 * 5)
    const y = (8 + 2)

    const result = Calculator.divide(x, y)

    assert.equal(result, 10)
  })

    // Testing for over exposure from the src/index.js file.
  // The js file doens't export the add function by default, and we must make it export in the export default
  // Use this test when you have developers that over expose things, "Protect the privates"
  // it(`does not expose the add function without the default`, () => {
  //   assert.fail(add(1, 2))
  // })
});