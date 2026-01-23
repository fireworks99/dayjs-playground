<template>
  <div class="home">

    <aside class="sidebar" v-if="!layoutStore.isMobile">
      <el-scrollbar>
        <div v-for="(demo, index) in demos" :key="index" class="sidebar-item" @click="scrollTo(demo)">{{ demo.title }}
        </div>
        <!-- <div class="sidebar-item" v-for="n in 20">{{ n }}</div> -->
      </el-scrollbar>
    </aside>
    <el-drawer v-else v-model="layoutStore.sidebarOpened" :with-header="false" size="168" direction="ltr">
      <div class="sidebar">
        <el-scrollbar>
          <div v-for="(demo, index) in demos" :key="index" class="sidebar-item" @click="scrollTo(demo)">{{ demo.title }}
          </div>
          <!-- <div class="sidebar-item" v-for="n in 20">{{ n }}</div> -->
        </el-scrollbar>
      </div>
    </el-drawer>

    <main class="main">
      <div class="header">

        <div class="left flex_center" v-if="layoutStore.isMobile" @click="layoutStore.toggleSidebar">
          ☰
        </div>

        <span v-if="!layoutStore.isMobile">你可以打开控制台，随意地试验这些方法（除非方法依赖插件）。</span>
        <span v-else>Just try it.</span>

      </div>

      
      <div class="content" id="main-content">
        <div v-for="(demo, index) in demos" :key="index">
          <FuncItem :func-demo-return="demo" />
        </div>
      </div>

    </main>

    <el-backtop :right="16" :bottom="16" target="#main-content"/>

  </div>
</template>

<script lang="ts" setup>
import FuncItem from './FuncItem.vue';
import useFuncDemos from '@/composables';
import type { FuncDemoReturn } from '@/composables/';
import { useLayoutStore } from '@/store/layout';

const layoutStore = useLayoutStore();

const demos = useFuncDemos();

const scrollTo = (demo: FuncDemoReturn) => {
  const el = document.getElementById(demo.title);
  el?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  layoutStore.closeSidebar();
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;

  .sidebar {
    width: 128px;
    border-right: 1px solid hsl(240, 5.9%, 90%);

    .sidebar-item {
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        background-color: rgb(236, 245, 255);
      }
    }
  }

  .main {
    flex: 1;
    min-width: 0;

    .header {
      font-size: 18px;
      font-weight: bold;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid hsl(240, 5.9%, 90%);
      text-align: center;
      position: relative;

      .left {
        position: absolute;
        left: 32px;
        top: calc((48px - 32px) / 2);

        width: 32px;
        height: 32px;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          color: hsl(240 6% 10%);
          background-color: hsl(240 5% 96%);
        }
      }
    }

    .content {
      padding: 0 16px;
      height: calc(100% - 48px);
      overflow-y: auto;

      &>div:last-child {
        margin-bottom: 16px;
      }
    }
  }
}
</style>

<style lang="scss">
#app.mobile {
  .home {
    .sidebar {
      border-right: none;
    }
  }
}
</style>