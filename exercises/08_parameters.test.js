test('08_parameters-1: can be triggered when the incoming argument is undefined', () => {
  const getName = (name = 'Mercury') => name

  // Comprova que el valor per defecte només s'utilitza quan l'argument és `undefined`
  expect(getName('Aaron')).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName(undefined)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName(null)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName()).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-2: aren\'t included in arguments', () => {
  const getName = (name = 'Mercury') => arguments.length

  // Comprova que els paràmetres per defecte no formen part de l'objecte `arguments`
  expect(getName('Aaron')).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName(null)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName()).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-3: can trigger a function call', () => {
  let triggerCount = 0

  const getName = (name = getDefault()) => name

  const getDefault = () => {
    triggerCount++
    return 'Mercury'
  }

  // Comprova que la funció per defecte només es crida quan és necessari
  expect(triggerCount).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName('Aaron')).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName()).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(getName(undefined)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(triggerCount).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-4: catch non-specified params', () => {
  const resty = (first, second, ...others) => others

  // Comprova que els paràmetres rest contenen els arguments no especificats
  expect(resty().length).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1).length).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1, 2).length).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1, 2, 3).length).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10).length,
  ).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-5: has a different length than `arguments`', () => {
  const resty = (first, second, ...others) => others.length === arguments.length

  // Comprova que la longitud dels paràmetres rest és diferent de `arguments`
  expect(resty()).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1, 2)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(resty(1, 2, 3)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(
    resty(1, 2, 3, undefined, 5, undefined, 7, undefined, 9, 10),
  ).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-6: is an actual array, unlike arguments', () => {
  const resty = (...args) => args

  const argy = () => arguments

  const args = argy(1, 2, 3)
  const rests = resty(1, 2, 3)

  // Comprova que els paràmetres rest són un array real, a diferència de `arguments`
  expect(
    Object.getPrototypeOf(args) === Object.getPrototypeOf(rests),
  ).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(args.splice).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(Object.getPrototypeOf(rests)).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
  expect(rests.splice).toBeDefined()
  expect(rests.splice).toBe(/*INTRODUEIX LA TEVA RESPOSTA AQUÍ*/)
})

test('08_parameters-7: it can default all arguments, optionally', () => {
  // Modifica la signatura del mètode `myFunction` per permetre que
  // tots els arguments siguin opcionals

  const myFunction = ({name, age, favoriteBand} = {}) => {
    expect(name).toBeDefined()
    expect(age).toBeDefined()
    expect(favoriteBand).toBeDefined()
  }

  myFunction({name: 'Axel', age: 37, favoriteBand: 'Taylor Swift'})
  myFunction({name: 'Axel', age: 37})
  myFunction({name: 'Axel'})
  myFunction({})
  myFunction()
})

/*
eslint
  no-unused-vars:0
  prefer-rest-params:0
*/
