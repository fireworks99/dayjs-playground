<template>
  <el-card header="Result" style="text-align: center;">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else class="result">{{ result }}</div>
    <div>
      <el-button v-if="result" size="small" style="margin-top: 8px" @click="copy">
        复制结果
      </el-button>
    </div>

  </el-card>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const props = defineProps<{
  result: string
  error: string | null
}>()

function copy() {
  navigator.clipboard.writeText(props.result)
  ElMessage.success('结果已复制')
}
</script>

<style scoped>
.result {
  font-size: 16px;
  font-weight: 500;
}

.error {
  color: #ef4444;
}
</style>
