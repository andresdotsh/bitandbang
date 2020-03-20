'use strict'

const fs = require('fs')
const path = require('path')
const boxen = require('boxen')
const chalk = require('chalk')
const R = require('ramda')
const RA = require('ramda-adjunct')

const { gray, magentaBright, whiteBright, greenBright, yellowBright } = chalk

const lines = [
  gray('// Software Developer'),
  '',
  magentaBright('export const ') +
    greenBright('andresdotsh ') +
    magentaBright('= ') +
    whiteBright('() ') +
    magentaBright('=> ') +
    whiteBright('({'),
  whiteBright('  github') +
    magentaBright(': ') +
    yellowBright(`'https://github.com/andresdotsh'`) +
    whiteBright(','),
  whiteBright('  twitter') +
    magentaBright(': ') +
    yellowBright(`'https://twitter.com/andresdotsh'`) +
    whiteBright(','),
  whiteBright('  name') +
    magentaBright(': ') +
    yellowBright(`'Andres'`),
  whiteBright('})')
]

const output = R.pipe(
  RA.mapIndexed((line, lineIndex) => {
    const lineNumber = lineIndex + 1
    const lineStr =
      lineNumber > 9 ? gray(`${lineNumber}  `) : gray(` ${lineNumber}  `)

    return R.join('', [lineStr, line, '\n'])
  }),
  R.join('')
)(lines)

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'single'
}

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  yellowBright(boxen(output, boxenOptions))
)
