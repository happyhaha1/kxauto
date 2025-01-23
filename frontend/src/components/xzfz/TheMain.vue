<script setup lang="ts">
import { ipcApiRoute } from '~/api'

const currentStep = ref(1)
const data_dir = ref('')
function selectDir() {
  ipc.invoke(ipcApiRoute.os.selectFile, '').then((res: any) => {
    data_dir.value = res
  })
}
</script>

<template>
  <n-card>
    <n-flex vertical>
      <n-flex justify="center">
        <n-steps :current="currentStep">
          <n-step
            title="登录账户"
            description="需要登录各个系统的账户"
          />
          <n-step
            title="上传文件"
            description="上传需要研判的文件"
          />
          <n-step
            title="执行"
            description="自动化流程启动"
          />
          <n-step
            title="执行完毕"
            description="执行完毕"
          />
        </n-steps>
      </n-flex>
      <n-divider />

      <n-space justify="end">
        <n-button type="success" :disabled="currentStep === 1" @click="currentStep--">
          上一步
        </n-button>
        <n-button :disabled="currentStep === 4" @click="currentStep++">
          下一步
        </n-button>
      </n-space>
    </n-flex>
  </n-card>
  <n-card mt-5>
    <n-flex v-if="currentStep === 1">
      <n-button type="primary" ghost>
        打开浏览器
      </n-button>
    </n-flex>
    <n-flex v-if="currentStep === 2">
      <n-input-group>
        <n-input-group-label>研判文件</n-input-group-label>
        <n-input :value="data_dir" disabled />
        <n-button type="primary" ghost @click="selectDir">
          选择文件
        </n-button>
      </n-input-group>
    </n-flex>
  </n-card>
</template>
