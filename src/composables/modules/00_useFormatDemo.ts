import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'format',
  useful: ['date', 'format'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').format('${input.format}')`
  },

  run(input, d) {
    return d.format(input.format)
  }
})
