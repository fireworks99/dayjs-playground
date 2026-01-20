import { reactive, ref, computed, watch } from 'vue'
import dayjs from 'dayjs'
import type { FuncInput } from '../index'

function generateFormatCode(input: FuncInput): string {
  let dateStr = null
  try {
    dateStr = dayjs(input.date).format(input.format)
  } catch (e) { }

  return `dayjs('${dateStr}').startOf('${input.period}').format('${input.format}')`.trim()
}

export default function useFuncDemo() {
  const input = reactive<FuncInput>({
    date: new Date(),
    format: 'YYYY-MM-DD HH:mm:ss',
    period: 'year',
    autoRun: true
  })

  const result = ref<string>('')
  const error = ref<string | null>(null)

  const code = computed(() => generateFormatCode(input))

  function execute() {
    try {
      const d = dayjs(input.date)
      if (!d.isValid()) {
        throw new Error('Invalid Date')
      }
      result.value = d.startOf(input.period).format(input.format)
      error.value = null
    }
    catch (e: any) {
      result.value = ''
      error.value = e.message || 'Execution Error'
    }
  }

  watch(
    () => ({ ...input }),
    () => {
      if (input.autoRun) {
        execute()
      }
    },
    { deep: true, immediate: true }
  )

  return {
    title: 'startOf',
    useful: ['date', 'format', 'period'],
    input,
    code,
    result,
    error,
    execute
  }
}