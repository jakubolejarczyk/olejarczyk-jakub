import { Component, inject } from '@angular/core';
import { Generator } from '../generator/generator/generator';
import { NodeModel } from '../generator/model/node/node.model';
import { HeaderView } from './view/header/header.view';
import { MainView } from './view/main/main.view';
import { FooterView } from './view/footer/footer.view';

@Component({
  selector: 'app',
  template: '<generator [nodes]="nodes"></generator>',
  imports: [Generator],
})
export class App {
  header = inject(HeaderView);
  main = inject(MainView);
  footer = inject(FooterView);

  nodes: NodeModel[] = [this.header.buildNodes(), this.main.buildNodes(), this.footer.buildNodes()];
}
