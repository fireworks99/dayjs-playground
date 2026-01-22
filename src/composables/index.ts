import type { ManipulateType, OpUnitType } from "dayjs"
import type { Ref } from "vue"

export interface FuncInput {
  date: Date
  date2: Date
  format: string
  period: OpUnitType
  interval: ManipulateType
  num: number
  autoRun: boolean
}

export interface FuncDemoReturn {
  title: string,
  useful: Array<string>,
  input: FuncInput,
  code: Ref<string>
  result: Ref<string>
  error: Ref<string | null>
  execute: () => void
}

const modulesFiles = import.meta.glob('./modules/*.ts', { eager: true });
const modules = Object.keys(modulesFiles).map((modulePath) => {
  const mod = modulesFiles[modulePath] as { default: any };
  return mod.default as () => FuncDemoReturn;
});

export default function useFuncDemos(): FuncDemoReturn[] {
  return modules.map(useFuncDemo => useFuncDemo());
}