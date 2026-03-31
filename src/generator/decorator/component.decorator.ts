import { DecoratorModel } from '../model/decorator/decorator.model';
import { controlStore, layoutStore } from '../store/component.store';

export const getComponent = (model: DecoratorModel) => {
  const { kind } = model;
  if (kind === 'control') {
    const control = controlStore.get(model.control);
    if (control) {
      return control;
    }
  }
  if (kind === 'layout') {
    const layout = layoutStore.get(model.layout);
    if (layout) {
      return layout;
    }
  }
  throw new Error(`Not found component: ${kind} in the store!`);
};

export const RegisterComponent = (model: DecoratorModel) => {
  return (component: any) => {
    const { kind } = model;
    if (kind === 'control') {
      const { control } = model;
      if (controlStore.has(control)) {
        throw new Error(`Element: ${control} is already registered in the store!`);
      }
      controlStore.set(control, component);
    }
    if (kind === 'layout') {
      const { layout } = model;
      if (layoutStore.has(layout)) {
        throw new Error(`Element: ${layout} is already registered in the store!`);
      }
      layoutStore.set(layout, component);
    }
  };
};
