import { TComponentKind } from '../model/type/component-kind.type';
import { componentStore } from '../store/component.store';

export const getComponent = (kind: TComponentKind) => {
  const component = componentStore.get(kind);
  if (component) {
    return component;
  }
  throw new Error(`Not found element: ${kind} in the componentStore store!`);
};

export const RegisterComponent = (kind: TComponentKind) => {
  return (component: any) => {
    if (componentStore.has(kind)) {
      throw new Error(`Element: ${kind} is already registered in the componentStore store!`);
    }
    componentStore.set(kind, component);
  };
};
