test('20_generators-1: should yield objects with value and done properties', () => {
  const odds = giveMeOneOddNumber()

  // Comprova que els valors generats tenen les propietats value i done
  expect(odds.next().value).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(odds.next().value).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(odds.next().done).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  odds.next()
  expect(odds.next().value).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
  expect(odds.next().done).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test('20_generators-2: can be iterated over', () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0

  // ATENCIÓ, AIXÒ ÉS BLOQUEJANT/SINCRÒNIC!
  // Els generadors no són async/await, aquests poden estar a ES2016
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  expect(sum).toBe(/* INTRODUEIX LA TEVA RESPOSTA AQUÍ */)
})