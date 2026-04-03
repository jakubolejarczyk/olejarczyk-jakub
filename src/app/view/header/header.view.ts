import { inject, Injectable } from '@angular/core';
import { NodeModel } from '../../../generator/model/node/node.model';
import { HeaderLayoutBuilder } from '../../../generator/builder/layout/header-layout.builder';
import { HomeView } from './home.view';
import { NavigationView } from './navigation.view';

@Injectable({ providedIn: 'root' })
export class HeaderView {
  navigation = inject(NavigationView);
  home = inject(HomeView);

  buildNodes(): NodeModel {
    return HeaderLayoutBuilder.builder()
      .setChildren([this.navigation.build(), this.home.build()])
      .build();
  }
}
