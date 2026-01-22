import { reactive, ref, computed, watch } from 'vue'
import dayjs from 'dayjs'
import type { FuncInput, FuncDemoReturn } from './index'

interface CreateFuncDemoOptions {
  title: string
  useful: string[]
  code: (input: FuncInput) => string
  run: (input: FuncInput, d: dayjs.Dayjs) => string
}

export function createFuncDemo(options: CreateFuncDemoOptions): () => FuncDemoReturn {
  return function useFuncDemo(): FuncDemoReturn {
    const input = reactive<FuncInput>({
      date: new Date(),
      date2: new Date(),
      format: 'YYYY-MM-DD HH:mm:ss',
      period: 'year',
      interval: 'year',
      num: 1,
      autoRun: true
    })

    const result = ref('')
    const error = ref<string | null>(null)

    const code = computed(() => options.code(input))

    function execute() {
      try {
        const d = dayjs(input.date)
        if (!d.isValid()) {
          throw new Error('Invalid Date')
        }

        result.value = options.run(input, d)
        error.value = null
      } catch (e: any) {
        result.value = ''
        error.value = e?.message || 'Execution Error'
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
      title: options.title,
      useful: options.useful,
      input,
      code,
      result,
      error,
      execute
    }
  }
}
