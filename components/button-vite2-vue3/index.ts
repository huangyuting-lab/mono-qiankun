// @ts-ignore
import App from "./src/App.vue";
import type { App as AppType, Plugin } from "vue"

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: AppType) => {
        //注册组件
        // @ts-ignore
        app.component((comp as any).name, comp)
    }
    return comp as SFCWithInstall<T>
}

const SelfButton = withInstall(App)
export default SelfButton
