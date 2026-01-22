import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'isBefore',
  useful: ['date', 'date2', 'format', 'interval', 'num'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').isBefore(dayjs('${dayjs(input.date2).format(input.format)}'))`
  },

  run(input, d) {
    return d.isBefore(input.date2) ? 'true' : 'false'
  }
})
