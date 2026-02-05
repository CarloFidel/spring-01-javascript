test('19_iterators-1: can get the iterator from an array', () => {
  const array = [1, 2, 3]
  // NO MIRIS ELS SEGÜENTS TESTS!

  const iterator = array[Symbol.iterator]() // com obtens l'iterador?
  expect(typeof iterator.next === 'function').toBe(true)
})

test('19_iterators-2: can next() the iterator multiple times', () => {
  const string = 'hello' // <-- SÍ, això és iterable!
  const iterator = string[Symbol.iterator]()
  expect(iterator.next()).toEqual({ value: 'h', done: false })
  expect(iterator.next()).toEqual({ value: 'e', done: false })
  expect(iterator.next()).toEqual({ value: 'l', done: false })
  expect(iterator.next()).toEqual({ value: 'l', done: false })
  expect(iterator.next()).toEqual({ value: 'o', done: false })
  expect(iterator.next()).toEqual({ value: undefined, done: true })
  expect(iterator.next()).toEqual({ value: undefined, done: true })
})

test('19_iterators-3: can iterate over an iterable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  // escriu un bucle for .. of
  for (const valor of array) {
    sum += valor
  }
  // que sumi tots els elements de l'array
  // ex: `sum += val`
  expect(sum).toBe(6)
})

test('19_iterators-4: can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  // utilitza destructuring i l'operador ... per crear una
  // variable `rest` que només tingui els dos últims elements.
  const [,...rest] = set
  expect(rest).toEqual([2, 3])
})

test('19_iterators-5: can create a custom iterator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // afegeix una funció iteradora aquí que utilitzi els valors
    // min i max d'aquest objecte per generar un nombre aleatori
    // de números dins del rang min i max, cadascun aleatori dins
    // del mateix rang.
    // Per exemple: [14, 18, 16, 14, 11, 19, 16, 15, 19, 18, 15]
    // Fes-ho sense utilitzar una funció generadora

    [Symbol.iterator]() {
      const {max, min} = this
      const randomNumbers = []
      const amountOfNumbers = Math.floor(Math.random() * (max - min + 1)) + min

      for (let i = 0; i < amountOfNumbers; i++) {
        randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
      }
      let index = 0
      return {
        next() {
          if (index < randomNumbers.length) {
            return { value: randomNumbers[index++], done: false }
          } else {
            return { value: undefined, done: true }
          }
        }
      }
    }
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})

test('19_iterators-6: can create a custom iterator with a generator', () => {
  const randomRandomNumbersGenerator = {
    max: 20,
    min: 10,
    // reescriu l'exemple anterior com una funció generadora
    *[Symbol.iterator]() {
      const {max, min} = this
      const amountOfNumbers = Math.floor(Math.random() * (max - min + 1)) + min

      for (let i = 0; i < amountOfNumbers; i++) {
        yield Math.floor(Math.random() * (max - min + 1)) + min
      }
    } 
  }

  expect(iteratorWorks()).toBe(true)

  function iteratorWorks() {
    const randomNumbers = [...randomRandomNumbersGenerator]
    const {max, min} = randomRandomNumbersGenerator
    const tooManyNumbers = randomNumbers.length > max
    const tooFewNumbers = randomNumbers.length < min
    const numbersInBounds = randomNumbers.every(num => num <= max && num >= min)
    return !tooManyNumbers && !tooFewNumbers && numbersInBounds
  }
})
