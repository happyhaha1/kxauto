<script setup lang="ts">

</script>

<template>
  <n-layout position="absolute">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      瑞安市公安局科技信息化大队
    </n-layout-header>
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
      <n-layout-sider bordered content-style="padding: 24px;">
        黄金取现研判工具
      </n-layout-sider>
      <n-layout content-style="padding: 24px;">
        <xzfz-the-main />
      </n-layout>
    </n-layout>
    <n-layout-footer
      bordered
      position="absolute"
      style="height: 64px; padding: 24px"
    >
      Power By 郑开心
    </n-layout-footer>
  </n-layout>
</template>
