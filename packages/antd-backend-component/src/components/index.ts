import { App } from 'vue';
import ProTable from "./ProTable";
const Components = [ProTable];
const registerComponent = {
    install: (app: App) => {
        Components.forEach((item) => {
            app.component(item.name, item);
        })
    }
}
export default registerComponent
export {
    ProTable,
}