import {createSSRApp} from "vue"
import App from "./App.vue"

import VConsole from 'vconsole'
const vConsole = new VConsole()

export function createApp() {
    const app = createSSRApp(App)
    return {app}
}
