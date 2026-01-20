import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'endOf',
  useful: ['date', 'format', 'period'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').endOf('${input.period}').format('${input.format}')`
  },

  run(input, d) {
    return d.endOf(input.period).format(input.format)
  }
})
