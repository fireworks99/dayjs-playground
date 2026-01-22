import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'subtract',
  useful: ['date', 'format', 'interval', 'num'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').subtract(${input.num}, '${input.interval}').format('${input.format}')`
  },

  run(input, d) {
    return d.subtract(input.num, input.interval).format(input.format)
  }
})
