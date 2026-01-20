<template>
  <div class="demo_wrapper">
    <div class="header">{{ props.funcDemoReturn.title }}</div>
    <div class="content">
      <div class="left">
        <InputPanel :input="props.funcDemoReturn.input" :useful="props.funcDemoReturn.useful"/>
      </div>
      <div class="right">
        <CodePanel :code="props.funcDemoReturn.code" @run="props.funcDemoReturn.execute" />
        <ResultPanel :result="props.funcDemoReturn.result" :error="props.funcDemoReturn.error" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPanel from '@/components/InputPanel.vue';
import CodePanel from '@/components/CodePanel.vue'
import ResultPanel from '@/components/ResultPanel.vue'
import type { FuncDemoReturn } from '@/composables/';
import { onMounted } from 'vue';

const props = defineProps<{
  funcDemoReturn: FuncDemoReturn
}>()

onMounted(() => {
  // console.log('FuncItem Mounted:', props.funcDemoReturn);
})

</script>

<style scoped lang="scss">
.demo_wrapper {
  .header {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 16px 0;
    margin: 16px 0;
    box-shadow: var(--el-box-shadow-light);
  }

  .content {
    display: flex;
    gap: 16px;

    .left {
      flex: 1;
      min-width: 280px;
    }

    .right {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}

#app.mobile {
  .demo_wrapper {
    .content {
      flex-direction: column;
    }
  }
}
</style>

<style lang="scss">
.demo_wrapper {
  .content {
    .left {
      .el-form-item__content {
        width: 200px;
      }
    }
  }
}
</style>