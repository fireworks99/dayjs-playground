<template>
  <el-card header="Input" style="height: 100%; text-align: center;">
    <div class="flex_center" style="height: 100%;">
      <el-form>
        <el-form-item label="时间">
          <el-date-picker v-model="props.state.date" type="datetime" style="width: 100%;" />
        </el-form-item>

        <el-form-item label="格式">
          <el-select v-model="props.state.format">
            <el-option v-for="str in formatArr" :key="str" :label="str" :value="str" />
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
import { reactive } from 'vue';

const props = defineProps<{
  state: FormatState
}>()

const formatArr = reactive(['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD',
  'YYYY/MM/DD', 'MM/DD/YYYY', 'DD/MM/YYYY'])
</script>