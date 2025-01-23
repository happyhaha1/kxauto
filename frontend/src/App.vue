<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider
    preflight-style-disabled
    class="h-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="isDark ? darkTheme : null"
  >
    <n-global-style />
    <GlobalProvider>
      <RouterView />
    </GlobalProvider>
  </n-config-provider>
</template>
