import { controlStore, layoutStore } from '../store/component.store';
import { DecoratorModel } from './decorator.model';

export const getComponent = (model: DecoratorModel) => {
  const { component } = model;
  if (component === 'control') {
    const control = controlStore.get(model.kind);
    if (control) return control;
  }
  if (component === 'layout') {
    const layout = layoutStore.get(model.kind);
    if (layout) return layout;
  }
  throw new Error(`Not found component: ${model.component} in the store!`);
};

export const RegisterComponent = (model: DecoratorModel) => {
  return (constructor: any) => {
    const { component } = model;
    if (component === 'control') {
      const { kind } = model;
      if (controlStore.has(kind)) {
        throw new Error(`Element: ${kind} is already registered in the store!`);
      }
      controlStore.set(kind, constructor);
      return;
    }
    if (component === 'layout') {
      const { kind } = model;
      if (layoutStore.has(kind)) {
        throw new Error(`Element: ${kind} is already registered in the store!`);
      }
      layoutStore.set(kind, constructor);
      return;
    }
  };
};
