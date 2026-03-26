import { ComponentKindEnum } from '../enum/component-kind.enum';
import { componentStore } from '../store/component.store';

export const getComponent = (kind: ComponentKindEnum) => {
  return componentStore.get(kind);
};

export const RegisterComponent = (kind: ComponentKindEnum) => {
  return (constructor: any) => {
    if (componentStore.has(kind)) {
      throw new Error(`Component ${kind} already registered!`);
    }
    componentStore.set(kind, constructor);
  };
};
