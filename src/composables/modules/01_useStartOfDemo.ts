import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'startOf',
  useful: ['date', 'format', 'period'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').startOf('${input.period}').format('${input.format}')`
  },

  run(input, d) {
    return d.startOf(input.period).format(input.format)
  }
})
