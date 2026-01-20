<template>
  <el-card header="Input" style="height: 100%; text-align: center;">
    <div class="flex_center" style="height: 100%;">
      <el-form>
        <el-form-item label="时间" v-show="props.useful.includes('date')">
          <el-date-picker v-model="props.input.date" type="datetime" style="width: 100%;" />
        </el-form-item>

        <el-form-item label="格式" v-show="props.useful.includes('format')">
          <el-select v-model="props.input.format">
            <el-option v-for="str in formatArr" :key="str" :label="str" :value="str" />
          </el-select>
        </el-form-item>

        <el-form-item label="周期" v-show="props.useful.includes('period')">
          <el-select v-model="props.input.period">
            <el-option v-for="item in periodArr" :key="item.value" :label="item.value" 
              :value="item.value" :disabled="item.disabled" />
          </el-select>
        </el-form-item>

        <el-form-item label="间隔" v-show="props.useful.includes('interval')">
          <el-select v-model="props.input.interval">
            <el-option v-for="item in intervalArr" :key="item.value" :label="item.value" 
              :value="item.value" :disabled="item.disabled" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-switch v-model="props.input.autoRun" />
          <span style="margin-left: 8px">自动执行</span>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type { FuncInput } from '@/composables/';

const props = defineProps<{
  input: FuncInput,
  useful: Array<string>,
}>()

const formatArr = ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD',
  'YYYY/MM/DD', 'MM/DD/YYYY', 'DD/MM/YYYY']

const strArr = [
  { value: 'year', disabled: false },
  { value: 'month', disabled: false },
  { value: 'week', disabled: false },
  { value: 'day', disabled: false },
  { value: 'hour', disabled: false },
  { value: 'minute', disabled: false },
  { value: 'second', disabled: false },
]

const periodArr = strArr.concat([
  { value: 'date', disabled: false },
  { value: 'quarter', disabled: true },
  { value: 'isoWeek', disabled: true }
])

const intervalArr = strArr.concat([
   { value: 'quarter', disabled: true },
   { value: 'millisecond', disabled: false }
])
</script>