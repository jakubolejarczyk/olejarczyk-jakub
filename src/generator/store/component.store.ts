import { ControlType } from '../../core/type/control.type';
import { LayoutType } from '../../core/type/layout.type';
import { UtilityType } from '../../core/type/utility.type';

export const controlStore = new Map<ControlType, any>();

export const layoutStore = new Map<LayoutType, any>();

export const utilityStore = new Map<UtilityType, any>();
