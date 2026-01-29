test('05_template-literals-1: should support string interpolation', () => {
  const person = {
    name: 'Kent C. Dodds',
    friends: [
      'Brooke Dodds',
      'Matt Zabriskie',
      'Aaron Frost',
      'Dave Geddes',
      'Joe Eames',
      'Ryan Florence',
    ],
  }
  // construeix una cadena utilitzant la interpolació de literals de plantilla
  const personsFriends = ``
  expect(personsFriends).toBe(
    'Kent C. Dodds has 6 friends: Brooke Dodds, Matt Zabriskie, Aaron Frost, Dave Geddes, Joe Eames, Ryan Florence',
  )
})

test('05_template-literals-2: should support multi-line strings', () => {
  // construeix una cadena amb múltiples línies sense necessitat de caràcters de nova línia escapats
  const multiLine = ``
  expect(multiLine).toBe('\n    How cool\n    is this!?\n  ')
})

test('05_template-literals-3: should support string escaping', () => {
  // escapa correctament una cadena en un literal de plantilla per a cadascun d'aquests casos
  expect(``).toBe('Hi\nthere!')
  expect(``).toBe('This is `escaped` backticks')
})

//////// EXTRA CREDIT ////////

// és probable que no utilitzis sovint l'etiquetatge, però pot ser útil!
test.skip('05_template-literals-4: should call the tagging function', () => {
  const tagIt = (literalString, ...interpolatedParts) => {
    // implementa aquesta funció per fer que el test passi
    return 'fixme'
  }
  const noun = 'World'
  const emotion = 'happy'
  const result = tagIt`Hello ${noun}! Are you feeling ${emotion} today?`
  expect(result).toBe(
    'Hello super-cool World! Are you feeling really happy today?',
  )

})
