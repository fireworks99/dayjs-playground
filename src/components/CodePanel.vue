<template>
  <el-card header="Code" style="text-align: center;">
    <pre class="code" style="text-align: left;"><code>{{ props.code }}</code></pre>

    <div class="actions">
      <el-button size="small" @click="copy">复制</el-button>
      <el-button size="small" type="primary" @click="$emit('run')">
        执行
      </el-button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { Ref } from 'vue';

const props = defineProps<{
  code: Ref<string>
}>()

function copy() {
  navigator.clipboard.writeText(props.code.value)
  ElMessage.success('代码已复制')
}
</script>

<style scoped>
.code {
  background: #0f172a;
  color: #e5e7eb;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
}
</style>
