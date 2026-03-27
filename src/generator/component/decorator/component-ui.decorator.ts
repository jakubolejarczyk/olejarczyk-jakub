import { ComponentUiKindEnum } from '../../model/type/component-kind.type';
import { componentUiStore } from '../store/component-ui.store';
import { ComponentUiType } from '../type/component-ui.type';

export const getComponentUi = (kind: ComponentUiKindEnum) => {
  return componentUiStore.get(kind);
};

export const RegisterComponentUi = (kind: ComponentUiKindEnum) => {
  return (componentUi: ComponentUiType) => {
    if (componentUiStore.has(kind)) {
      throw new Error(`Component Ui: ${kind} already registered!`);
    }
    componentUiStore.set(kind, componentUi);
  };
};
