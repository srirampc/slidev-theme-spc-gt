import { defineRootSetup } from '@slidev/types'
import { watchEffect } from 'vue'
import configs from '#slidev/configs'

export default defineRootSetup(() => {
  if (typeof document === 'undefined')
    return

  watchEffect(() => {
    const themeConfig = configs.themeConfig || {}
    const disableGtColors =
      themeConfig.gtColors === false ||
      themeConfig.gtColors === 'false' ||
      themeConfig.plainColors === true ||
      themeConfig.plainColors === 'true'
    document.documentElement.classList.toggle('gt-plain-colors', disableGtColors)
  })
})