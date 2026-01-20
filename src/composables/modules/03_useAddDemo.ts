import { createFuncDemo } from '../createFuncDemo'
import dayjs from 'dayjs'

export default createFuncDemo({
  title: 'add',
  useful: ['date', 'format', 'interval'],

  code(input) {
    const dateStr = dayjs(input.date).format(input.format)
    return `dayjs('${dateStr}').add(1, '${input.interval}').format('${input.format}')`
  },

  run(input, d) {
    return d.add(1, input.interval).format(input.format)
  }
})
