test('21_reflect-1: Reflect.apply can be used to call a function', () => {
  const person = {
    name: 'Fred',
    sayHi(greeting, noun) {
      return `${greeting} ${noun}! My name is ${this.name}`
    },
  }

  const result = null // utilitza Reflect.apply per invocar person.sayHi
  expect(result).toBe('Hey there Jaimee! My name is Fred')
})

test('21_reflect-2: Reflect.deleteProperty can be used instead of the `delete` keyword', () => {
  const person = {name: 'Joan', age: 56}
  Reflect.defineProperty(person, 'protected', {
    configurable: false,
    value: 'YOU CANNOT GET RID OF ME!',
  })
  // utilitza Reflect.deleteProperty per eliminar la propietat age de l'objecte person
  const ageDeleted = delete person.age
  const protectedDeleted = delete person.protected
  expect(person.age).not.toBeDefined()
  expect(ageDeleted).toBe(true)
  expect(person.protected).toBe('YOU CANNOT GET RID OF ME!')
  expect(protectedDeleted).toBe(false)
})

test(`21_reflect-3: Reflect.ownKeys returns the object's own (not inherited) keys (including symbols)`, () => {
  const exists = Symbol('existance')
  const person = {human: true, [exists]: true}
  const favoriteFeature = Symbol('Fav Feat')
  const kyle = {
    __proto__: person,
    awesome: true,
    [favoriteFeature]: 'destructuring',
  }
  Reflect.defineProperty(kyle, 'favoriteLanguage', {
    value: 'JS',
    configurable: false,
    enumerable: false,
  })
  // pista, les claus estaran en l'ordre en què s'afegeixen a l'objecte
  // això serà el cas per a la majoria d'entorns, tot i que generalment no és
  // una bona idea confiar en aquest fet, ja que no està especificat a l'especificació.
  expect(Object.keys(kyle)).toEqual([
    /* INTRODUEIX LA TEVA RESPOSTA AQUÍ */
  ])
  expect(Object.getOwnPropertyNames(kyle)).toEqual([
    /* INTRODUEIX LA TEVA RESPOSTA AQUÍ */
  ])
  expect(Object.getOwnPropertySymbols(kyle)).toEqual([
    /* INTRODUEIX LA TEVA RESPOSTA AQUÍ */
  ])
  expect(Reflect.ownKeys(kyle)).toEqual([
    /* INTRODUEIX LA TEVA RESPOSTA AQUÍ */
  ])
})
