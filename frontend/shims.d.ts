import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import type { LoadingBarInst } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import type { NotificationApiInjection } from 'naive-ui/lib/notification/src/NotificationProvider'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare global {
  interface Window {
    $message: MessageApiInjection
    $dialog: DialogApiInjection
    $notification: NotificationApiInjection
    $loadingBar: LoadingBarInst
    electron?: any
  }
}
