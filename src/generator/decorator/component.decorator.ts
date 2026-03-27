import { TComponentKind } from '../model/type/component-kind.type';
import { TComponent } from '../model/type/component.type';
import { componentStore } from '../store/component.store';

export const getComponent = (kind: TComponentKind) => {
  if (componentStore.has(kind)) {
    return componentStore.get(kind);
  }
  throw new Error(`Not found element: ${kind} in the componentStore store!`);
};

export const RegisterComponent = (kind: TComponentKind) => {
  return (component: TComponent) => {
    if (componentStore.has(kind)) {
      throw new Error(`Element: ${kind} is already registered in the componentStore store!`);
    }
    componentStore.set(kind, component);
  };
};
