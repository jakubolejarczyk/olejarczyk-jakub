import { LayoutKindType } from '../model/type/layout-kind.type';
import { layoutStore } from '../store/layout.store';

export const getLayout = (kind: LayoutKindType) => {
  const layout = layoutStore.get(kind);
  if (layout) {
    return layout;
  }
  throw new Error(`Not found element: ${kind} in the layoutStore store!`);
};

export const RegisterLayout = (kind: LayoutKindType) => {
  return (layout: any) => {
    if (layoutStore.has(kind)) {
      throw new Error(`Element: ${kind} is already registered in the layoutStore store!`);
    }
    layoutStore.set(kind, layout);
  };
};
