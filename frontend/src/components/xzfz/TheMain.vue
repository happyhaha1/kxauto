<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
import { ipcApiRoute } from '~/api'

const currentStep = ref(1)
const formValue = ref({
  dataDir: '',
})
const formRef: ref<FormInst | null> = ref(null)
const rules: FormRules = {
  dataDir: {
    required: true,
    message: '请选择文件',
    trigger: ['input', 'blur'],
  },
}
function selectDir() {
  ipc.invoke(ipcApiRoute.os.selectFile, '').then((res: any) => {
    formValue.value.dataDir = res
  })
}

function next() {
  if (currentStep.value === 3) {
    formRef.value?.validate((errors: Error[]) => {
      if (!errors) {
        ipc.send(ipcApiRoute.xzfz.parseXlsx, formValue.value.dataDir)
      }
      else {
        $message.error('请选择文件')
      }
    })
  }
  else {
    currentStep.value++
  }
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
        <n-button :disabled="currentStep === 4" @click="next">
          {{ currentStep === 3 ? '开始执行' : currentStep === 4 ? '完成' : '下一步' }}
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
    <n-flex v-if="currentStep >= 2">
      <n-form
        ref="formRef" inline :model="formValue"
        :rules="rules"
      >
        <n-form-item path="dataDir">
          <n-input-group>
            <n-input-group-label>研判文件</n-input-group-label>
            <n-input v-model:value="formValue.dataDir" disabled />
            <n-button type="primary" ghost @click="selectDir">
              选择文件
            </n-button>
          </n-input-group>
        </n-form-item>
      </n-form>
    </n-flex>
  </n-card>
</template>
