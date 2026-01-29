test('19_iterators-1: can get the iterator from an array', () => {
  const array = [1, 2, 3]
  // NO MIRIS ELS SEGÜENTS TESTS!
  const iterator = '?' // com obtens l'iterador?
  expect(typeof iterator.next === 'function').toBe(true)
})

test('19_iterators-2: can next() the iterator multiple times', () => {
  const string = 'hello' // <-- SÍ, això és iterable!
  const iterator = string[Symbol.iterator]()
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(iterator.next()).toEqual(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
})

test('19_iterators-3: can iterate over an iterable with for .. of', () => {
  const array = [1, 2, 3]
  let sum = 0
  // escriu un bucle for .. of
  // que sumi tots els elements de l'array
  // ex: `sum += val`
  expect(sum).toBe(6)
})

test('19_iterators-4: can use the ... operator on the iterator', () => {
  const set = new Set([1, 2, 2, 3])
  // utilitza destructuring i l'operador ... per crear una
  // variable `rest` que només tingui els dos últims elements.
  const [rest] = set
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
