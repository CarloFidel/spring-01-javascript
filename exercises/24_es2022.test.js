test('24_es2022-1: Class fields and private methods', () => {
  // Crea una classe amb un camp privat i un mètode privat. Afegeix un getter per accedir al camp privat.
  class Person {
    // Resol aquí...
  }

  const person = new Person()
  expect(person.getSecret()).toBe('secret')
  expect(Person.publicField).toBe('public')
})

test('24_es2022-2: at() method for indexing arrays and strings', () => {
  // Utilitza el mètode at() per accedir als elements d'un array i una cadena.
  const array = [1, 2, 3, 4]
  const string = 'hello'

  const lastArrayElement = null // Resol aquí...
  const secondLastStringChar = null // Resol aquí...

  expect(lastArrayElement).toBe(4)
  expect(secondLastStringChar).toBe('l')
})

test('24_es2022-3: Top-level await in modules', async () => {
  // Utilitza await a nivell superior per resoldre una promesa.
  const result = null // Resol aquí...

  expect(result).toBe('Top-level await works!')
})