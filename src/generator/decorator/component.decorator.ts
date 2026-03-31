import { ComponentType } from '../../style/type/component.type';
import { componentStore } from '../store/component.store';

export const getComponent = (kind: ComponentType) => {
  const component = componentStore.get(kind);
  if (component) {
    return component;
  }
  throw new Error(`Not found component: ${kind} in the componentStore store!`);
};

export const RegisterComponent = (kind: ComponentType) => {
  return (component: any) => {
    if (componentStore.has(kind)) {
      throw new Error(`Element: ${kind} is already registered in the layoutStore store!`);
    }
    componentStore.set(kind, component);
  };
};
