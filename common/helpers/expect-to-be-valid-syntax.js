import vm from 'node:vm'

expect.extend({
  toBeValidSyntax(actual) {
    let error
    try {
      // Use vm.Script to validate syntax
      new vm.Script(actual)
    } catch (e) {
      error = e
    }
    if (!error) {
      return {pass: true}
    }

    // Extract error message and stack manually
    const message = error.message || 'Unknown error'
    const stack = error.stack || ''

    return {
      pass: false,
      message:
        this.utils.matcherHint('.toBeValidSyntax', 'codeString', '') +
        '\n\n' +
        `Expected valid syntax. But it was not.\n` +
        `Parsing the code in the string threw:\n` +
        this.utils.RECEIVED_COLOR(
          `  ${message}\n\nStack trace:\n${stack}`,
        ),
    }
  },
})