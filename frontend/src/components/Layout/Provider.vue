<script lang="ts" setup>
import { darkTheme, dateZhCN, useThemeVars } from 'naive-ui'

const layoutRef = ref()
const borderRadius = useCssVar('--n-border-radius', layoutRef)
const themeVars = useThemeVars()

watch(themeVars, (r) => {
  borderRadius.value = r.borderRadius
}, { immediate: true })
</script>

<template>
  <n-config-provider
    :ref="layoutRef"
    preflight-style-disabled
    :date-locale="dateZhCN"
    :theme="isDark ? darkTheme : null"
  >
    <n-loading-bar-provider>
      <n-message-provider :max="5">
        <n-notification-provider :max="8" placement="bottom-right">
          <n-dialog-provider>
            <div embedded>
              <n-spin bg-black bg-opacity-20 />
            </div>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
