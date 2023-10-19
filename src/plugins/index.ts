import { App } from "vue";
import vuetify from "./vuetify";

export const setupPlugins = (app: App) => {
  app.use(vuetify);
}