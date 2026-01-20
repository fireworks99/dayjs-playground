<template>
  <div>
    <h3 style="text-align: center;">你可以打开控制台，随意地试验这些方法（除非方法依赖插件）。</h3>

    <div v-for="(demo, index) in demos" :key="index">
      <FuncItem :func-demo-return="demo"/>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import FuncItem from './FuncItem.vue';
import useFuncDemos from '@/composables';

const demos = useFuncDemos();
</script>