import components, { photonComponents } from './stories'
import { App } from 'vue';

export type PluginFunction<T> = (Vue: App, options?: T) => void;

export const install: PluginFunction<any> = (app, options) => {
  for (const key in components) {
    const _key = options.prefix ? options.prefix + key : key
    app.component(_key, components[key as keyof photonComponents])
  }
};