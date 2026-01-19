<template>
  <el-card header="Input" style="height: 100%; text-align: center;">
    <div class="flex_center" style="height: 100%;">
      <el-form>
        <el-form-item label="时间">
          <el-date-picker v-model="props.state.date" type="datetime" style="width: 100%;" />
        </el-form-item>

        <el-form-item label="格式">
          <el-select v-model="props.state.format">
            <el-option label="YYYY-MM-DD" value="YYYY-MM-DD" />
            <el-option label="YYYY-MM-DD HH:mm:ss" value="YYYY-MM-DD HH:mm:ss" />
            <el-option label="YYYY/MM/DD" value="YYYY/MM/DD" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-switch v-model="props.state.autoRun" />
          <span style="margin-left: 8px">自动执行</span>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import type { FormatState } from '@/composables/useFormatDemo';

const props = defineProps<{
  state: FormatState
}>()
</script>