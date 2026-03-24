import { FooterView } from '../../view/footer/footer.view';
import { HeaderView } from '../../view/header/header.view';
import { MainView } from '../../view/main/main.view';
import { GroupDataModel } from './group-data.model';

export const groupDataConst: GroupDataModel = {
  header: {
    view: HeaderView,
    order: 0,
  },
  main: {
    view: MainView,
    order: 1,
  },
  footer: {
    view: FooterView,
    order: 2,
  },
};
