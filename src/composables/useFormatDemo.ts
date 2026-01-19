import { reactive, ref, computed, watch } from 'vue'
import dayjs from 'dayjs'

export interface FormatState {
  date: Date
  format: string
  autoRun: boolean
}

export function generateFormatCode(state: FormatState): string {
  const dateStr = state.date?.toISOString() || state.date

  return `dayjs('${dateStr}').format('${state.format}')`.trim()
}


export function useFormatDemo() {
  const state = reactive<FormatState>({
    date: new Date(),
    format: 'YYYY-MM-DD HH:mm:ss',
    autoRun: true
  })

  const result = ref<string>('')
  const error = ref<string | null>(null)

  const code = computed(() => generateFormatCode(state))

  function execute() {
    try {
      const d = dayjs(state.date)
      if (!d.isValid()) {
        throw new Error('Invalid Date')
      }
      result.value = d.format(state.format)
      error.value = null
    } catch (e: any) {
      result.value = ''
      error.value = e.message || 'Execution Error'
    }
  }

  watch(
    () => ({ ...state }),
    () => {
      if (state.autoRun) {
        execute()
      }
    },
    { deep: true, immediate: true }
  )

  return {
    state,
    code,
    result,
    error,
    execute
  }
}
